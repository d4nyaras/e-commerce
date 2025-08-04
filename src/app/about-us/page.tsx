import Image from "next/image";
import sideImageAboutUs from "../../../public/sideImageAboutUs.png";
import servicesFirst from "../../../public/ServicesFirst.svg";
import servicesSecond from "../../../public/ServicesSecond.svg";
import servicesThird from "../../../public/ServicesThird.svg";
import servicesFourth from "../../../public/ServicesFourth.svg";

const businessData = [
  {
    icon: servicesFirst,
    number: 10.5,
    title: "Sallers active our site",
  },
  {
    icon: servicesSecond,
    number: 33,
    title: "Mopnthly Produduct Sale",
  },
  {
    icon: servicesThird,
    number: 45.5,
    title: "Customer active in our site",
  },
  {
    icon: servicesFourth,
    number: 25,
    title: "Anual gross sale in our site",
  },
];

export const metadata = {
  title: "About Us | Exclusive",
  description:
    "Learn about Exclusive – South Asia’s premier online shopping marketplace with 10,500 sellers and 3 million customers.",
};

export default function AboutUs() {
  return (
    <div className="flex flex-col gap-12 md:gap-16 px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        <div className="flex-1 flex flex-col gap-4 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-semibold text-black mb-4">
            Our Story
          </h1>
          <p className="text-black text-sm sm:text-base">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="text-black text-sm sm:text-base">
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <div className="flex-1">
          <Image
            src={sideImageAboutUs}
            alt="about us"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
        {businessData.map((business, index) => (
          <div
            key={index}
            className={`flex flex-col gap-2 items-center justify-center border p-5 rounded-sm border-slate-200 text-center ${
              business.number === 33 ? "bg-[#DB4444]" : ""
            }`}
          >
            <Image
              src={business.icon}
              alt={business.title}
              className="w-12 sm:w-14 md:w-16 h-auto object-contain"
            />
            <h2
              className={`text-2xl sm:text-3xl font-semibold ${
                business.number === 33 ? "text-white" : "text-black"
              }`}
            >
              {business.number}k
            </h2>
            <span
              className={`text-sm sm:text-base ${
                business.number === 33 ? "text-white" : "text-black"
              }`}
            >
              {business.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
