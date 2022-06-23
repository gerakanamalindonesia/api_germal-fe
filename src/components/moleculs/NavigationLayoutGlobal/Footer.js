import React, { Suspense } from "react";

// constant
import { menuCategory } from "fakeData";

// skeleton
import FooterGlobalSkeleton from "Skeleton/FooterGlobalSkeleton";

// SEO Tags
const ImageSEO = React.lazy(() => import("SeoTag/ImageSEO"));

export default function Footer() {
  return (
    <Suspense fallback={<FooterGlobalSkeleton />}>
      <div className="bg-while px-3 sm:px-5 grid gap-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-10 md:gap-5">
        {/* --- about us --- */}
        <div>
          <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-grayBlack">
            <span className="bg-red text-white py-1 px-2 rounded-md">
              jajan
            </span>
            kuy
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm mt-5 leading-relaxed">
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one
          </p>
        </div>
        {/* --- end about us --- */}

        {/* --- categories --- */}
        <div>
          <h6 className="text-grayBlack font-semibold text-lg">Categori</h6>

          {menuCategory.map((item, index) => (
            <div key={index} className="my-2 sm:my-4">
              <h6 className="text-gray-500 text-xs sm:text-sm cursor-default">
                {item.name}
              </h6>
            </div>
          ))}
        </div>
        {/* --- end categories --- */}

        {/* --- contact us --- */}
        <div>
          <h6 className="text-grayBlack font-semibold text-lg mb-3">
            Kontak Kami
          </h6>

          <p className="text-xs sm:text-sm text-gray-500 ">
            Kami melayani 24/7
          </p>

          <h1 className="font-bold text-red text-lg sm:text-xl lg:text-2xl my-1 sm:my-3">
            0821 2234 4432
          </h1>

          <p className=" text-xs sm:text-sm text-gray-500 underline">
            Jl. Matahati, Bersama Kamu, Aku Bahagia Selanya
          </p>

          <div className="mt-2 sm:mt-4 flex items-center gap-3 md:gap-2 lg:gap-4 flex-wrap">
            <div className="w-14 sm:w-16 h-14 sm:h-16">
              <ImageSEO src="/img/bni-payment.jpeg" alt="payment" />
            </div>

            <div className="w-14 sm:w-16 h-14 sm:h-16">
              <ImageSEO src="/img/bni-payment.jpeg" alt="payment" />
            </div>

            <div className="w-14 sm:w-16 h-14 sm:h-16">
              <ImageSEO src="/img/bni-payment.jpeg" alt="payment" />
            </div>

            <div className="w-14 sm:w-16 h-14 sm:h-16">
              <ImageSEO src="/img/bni-payment.jpeg" alt="payment" />
            </div>
          </div>
        </div>
        {/* --- end contact us --- */}
      </div>

      {/* --- copy right --- */}
      <div className="px-3 sm:px-5">
        <div className="bg-gray-200 text-center py-5 rounded-sm my-4">
          <h6 className="text-sm font-semibold">
            Copyright &copy; 2022{" "}
            <span className="bg-red font-bold rounded-md text-white py-1 px-2">
              jajan
            </span>
            kuy
          </h6>
        </div>
      </div>
      {/* --- end copy right --- */}
    </Suspense>
  );
}
