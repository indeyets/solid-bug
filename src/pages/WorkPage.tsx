import { JSXElement, Suspense, Show } from "solid-js";
import { useRouteData } from "solid-start";

const nl2p = (page: string): JSXElement =>
  page.split("\n").map((line) => <p>{line}</p>);

const WorkPage = () => {
  const data = useRouteData();

  console.log({ work: data.work });

  return (
    <Suspense fallback={"Loading…"}>
      <div>
        <h1>{data.work().title}</h1>
        <p>{data.work().description}</p>
        <div>{nl2p(data.work().pages[0])}</div>
      </div>
    </Suspense>
  );
};

export default WorkPage;
