import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The requested page or project could not be found.",
};

export default function NotFound() {
  return (
    <div className="w-full min-h-[70vh] flex flex-col justify-center items-center px-6 py-20 bg-surface">
      <div className="max-w-md w-full flex flex-col items-center text-center gap-6">
        <span className="font-label-sm text-label-sm uppercase tracking-widest text-primary font-semibold">
          Error 404
        </span>

        <h1 className="font-headline-lg text-headline-lg text-on-surface uppercase font-bold tracking-tight">
          Page Not Found
        </h1>

        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
          The page or project record you were looking for doesn&apos;t exist, has been renamed, or moved.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-inverse-surface hover:bg-primary text-on-primary font-label-md text-label-md uppercase px-5 py-2.5 transition-colors duration-150"
          >
            <span>View Projects</span>
            <span>→</span>
          </Link>
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
