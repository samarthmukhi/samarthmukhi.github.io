import { Link } from "react-router-dom";
import Section from "../components/Section";

export default function NotFound() {
  return (
    <Section command="cd /404">
      <p className="mb-6 text-sm text-(--color-text-muted)">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="border-b border-(--color-text) pb-0.5 text-sm text-(--color-text)">
        Back to home
      </Link>
    </Section>
  );
}
