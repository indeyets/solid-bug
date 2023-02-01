// @refresh reload
import { Routes, Route } from "@solidjs/router";
import { Suspense, lazy } from "solid-js";
import { Body, Head, Html, Meta, Scripts, Title } from "solid-start";
import { ErrorBoundary } from "solid-start/error-boundary";

import { WorkPageData } from "./pages/WorkPage.data";
const WorkPage = lazy(() => import("./pages/WorkPage"));

const workPageMatchFilters = {
  type: ["s", "p", "i"],
  workname: /(^[\d\w\-]+$)/,
};

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - With Vitest</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <Route
                path="/:type/:workname"
                component={WorkPage}
                matchFilters={workPageMatchFilters}
                data={WorkPageData}
              />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
