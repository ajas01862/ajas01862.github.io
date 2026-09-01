import { useEffect, useMemo, useState } from "react";
import "./404.css";

const username = "ajas01862";

export default function NotFound() {
  const [repos, setRepos] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("pages");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function loadRepos() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
          { signal: controller.signal },
        );

        if (!response.ok) {
          throw new Error(`GitHub returned HTTP ${response.status}`);
        }

        const data = await response.json();
        setRepos(Array.isArray(data) ? data : []);
      } catch (error) {
        if (error?.name !== "AbortError") {
          console.error("[404] Failed to load repositories:", error);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    void loadRepos();

    return () => controller.abort();
  }, []);

  const filteredRepos = useMemo(() => {
    const query = search.trim().toLowerCase();

    return repos.filter((repo) => {
      const matchesSearch =
        !query ||
        repo.name.toLowerCase().includes(query) ||
        (repo.description || "").toLowerCase().includes(query);

      if (!matchesSearch) {
        return false;
      }

      if (filter === "pages") {
        return repo.has_pages;
      }

      if (filter === "no-pages") {
        return !repo.has_pages;
      }

      return true;
    });
  }, [filter, repos, search]);

  return (
    <main className="notfound">
      <div className="notfound-orb notfound-orb-one" />
      <div className="notfound-orb notfound-orb-two" />
      <div className="notfound-grid" />

      <div className="notfound-container">
        <section className="notfound-hero">
          <a className="notfound-brand" href="/" aria-label="Go home">
            <img src="/img/MyLogoIcon.png" alt="Ajas logo" />
          </a>

          <div className="notfound-badge">
            <span />    
            404 · Page Not Found
          </div>

          <h1>Lost in the <em>code.</em></h1>

          <p>
            This route doesn't exist. Head back home or explore the projects
            that are actually available.
          </p>

          <div className="notfound-actions">
            <a href="/" className="notfound-primary">
              Go Home
            </a>
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
              className="notfound-secondary"
            >
              GitHub Profile
            </a>
          </div>
        </section>

        <section className="notfound-projects" aria-labelledby="projects-title">
          <div className="notfound-projects-top">
            <div>
              <span className="notfound-eyebrow">PROJECT INDEX</span>
              <h2 id="projects-title">Available Projects</h2>
              <p>Browse repositories and live GitHub Pages demos.</p>
            </div>

            <div className="notfound-controls">
              <input
                type="search"
                placeholder="Search projects..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                aria-label="Search projects"
              />
              <select
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
                aria-label="Filter projects"
              >
                <option value="pages">GitHub Pages</option>
                <option value="all">All Repositories</option>
                <option value="no-pages">Without Pages</option>
              </select>
            </div>
          </div>

          {loading ? (
            <div className="notfound-state">
              <div className="notfound-spinner" />
              <span>Loading projects...</span>
            </div>
          ) : filteredRepos.length === 0 ? (
            <div className="notfound-state">
              <strong>No projects found</strong>
              <span>Try a different search or repository filter.</span>
            </div>
          ) : (
            <div className="notfound-grid-list">
              {filteredRepos.map((repo) => {
                const liveUrl = repo.has_pages
                  ? repo.name.toLowerCase() === `${username}.github.io`
                    ? `https://${username}.github.io/`
                    :
repo.homepage ? repo.homepage :  `https://${username}.github.io/${repo.name}/`
                  : "";

                return (
                  <article className="notfound-card" key={repo.id}>
                    <div className="notfound-card-glow" />
                    <div className="notfound-card-top">
                      <span className="notfound-card-index">
                        {String(repo.name.length).padStart(2, "0")}
                      </span>
                      {repo.has_pages && <span className="notfound-live">LIVE</span>}
                    </div>

                    <h3>{repo.name}</h3>
                    <p>{repo.description || "No description available."}</p>

                    <div className="notfound-card-actions">
                      <a href={repo.html_url} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                      {liveUrl && (
                        <a href={liveUrl} target="_blank" rel="noreferrer">
                          Live Site
                        </a>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </section>

        <footer className="notfound-footer">
          <span>© {new Date().getFullYear()} Ajas</span>
          <span>404</span>
        </footer>
      </div>
    </main>
  );
}