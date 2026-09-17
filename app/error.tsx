"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Runtime Error:", error);
  }, [error]);

  return (
    <div className="w-full min-h-[70vh] flex flex-col justify-center items-center px-6 py-20 bg-surface">
      <div className="max-w-md w-full flex flex-col items-center text-center gap-6">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-error font-semibold">
          Something Went Wrong
        </span>

        <h1 className="font-headline-lg text-headline-lg text-on-surface uppercase font-bold tracking-tight">
          Unexpected Error
        </h1>

        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          An error occurred while loading this page. Your data is safe. Please try again or contact us if the problem persists.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md uppercase px-5 py-2.5 transition-colors duration-150 cursor-pointer"
          >
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md uppercase px-5 py-2.5 border border-outline-variant/50 transition-colors duration-150"
          >
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
