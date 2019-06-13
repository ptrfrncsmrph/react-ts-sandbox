import React, { FunctionComponent } from "react";
import "./App.scss";

declare const _id: <A>(a: A) => A;

// Need to pass a second generic type otherwise this will be
// interpreted as JSX
const id = <A, _>(a: A): A => a;

const headings: Array<string> = Array(20)
  .fill(null)
  .map((_, i) => `Hello ${i}`);

const App: FunctionComponent = () => {
  return (
    <main className="App">
      <h1>Hello</h1>
      <h2>Hello smaller</h2>
      {headings.map((heading, i) =>
        Array<JSX.Element>(<h3 key={id(i)}>{heading}</h3>)
      )}
    </main>
  );
};

export default App;
