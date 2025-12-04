import { SignIn } from "@clerk/tanstack-react-start";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/signin")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1> sign in </h1>
      <Link to="/">go home</Link>
      <SignIn />
    </div>
  );
}
