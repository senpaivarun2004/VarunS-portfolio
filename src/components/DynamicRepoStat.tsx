import React, { useEffect, useState } from "react";

export const DynamicRepoStat: React.FC = () => {
  const [repoCount, setRepoCount] = useState<number | null>(null);

  useEffect(() => {
    async function fetchUserRepos() {
      try {
        const res = await fetch("https://api.github.com/users/senpaivarun2004");
        if (res.ok) {
          const data = await res.json();
          if (typeof data.public_repos === "number") {
            setRepoCount(data.public_repos);
          }
        }
      } catch {
        // Silently fall back if offline or rate-limited
      }
    }
    fetchUserRepos();
  }, []);

  return (
    <div className="flex flex-col items-center px-4">
      <span className="font-mono text-2xl md:text-3xl font-bold text-white tracking-tight">
        {repoCount !== null ? repoCount : "GitHub"}
      </span>
      <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider mt-1">
        {repoCount !== null ? "Public Repositories" : "Repositories"}
      </span>
    </div>
  );
};
