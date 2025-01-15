"use client";

import { useTheme } from "next-themes";
import GitHubCalendar from "react-github-calendar";
import { espionage, github } from "@/app/(site)/data/contribution-graph-theme";
import { useState } from "react";
import YearButton from "./shared/YearButton";
import { getGitHubYears } from "@/app/(site)/utils/calculate-years";
import EmptyState from "./shared/EmptyState";

export default function ContributionGraph() {
  const { resolvedTheme } = useTheme();
  const scheme = resolvedTheme === "dark" ? "dark" : "light";

  const today = new Date().getFullYear();
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "0oAVIRALo0";
  const joinYear = Number(process.env.NEXT_PUBLIC_GITHUB_JOIN_YEAR || 2022);
  const years = getGitHubYears(joinYear);

  const [calendarYear, setCalendarYear] = useState<number | null>(null);

  if (!username || !joinYear)
    return (
      <EmptyState
        title="Unable to load Contribution Graph"
        message="We could not find GitHub credentials. Please add a username and join year."
      />
    );

  return (
    <div className="flex xl:flex-row flex-col gap-4">
      <div className="dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 p-8 rounded-lg max-w-fit max-h-fit">
        <GitHubCalendar
          username={username}
          theme={github}
          colorScheme={scheme}
          blockSize={13}
          year={calendarYear ?? today}
        />
      </div>
      <div className="flex justify-start xl:flex-col flex-row flex-wrap gap-2">
        {years.slice(0, Math.min(4, years.length)).map((year) => (
          <YearButton
            key={year}
            year={year}
            currentYear={calendarYear ?? today}
            onClick={() => setCalendarYear(year === calendarYear ? null : year)}
            tabIndex={0}
            aria-pressed={calendarYear === year}
            role="button"
          />
        ))}
      </div>
    </div>
  );
}
