"use client";
import React from "react";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ course }: { course: { name: string } | undefined; }) {
  const pathname = usePathname();
  const page = pathname.split("/").pop() || "";
  const capitalizedPage = page.charAt(0).toUpperCase() + page.slice(1);
  return (
    <span>
      {course?.name} &gt; {capitalizedPage}
    </span>
  );
}