"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ExternalLink,
  LayoutDashboard,
  MessageSquareText,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";

const sidebarLinks = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
  },
  {
    title: "Contact Submissions",
    href: "/admin/contacts",
    icon: MessageSquareText,
  },
  {
    title: "Public Grievances",
    href: "/admin/grievances",
    icon: TriangleAlert,
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen w-64 flex-col border-r border-slate-200 bg-white lg:flex">
      {/* Logo */}
      <div className="flex h-20 items-center gap-3 border-b border-slate-200 px-5">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-white">
          <ShieldCheck className="h-6 w-6" />
        </div>

        <div>
          <h2 className="font-bold text-slate-900">
            Town Panchayat , Aminagar Sarai 
          </h2>

          <p className="text-xs text-slate-500">
            Administration Panel
          </p>
        </div>
      </div>

      {/* Links */}
      <nav className="flex-1 space-y-2 p-4">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;

          const isActive =
            link.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Icon className="h-5 w-5" />

              {link.title}
            </Link>
          );
        })}
      </nav>

      {/* Back to website */}
      <div className="border-t border-slate-200 p-4">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100"
        >
          <ExternalLink className="h-5 w-5" />

          Back to Website
        </Link>
      </div>
    </aside>
  );
}
