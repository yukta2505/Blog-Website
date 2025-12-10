'use client';
import React, { useMemo } from "react";

export default function OnThisPage({ htmlContent }) {
  // Extract headings from the HTML content
  const headings = useMemo(() => {
    if (!htmlContent) return [];
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");
    // Select h1, h2, h3, h4, h5, h6
    const headingElements = doc.querySelectorAll("h1, h2, h3, h4, h5, h6");
    return Array.from(headingElements).map((el) => ({
      id: el.id || el.textContent.replace(/\s+/g, "-").toLowerCase(),
      text: el.textContent,
      level: Number(el.tagName[1]),
    }));
  }, [htmlContent]);

  if (!headings.length) return null;

  return (
    <nav className="on-this-page p-4 border rounded bg-muted/50 absolute top-24 right-1/13">
      <h2 className="font-bold mb-2 text-lg">On This Page</h2>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={`ml-${(heading.level - 1) * 4}`}
          >
            <a
              href={`#${heading.id}`}
              className="text-sm text-purple-700 hover:underline"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
