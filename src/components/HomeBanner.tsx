import Image from "next/image";

export default function HomeBanner() {
  return (
    <div className="relative mb-8">
      <div className="bg-black mx-auto px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 flex flex-col md:flex-row items-center justify-between w-full max-w-[1200px] gap-8">
        <div className="text-center md:text-left flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Summer Sale!
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-white mb-2">
            Enjoy discounts on selected items
          </p>
          <p className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-yellow-400 font-bold">
            GET 50% OFF
          </p>
        </div>
        <div className="flex-1 max-w-md w-full relative aspect-video">
          <Image
            height={400}
            width={400}
            src="/bannerImage.png"
            alt="Banner Image"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
