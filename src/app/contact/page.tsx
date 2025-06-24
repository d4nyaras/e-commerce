import Image from "next/image";
import phoneIcon from "../../../public/icons-phone.svg";
import emailIcon from "../../../public/icons-mail.svg";
export default function Contact() {
  return (
    <div className="flex gap-8">
      <div className="w-[25%] flex flex-col items-center justify-center shadow-md p-4">
        <div className="flex flex-col gap-4 justify-center">
          <div className="flex gap-2 items-center">
            <Image src={phoneIcon} alt="phone icon" className="w-10  h-10" />
            <h2 className="font-semibold text-lg">Call To Us</h2>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>
        <hr className="w-[80%] my-8 text-slate-400  " />
        <div className="flex flex-col gap-4 ">
          <div className="flex gap-2 items-center">
            <Image src={emailIcon} alt="email icon" className="w-10  h-10" />
            <h2 className="font-semibold text-lg">Write To Us</h2>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </div>
      <div className="flex-[75%] shadow-md">right</div>
    </div>
  );
}
