// @ts-expect-error
import Runtime from "@garfish/es-module";

const runtime = new Runtime();
runtime
  .analysisModule(
    `import 'http://localhost:5173/src/main.tsx';`
  )
  .then((x: any) => console.log(runtime, x));
