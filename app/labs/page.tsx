import Link from "next/link";
import TOC from "./TOC";

export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Labs - Olivia Hill</h1>
      <TOC />
      <ul>
        <li>
          <Link href="/labs/lab1" id="wd-lab1-link">
            Lab 1: HTML Examples
          </Link>
        </li>
        <li>
          <Link href="/labs/lab2" id="wd-lab2-link">
            Lab 2: CSS Basics
          </Link>
        </li>
        <li>
          <Link href="/labs/lab3" id="wd-lab3-link">
            Lab 3: JavaScript Fundamentals
          </Link>
        </li>
        <li>
          <Link href="/labs/lab4" id="wd-lab4-link">
            Lab 4: State + Redux
          </Link>
        </li>
      </ul>
    </div>
  );
}