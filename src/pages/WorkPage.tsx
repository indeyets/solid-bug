import { JSXElement, Suspense, Show } from "solid-js";
import { useRouteData } from "solid-start";
import { A } from "@solidjs/router";

const nl2p = (page: string): JSXElement =>
  page.split("\n").map((line) => <p>{line}</p>);

const WorkPage = () => {
  const data = useRouteData();

  return (
    <Suspense fallback={"Loading…"}>
      <div>
        <h1>{data.work()?.title || ""}</h1>
        <p>{data.work()?.description || ""}</p>
        <div>{nl2p(data.work()?.pages[0] || "")}</div>
      </div>
      <A href="/s/test">Page 1</A>
      <br />
      <A href="/s/test?page=2">Page 2</A>
      <br />
    </Suspense>
  );
};

export default WorkPage;
