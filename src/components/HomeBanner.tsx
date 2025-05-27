import Image from "next/image";
export default function HomeBanner() {
  return (
    <div className="relative mb-8  ">
      <div className="  bg-black mx-auto px-5 py-12 flex flex-col gap-2 md:flex-row items-center justify-evenly w-[85%]">
        <div className="mb-8 md:mb-0 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Summer Sale!
          </h1>
          <p className="text-lg md:text-xl text-white mb-2">
            Enjoy discounts on selected items
          </p>
          <p className="text-2xl md:text-5xl text-yellow-400 font-bold">
            GET 50% OFF
          </p>
        </div>
        <div className="w-1/3 relative aspect-video">
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
