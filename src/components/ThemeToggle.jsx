import { useTheme } from "../lib/theme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button type="button" className="ctl" onClick={toggle} aria-label="Toggle color theme">
      [{theme === "dark" ? "LIGHT" : "DARK"}]
    </button>
  );
}
