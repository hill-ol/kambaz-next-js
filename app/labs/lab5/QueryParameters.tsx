"use client";
import { useState } from "react";
import { FormControl } from "react-bootstrap";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  const API = `${HTTP_SERVER}/lab5/calculator`;
  return (
    <div id="wd-query-parameters">
      <h3>Query Parameters</h3>
      <FormControl className="mb-2" id="wd-query-parameter-a" type="number"
        defaultValue={a} onChange={(e) => setA(e.target.value)} />
      <FormControl className="mb-2" id="wd-query-parameter-b" type="number"
        defaultValue={b} onChange={(e) => setB(e.target.value)} />
      <a className="btn btn-primary me-2" id="wd-query-parameter-add"
        href={`${API}?operation=add&a=${a}&b=${b}`}>
        Add {a} + {b}
      </a>
      <a className="btn btn-danger me-2" id="wd-query-parameter-subtract"
        href={`${API}?operation=subtract&a=${a}&b=${b}`}>
        Subtract {a} - {b}
      </a>
      <a className="btn btn-success me-2" id="wd-query-parameter-multiply"
        href={`${API}?operation=multiply&a=${a}&b=${b}`}>
        Multiply {a} * {b}
      </a>
      <a className="btn btn-warning" id="wd-query-parameter-divide"
        href={`${API}?operation=divide&a=${a}&b=${b}`}>
        Divide {a} / {b}
      </a>
      <hr />
    </div>
  );
}