import Image from "next/image";
import playstation from "../../public/playStation.png";
import hatwoman from "../../public/woman-wearing-hat.png";
import speakers from "../../public/speakers.png";
import perfume from "../../public/perfume.png";

export default function SecondHomeBanner() {
  return (
    <div className="flex gap-8 text-white my-8">
      <div className="flex-1 bg-[#FB2873] pt-12 relative">
        <Image src={playstation} alt="play station" />
        <div className="absolute bottom-8 left-8 flex flex-col gap-2">
          <h1 className="font-semibold text-xl">PlayStation 5</h1>
          <span>Black and White version of the PS5 coming out on sale.</span>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-8">
        <div className="flex-1 bg-[#0f0f0f] relative flex">
          <Image src={hatwoman} alt="woman hat" className="ml-auto" />
          <div className="absolute bottom-8 left-8 flex flex-col gap-2">
            <h1 className="font-semibold text-xl">Women’s Collections</h1>
            <span>Featured woman collections that give you another vibe.</span>
          </div>
        </div>
        <div className="flex-1 flex gap-8 ">
          <div className="flex-1 bg-[#0f0f0f] relative flex items-center justify-center pt-12 ">
            <Image src={speakers} alt="speakers" className="" />
            <div className="absolute bottom-8 left-8 flex flex-col gap-2">
              <h1 className="font-semibold text-xl">Speakers</h1>
              <span>Amazon wireless speakers </span>
            </div>
          </div>
          <div className="flex-1 bg-[#f84584] relative flex items-center justify-center pt-12 ">
            <Image src={perfume} alt="perfume" />
            <div className="absolute bottom-8 left-8 flex flex-col gap-2">
              <h1 className="font-semibold text-xl">Perfume</h1>
              <span>GUCCI INTENSE OUD EDP</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
