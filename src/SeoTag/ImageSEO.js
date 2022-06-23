import { useState, useTransition, useRef } from "react";

export default function ImageSEO({ src, alt }) {
  // initial state
  const [_, startTransition] = useTransition();
  const [loadingProcess, setLoadingProcess] = useState(false);
  const imageLoaded = useRef(null);

  // === handle if image loded procces ===
  const imageLoadingProccess = () => {
    const img = imageLoaded.current;

    if (!img && !img.complete) {
      startTransition(() => setLoadingProcess(true));
    } else {
      startTransition(() => setLoadingProcess(false));
    }
  };
  // === end handle if image loded procces ===

  return loadingProcess ? (
    <div className="w-full h-full animate-pulse bg-slate-100"></div>
  ) : (
    <img
      ref={imageLoaded}
      src={src}
      alt={alt}
      className="w-full h-full object-contain"
      decoding="async"
      loading="lazy"
      style={{
        contentVisibility: "auto",
      }}
      onLoad={imageLoadingProccess}
    />
  );
}
