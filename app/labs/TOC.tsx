'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TOC() {
  const pathname = usePathname();
  
  return (
    <ul className="nav nav-pills">
      <li className="nav-item">
        <Link href="/labs"
              className={`nav-link ${pathname === '/labs' ? 'active' : ''}`}>
          Labs
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/labs/lab1"
              className={`nav-link ${pathname === '/labs/lab1' ? 'active' : ''}`}>
          Lab 1
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/labs/lab2"
              className={`nav-link ${pathname.startsWith('/labs/lab2') ? 'active' : ''}`}>
          Lab 2
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/labs/lab3"
              className={`nav-link ${pathname === '/labs/lab3' ? 'active' : ''}`}>
          Lab 3
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/labs/lab4"
              className={`nav-link ${pathname.startsWith('/labs/lab4') ? 'active' : ''}`}>
          Lab 4
        </Link>
      </li>
      <li className="nav-item">
        <Link href="/labs/lab5"
              className={`nav-link ${pathname.startsWith('/labs/lab5') ? 'active' : ''}`}>
          Lab 5
        </Link>
      </li>
      <li className="nav-item">
        <a href="https://github.com/hill-ol/kambaz-node-server-app"
           className="nav-link" target="_blank" rel="noopener noreferrer">
          Server GitHub
        </a>
      </li>
      <li className="nav-item">
        <a href="https://kambaz-node-server-app-9rgk.onrender.com"
           className="nav-link" target="_blank" rel="noopener noreferrer">
          Server (Render)
        </a>
      </li>
      <li className="nav-item">
        <Link href="/"
              className={`nav-link ${pathname === '/' ? 'active' : ''}`}>
          Kambaz
        </Link>
      </li>
      <li className="nav-item">
        <a href="https://github.com/hill-ol" className="nav-link"
           target="_blank" rel="noopener noreferrer">
          My GitHub
        </a>
      </li>
    </ul>
  );
}