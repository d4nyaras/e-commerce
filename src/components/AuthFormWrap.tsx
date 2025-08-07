import Image from "next/image";
import authImage from "../../public/auth.svg";

export default function AuthFormWrap({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex flex-col md:flex-row  w-[70%] rounded-2xl shadow-lg bg-white h-[61%]">
      <div className="hidden xl:flex flex-1 rounded-2xl">
        <Image
          src={authImage}
          alt="Shopping Illustration"
          className=" rounded-2xl max-h-full"
        />
      </div>
      <div className="flex-1 flex items-center justify-center py-10">
        {children}
      </div>
    </div>
  );
}
