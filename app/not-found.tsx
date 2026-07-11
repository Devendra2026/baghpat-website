import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6">
      <div className="max-w-md rounded-lg border border-slate-200 bg-white p-6 text-center shadow-soft">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">404</p>
        <h1 className="mt-2 text-2xl font-semibold text-slate-950">Page not found</h1>
        <p className="mt-2 text-sm text-slate-500">That Aminagar Sarai Baghpat page is not available.</p>
        <Button  className="mt-5">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </div>
  );
}
