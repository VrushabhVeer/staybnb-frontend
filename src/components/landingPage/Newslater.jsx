import React, { useState } from "react";
import plane from "../../assets/icons/paper-plane.png";
import Image from "../common/Image";
import toast, { Toaster } from "react-hot-toast";

const Newslater = () => {
  const [email, setEmail] = useState("");

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const notify = () => {
    if (email.trim() === "") {
      toast.error("Please enter your email.", {
        position: "bottom-right",
      });
    } else if (!isValidEmail(email)) {
      toast.error("Please enter a valid email.", {
        position: "bottom-right",
      });
    } else {
      toast.success(
        `Thanks for signing up!
         Stay tuned for updates.`,
        {
          position: "bottom-right",
        }
      );
    }
    setEmail("");
  };

  return (
    <div className="gradient w-full py-20">
      <div className="text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-1">Newslater</h1>
        <p>Subscribe to our newslater for Offers & updates</p>
      </div>
      <div className="flex items-center justify-center w-11/12 md:w-8/12 lg:w-4/12 mx-auto mt-8">
        <input
          className="w-8/12 bg-white px-6 py-3 md:py-4 outline-none rounded-l-full"
          type="text"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={notify}
          className="w-4/12 bg-gray-800 hover:bg-black rounded-e-full text-white py-3 md:py-4 flex items-center justify-center gap-1"
        >
          Send <Image className="w-4 mt-1" src={plane} alt="plane" />
        </button>
      </div>

      <Toaster />
    </div>
  );
};

export default Newslater;
