"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({
  trigger,
  children,
  triggerClassName = "",
  bodyClassName = "",
  bare = false,
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
  triggerClassName?: string;
  bodyClassName?: string;
  bare?: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className={triggerClassName}
      >
        {trigger}
        {bare ? (
          <ChevronDown
            className={`chevron ${open ? "open" : ""} w-4 h-4 shrink-0`}
            strokeWidth={2.5}
          />
        ) : (
          <span
            className={`chevron ${open ? "open" : ""} flex-shrink-0 w-8 h-8 rounded-full border border-line flex items-center justify-center`}
          >
            <ChevronDown className="w-4 h-4" strokeWidth={2.5} />
          </span>
        )}
      </button>
      <div className={`accordion-body ${open ? "open" : ""} ${bodyClassName}`}>
        <div>{children}</div>
      </div>
    </>
  );
}
