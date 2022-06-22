import React, { Suspense } from "react";

// skeleton
import SkeletonMobileNavigtion from "Skeleton/SkeletonMobileNavigtion";
import SkeletonDesktopNavigation from "Skeleton/SkeletonDesktopNavigation";

// components
const MobileNavigation = React.lazy(() =>
  import("components/moleculs/NavigationLayoutGlobal/MobileNavigation")
);
const DesktopNavigation = React.lazy(() =>
  import("components/moleculs/NavigationLayoutGlobal/DesktopNavigation")
);

export default function NavigationLayoutGobal({ children }) {
  return (
    <div className="max-w-[1480px] mx-auto">
      {/* --- navbar --- */}
      <div className="sm:hidden">
        <Suspense fallback={<SkeletonMobileNavigtion />}>
          <MobileNavigation />
        </Suspense>
      </div>

      <div className="">
        <Suspense fallback={<SkeletonDesktopNavigation />}>
          <DesktopNavigation />
        </Suspense>
      </div>
      {/* --- end navbar --- */}

      {/* --- main content --- */}
      {children}
      {/* --- end main content */}

      {/* --- footer --- */}
      <h1>Footer</h1>
      {/* --- end footer --- */}
    </div>
  );
}
