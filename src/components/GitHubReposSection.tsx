"use client";

import React, { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count?: number;
  forks_count?: number;
  topics?: string[];
  updated_at?: string;
}

// Minimal confirmed fallback repos without fake timestamps or outdated star/fork counts
const fallbackRepos: Repo[] = [
  {
    id: 1,
    name: "HR-Sales-Data-Analysis-",
    description: "Power BI dashboard for HR and Sales analytics with KPI cards and interactive business trend views.",
    html_url: "https://github.com/senpaivarun2004/HR-Sales-Data-Analysis-",
    language: "Power BI",
    topics: ["power-bi", "data-analytics", "sales", "hr", "dax"]
  },
  {
    id: 2,
    name: "Project-on-Prevent-Cyber-Bulling-in-social-media",
    description: "Machine learning and NLP pipeline designed to detect cyberbullying on social media platforms.",
    html_url: "https://github.com/senpaivarun2004/Project-on-Prevent-Cyber-Bulling-in-social-media",
    language: "Python",
    topics: ["machine-learning", "nlp", "cybersecurity", "safety", "svm"]
  },
  {
    id: 3,
    name: "kannada-kagunita",
    description: "Interactive Kannada language learning project.",
    html_url: "https://github.com/senpaivarun2004/kannada-kagunita",
    language: "JavaScript",
    topics: ["education", "javascript", "interactive"]
  },
  {
    id: 4,
    name: "MindQuest-",
    description: "Interactive quiz application exploring programming challenges and knowledge testing.",
    html_url: "https://github.com/senpaivarun2004/MindQuest-",
    language: "Python",
    topics: ["python", "quiz-app", "interactive"]
  },
  {
    id: 5,
    name: "RhythmCode",
    description: "Creative coding exploration combining audio and web interactions.",
    html_url: "https://github.com/senpaivarun2004/RhythmCode",
    language: "HTML",
    topics: ["creative-coding", "html", "audio"]
  }
];

export function GitHubReposSection() {
  const [repos, setRepos] = useState<Repo[]>(fallbackRepos);
  const [filter, setFilter] = useState<string>("All");
  const [isLive, setIsLive] = useState<boolean>(false);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch("https://api.github.com/users/senpaivarun2004/repos?sort=updated&per_page=30");
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length > 0) {
            // Sort by most recently updated
            const sorted = data.sort((a: Repo, b: Repo) => {
              const timeA = a.updated_at ? new Date(a.updated_at).getTime() : 0;
              const timeB = b.updated_at ? new Date(b.updated_at).getTime() : 0;
              return timeB - timeA;
            });
            setRepos(sorted);
            setIsLive(true);
          }
        }
      } catch {
        // Graceful fallback to verified list
      }
    }
    fetchRepos();
  }, []);

  const filterLanguages = ["All", "Python", "JavaScript", "HTML", "Power BI", "Data"];

  const filteredRepos = repos.filter((r) => {
    if (filter === "All") return true;
    if (filter === "Data") {
      return (
        r.name.toLowerCase().includes("data") ||
        r.name.toLowerCase().includes("sales") ||
        (r.topics && r.topics.some((t) => t.includes("data") || t.includes("analytics")))
      );
    }
    return r.language === filter;
  });

  const formatDate = (isoString?: string) => {
    if (!isoString) return null;
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    } catch {
      return null;
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Status & Filter Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-2">
        <div className="flex items-center gap-2 font-mono text-xs text-text-secondary">
          <span className={`w-2 h-2 rounded-full ${isLive ? "bg-emerald-400 animate-pulse" : "bg-accent-cyan"}`}></span>
          <span>{isLive ? "Live from GitHub REST API" : "Verified Public Repositories (senpaivarun2004)"}</span>
          <span className="px-2 py-0.5 rounded bg-bg-surface border border-border text-[10px]">
            {filteredRepos.length} repos
          </span>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-1.5 font-mono text-xs">
          {filterLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => setFilter(lang)}
              className={`px-3 py-1 rounded-md text-xs transition-colors cursor-pointer ${
                filter === lang
                  ? "bg-accent-cyan text-black font-bold"
                  : "bg-bg-surface text-text-secondary border border-border hover:text-white"
              }`}
            >
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Repo Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredRepos.map((repo) => {
          const updatedDate = formatDate(repo.updated_at);
          return (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 bg-bg-surface border border-border hover:border-accent-cyan/60 rounded-xl transition-all duration-200 flex flex-col justify-between hover:-translate-y-1 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[10px] text-text-muted flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                    </svg>
                    public
                  </span>
                  <span className="text-text-muted group-hover:text-accent-cyan transition-colors text-xs font-mono">
                    ↗
                  </span>
                </div>

                <h4 className="font-sans text-base font-bold text-white tracking-tight group-hover:text-accent-cyan transition-colors mb-2 break-words">
                  {repo.name}
                </h4>

                <p className="font-sans text-xs text-text-secondary leading-relaxed line-clamp-3 mb-4 font-normal">
                  {repo.description || "Public repository by Varun S exploring code, models and data solutions."}
                </p>
              </div>

              <div className="pt-3 border-t border-border/50 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-text-muted">
                <span className="flex items-center gap-1.5 text-text-secondary">
                  <span className="w-2 h-2 rounded-full bg-accent-cyan"></span>
                  {repo.language || "Tech"}
                </span>

                <div className="flex items-center gap-3">
                  {repo.stargazers_count !== undefined && repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1 text-yellow-400">
                      ★ {repo.stargazers_count}
                    </span>
                  )}
                  {repo.forks_count !== undefined && repo.forks_count > 0 && (
                    <span>⌥ {repo.forks_count}</span>
                  )}
                  {updatedDate && (
                    <span className="text-[10px] text-text-muted">
                      Updated {updatedDate}
                    </span>
                  )}
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div className="flex justify-center pt-4">
        <a
          href="https://github.com/senpaivarun2004?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 rounded-full bg-bg-surface border border-border hover:border-accent-cyan/50 text-white font-mono text-xs hover:text-accent-cyan transition-all flex items-center gap-2"
        >
          <span>View repositories on GitHub</span>
          <span>↗</span>
        </a>
      </div>
    </div>
  );
}

export default GitHubReposSection;
