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

export default function AboutUs() {
  return (
    <div className="flex flex-col gap-16">
      <div className="flex items-center gap-16">
        <div className="flex flex-col gap-4">
          <h1 className="text-7xl font-semibold text-black mb-6">Our Story</h1>
          <p className="text-black">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region.
          </p>
          <p className="text-black">
            {" "}
            Exclusive has more than 1 Million products to offer, growing at a
            very fast. Exclusive offers a diverse assotment in categories
            ranging from consumer.
          </p>
        </div>
        <Image src={sideImageAboutUs} alt="about us" />
      </div>
      <div className="flex items-center justify-center gap-4">
        {businessData.map((business, index) => {
          return (
            <div
              key={index}
              className={`flex w-[20%] flex-col gap-2 items-center justify-center border-1  p-5 rounded-sm border-slate-200 ${
                business.number === 33 && "bg-[#DB4444] "
              }`}
            >
              <Image
                src={business.icon}
                alt={business.title}
                className="w-16 h-16"
              />
              <h2
                className={`text-3xl font-semibold text-black ${
                  business.number === 33 && "text-white"
                }`}
              >
                {business.number}k
              </h2>
              <span
                className={` text-black ${
                  business.number === 33 && "text-white"
                }`}
              >
                {business.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
