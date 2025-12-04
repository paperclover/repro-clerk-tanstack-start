import { createFileRoute, Link } from "@tanstack/react-router";
export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <div>
      <h1> home </h1>
      <Link to="/signin">Sign In</Link>
    </div>
  );
}
