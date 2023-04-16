import React from "react";

export default function Results(props) {
  return (
    <div>
      {props.results.map((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  );
}
