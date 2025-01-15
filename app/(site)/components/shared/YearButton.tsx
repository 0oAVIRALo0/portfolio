import { MouseEventHandler } from "react";

interface YearButtonProps {
  year: number;
  currentYear: number | undefined;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  tabIndex?: number;
  role?: string;
  "aria-pressed"?: boolean;
}

export default function YearButton({
  year,
  currentYear,
  onClick,
  ...props
}: YearButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1 rounded-md ${
        year === currentYear
          ? "dark:bg-secondary-color bg-secondary-color dark:hover:border-transparent dark:text-zinc-800 text-white hover:border-transparent"
          : "dark:bg-primary-bg bg-zinc-50 dark:text-white text-zinc-800"
      }`}
      {...props}
    >
      {year}
    </button>
  );
}
