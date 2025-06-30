"use client";
import Image from "next/image";
import phoneIcon from "../../../public/icons-phone.svg";
import emailIcon from "../../../public/icons-mail.svg";
import { TextField, Box, Button } from "@mui/material";
import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can send the data to an API here
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
      <div className="flex-[75%] shadow-md p-4 flex flex-col shadow-md p-8">
        <Box
          className="flex flex-col gap-6"
          component="form"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between ">
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
              variant="filled"
            />

            <TextField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
              variant="filled"
            />
            <TextField
              label="Phone"
              name="phone"
              type="phone"
              value={formData.phone}
              onChange={handleChange}
              margin="normal"
              required
              variant="filled"
            />
          </div>
          <TextField
            label="Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={8}
            fullWidth
            variant="filled"
          />
          <div className="flex justify-end">
            <Button variant="contained" className="py-8">
              Send Message
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}
