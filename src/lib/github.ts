/**
 * Latest GitHub release of a repository, fetched once per build.
 * Visitors never contact GitHub: the version is written into the HTML.
 * Set GITHUB_TOKEN to lift the anonymous rate limit (CI does).
 */
export interface Release {
  version: string;
  url: string;
  date: Date;
}

const cache = new Map<string, Promise<Release | null>>();

export function latestRelease(repoUrl: string): Promise<Release | null> {
  const match = repoUrl.match(/github\.com\/([^/]+)\/([^/#?]+)/);
  if (!match) return Promise.resolve(null);
  const key = `${match[1]}/${match[2]}`.toLowerCase();
  let pending = cache.get(key);
  if (!pending) {
    pending = fetchRelease(match[1]!, match[2]!);
    cache.set(key, pending);
  }
  return pending;
}

async function fetchRelease(owner: string, repo: string): Promise<Release | null> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
    "User-Agent": "xantoom.dev-build",
  };
  const token = process.env.GITHUB_TOKEN;
  if (token) headers.Authorization = `Bearer ${token}`;

  try {
    const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/releases/latest`, {
      headers,
      signal: AbortSignal.timeout(8000),
    });
    // 404: the repository has no published release yet.
    if (!response.ok) return null;
    const data = (await response.json()) as {
      tag_name?: string;
      html_url?: string;
      published_at?: string;
    };
    if (!data.tag_name || !data.html_url || !data.published_at) return null;
    return {
      version: data.tag_name.replace(/^v/i, ""),
      url: data.html_url,
      date: new Date(data.published_at),
    };
  } catch {
    // Offline build or GitHub down: the page simply shows no version.
    return null;
  }
}
