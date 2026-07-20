import { Button } from "@base-ui/react";
import {
  Bell,
  UserCircle,
} from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white">
      <div className="flex h-20 itmes-center justify-between px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className=" font-bold text-slate-900">
            Admin Portal
          </h2>
          <p className="text-xs text-slate-500">
            Town Panchayat, Aminagar Sarai, Baghpat
          </p>
        </div>

        <div className="flex itmes-center gap-3">
          {/* {Notification button} */}
          <Button
            type="button"
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:bg-slate-50"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right -2 top-2 h-2 w-2 rounded-full bg-red-500" />
          </Button>

          {/* Temporary admin profile */}
          <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-2">
            <UserCircle className="h-9 w-9 text-blue-600" />
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-blue-900">
                Admin User
              </p>
              <p className="text-xs text-slate-500">
                Administrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
