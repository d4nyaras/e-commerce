"use client";
import Image from "next/image";
import phoneIcon from "../../../public/icons-phone.svg";
import emailIcon from "../../../public/icons-mail.svg";
import Input from "@/components/Input";
import Button from "@/components/Button";

export default function Contact() {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   message: "",
  // });

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="flex gap-8 px-[100px]">
      <div className="w-[25%] flex flex-col items-center justify-center shadow-md p-8">
        <div className="flex flex-col gap-4 justify-center w-[100%]">
          <div className="flex gap-2 items-center">
            <Image src={phoneIcon} alt="phone icon" className="w-10  h-10" />
            <h2 className="font-semibold text-lg">Call To Us</h2>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>
        <hr className="w-[100%] my-8 text-slate-400  " />
        <div className="flex flex-col gap-4 justify-center ">
          <div className="flex gap-2 items-center">
            <Image src={emailIcon} alt="email icon" className="w-10  h-10" />
            <h2 className="font-semibold text-lg">Write To Us</h2>
          </div>
          <p>Fill out our form and we will contact you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>
      </div>
      <div className="flex-[75%] shadow-md flex flex-col p-8">
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="flex justify-between gap-4">
            <Input placeholder="Name" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Phone" />
          </div>
          <textarea
            id="message_area"
            name="message"
            rows={15}
            cols={50}
            placeholder="Message"
            className="      
          outline-none
          border
          border-transparent
          bg-gray-100
          text-sm
          text-gray-500
          focus:border-[#FB2873]
          focus:ring-0
          transition
          duration-300
          rounded-sm
          p-2
          pr-10"
          />

          <div className="flex justify-end">
            <Button label="Submit" />
          </div>
        </form>
      </div>
    </div>
  );
}
