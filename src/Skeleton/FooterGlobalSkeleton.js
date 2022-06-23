export default function FooterGlobalSkeleton() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 animate-pulse px-3">
        <div className="py-16 bg-slate-100"></div>
        <div className="py-16 bg-slate-100"></div>
        <div className="py-16 bg-slate-100"></div>
      </div>

      <div className="py-8 bg-slate-100 mt-5"></div>
    </>
  );
}
