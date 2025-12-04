/// <reference types="vite/client" />
import { ClerkProvider } from "@clerk/tanstack-react-start";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import * as React from "react";
import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
  useMatches,
  useRouterState,
} from "@tanstack/react-router";
import { DefaultCatchBoundary } from "~/components/DefaultCatchBoundary.js";
import { NotFound } from "~/components/NotFound.js";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
    ],
  }),
  errorComponent: (props) => {
    return (
      <RootDocument>
        <DefaultCatchBoundary {...props} />
      </RootDocument>
    );
  },
  notFoundComponent: () => <NotFound />,
  component: RootComponent,
});

function RootComponent() {
  return (
    <ClerkProvider>
      <RootDocument>
        <Outlet />
      </RootDocument>
    </ClerkProvider>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const pathname = useRouterState({
    select: (s) => s.resolvedLocation?.href,
  });
  return (
    <html>
      <head>
        <HeadContent />
      </head>
      <body>
        <h2>
          pathname: <code>{pathname}</code>
        </h2>
        {children}
        <TanStackRouterDevtools position="bottom-right" />
        <Scripts />
      </body>
    </html>
  );
}
