import Image from "next/image";
import authImage from "../../public/auth.svg";

export default function AuthFormWrap({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 flex items-center justify-center ">
        <Image
          src={authImage}
          alt="Shopping Illustration"
          className="object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 max-w-md mx-auto">
        {children}
      </div>
    </div>
  );
}
