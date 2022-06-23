export default function SkeletonDesktopNavigation() {
  return (
    <div className="animate-pulse hidden sm:block">
      <div className="bg-slate-100 w-full py-9"></div>
      <div className="bg-slate-100 w-full py-7 mt-1"></div>

      {/* --- destop --- */}
      <div className="hidden lg:flex items-center justify-between gap-3 mt-2">
        <div className="bg-slate-100 w-3/12 h-14"></div>
        <div className="bg-slate-100 w-3/12 h-14"></div>
        <div className="bg-slate-100 w-3/12 h-14"></div>
        <div className="bg-slate-100 w-3/12 h-14"></div>
      </div>
      {/* --- destop --- */}

      {/* --- tablet --- */}
      <div className="grid grid-cols-2 gap-1 lg:hidden mt-5">
        <div className="bg-slate-100 h-20"></div>
        <div className="bg-slate-100 h-20"></div>
        <div className="bg-slate-100 h-20"></div>
        <div className="bg-slate-100 h-20"></div>
      </div>
      {/* --- end tablet --- */}
    </div>
  );
}
