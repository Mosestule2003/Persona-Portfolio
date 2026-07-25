"use client";

import { useState } from "react";

export default function Accordion({
  trigger,
  children,
  triggerClassName = "",
  bodyClassName = "",
}: {
  trigger: React.ReactNode;
  children: React.ReactNode;
  triggerClassName?: string;
  bodyClassName?: string;
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
        <span
          className={`chevron ${open ? "open" : ""} flex-shrink-0 w-8 h-8 rounded-full border border-line flex items-center justify-center text-sm`}
        >
          &#8595;
        </span>
      </button>
      <div className={`accordion-body ${open ? "open" : ""} ${bodyClassName}`}>
        <div>{children}</div>
      </div>
    </>
  );
}
