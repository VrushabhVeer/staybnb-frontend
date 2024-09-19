import React from "react";
import Image from "../common/Image.jsx";
import { footerData } from "../../utils/data.js";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-black text-white">
      <div className="w-11/12 mx-auto py-10 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10">
          {/* Company Section */}
          <div className="flex flex-col">
            <span className="font-medium">Company</span>
            <div className="text-sm md:text-base mt-3">
              {footerData.company.map((item, index) => (
                <p key={index} className="hover:underline">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Support Section */}
          <div className="flex flex-col">
            <span className="font-medium">Support</span>
            <div className="text-sm md:text-base mt-3">
              {footerData.support.map((item, index) => (
                <p key={index} className="hover:underline">
                  {item}
                </p>
              ))}
            </div>
          </div>

          {/* Address Section */}
          <div className="flex flex-col">
            <span className="font-medium">Address</span>
            <div className="text-sm md:text-base mt-3">
              <p>{footerData.address.line1}</p>
              <p>{footerData.address.phone}</p>
              <p>{footerData.address.email}</p>
            </div>
            <span className="mt-1">Contact Us</span>
            <div className="flex items-center space-x-4 mt-2">
              <Image
                className="w-6 cursor-pointer"
                src={footerData.contactIcons.whatsapp}
                alt="whatsapp"
              />
              <Image
                className="w-6 cursor-pointer"
                src={footerData.contactIcons.telegram}
                alt="telegram"
              />
            </div>
          </div>

          {/* Follow Us Section */}
          <div className="flex flex-col">
            <span>Follow us</span>
            <div className="flex items-center space-x-4 mt-3">
              <Image
                className="w-6 md:w-7 cursor-pointer"
                src={footerData.socialIcons.facebook}
                alt="facebook"
              />
              <Image
                className="w-6 md:w-7 cursor-pointer"
                src={footerData.socialIcons.instagram}
                alt="instagram"
              />
              <Image
                className="w-6 md:w-7 cursor-pointer"
                src={footerData.socialIcons.youtube}
                alt="youtube"
              />
              <Image
                className="w-6 md:w-7 cursor-pointer"
                src={footerData.socialIcons.twitterX}
                alt="twitterX"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-row gap-1 border-t items-center justify-center border-gray-700 text-center">
        <p className="text-sm">© {currentYear}</p>
        <div className="flex gap-1 items-center">
          <Image
            width={50}
            height={50}
            className="w-4"
            src={footerData.logo}
            alt="location logo"
            loading="lazy"
          />
          <p className="text-sm font-medium tracking-wide">staybnb,</p>
        </div>
        <p className="text-sm">
          Made by{" "}
          <a
            className="hover:underline hover:text-blue-500"
            href="https://vrushabhveer.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Vrushabh Veer
          </a>
        </p>
      </div>
    </div>
  );
}
