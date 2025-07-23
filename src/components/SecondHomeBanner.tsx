import Image from "next/image";
import playstation from "../../public/playStation.png";
import hatwoman from "../../public/woman-wearing-hat.png";
import speakers from "../../public/speakers.png";
import perfume from "../../public/perfume.png";

export default function SecondHomeBanner() {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 text-white my-6 lg:my-8">
      {/* Left Section */}
      <div className="flex-1 bg-[#FB2873] pt-8 sm:pt-10 lg:pt-12 relative flex justify-center items-end">
        <Image
          src={playstation}
          alt="play station"
          className="w-2/3 max-w-[180px] sm:max-w-[220px] lg:max-w-none h-auto object-contain"
        />
        <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 flex flex-col gap-1 sm:gap-2">
          <h1 className="font-semibold text-lg sm:text-xl">PlayStation 5</h1>
          <span className="text-sm sm:text-base">
            Black and White version of the PS5 coming out on sale.
          </span>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex flex-col gap-6 lg:gap-8">
        {/* Top Right */}
        <div className="flex-1 bg-[#0f0f0f] relative flex justify-end items-end pr-4 sm:pr-6">
          <Image
            src={hatwoman}
            alt="woman hat"
            className="w-2/3 max-w-[180px] sm:max-w-[220px] lg:max-w-none h-auto object-contain"
          />
          <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 flex flex-col gap-1 sm:gap-2">
            <h1 className="font-semibold text-lg sm:text-xl">
              Women’s Collections
            </h1>
            <span className="text-sm sm:text-base">
              Featured woman collections that give you another vibe.
            </span>
          </div>
        </div>

        {/* Bottom Right */}
        <div className="flex flex-col sm:flex-row flex-1 gap-6 lg:gap-8">
          <div className="flex-1 bg-[#0f0f0f] relative flex justify-center items-end pt-8 sm:pt-10 lg:pt-12">
            <Image
              src={speakers}
              alt="speakers"
              className="w-2/3 max-w-[160px] sm:max-w-[200px] lg:max-w-none h-auto object-contain"
            />
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 flex flex-col gap-1 sm:gap-2">
              <h1 className="font-semibold text-lg sm:text-xl">Speakers</h1>
              <span className="text-sm sm:text-base">
                Amazon wireless speakers
              </span>
            </div>
          </div>
          <div className="flex-1 bg-[#f84584] relative flex justify-center items-end pt-8 sm:pt-10 lg:pt-12">
            <Image
              src={perfume}
              alt="perfume"
              className="w-2/3 max-w-[160px] sm:max-w-[200px] lg:max-w-none h-auto object-contain"
            />
            <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 flex flex-col gap-1 sm:gap-2">
              <h1 className="font-semibold text-lg sm:text-xl">Perfume</h1>
              <span className="text-sm sm:text-base">
                GUCCI INTENSE OUD EDP
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
