import React, { FunctionComponent } from "react";
import "./App.scss";

const headings = Array(20)
  .fill(null)
  .map((_, i) => `Hello ${i}`);

const App: FunctionComponent = () => {
  return (
    <main className="App">
      <h1>Hello</h1>
      <h2>Hello smaller</h2>
      {headings.map((heading, i) => (
        <h3 key={i}>{heading}</h3>
      ))}
    </main>
  );
};

export default App;
