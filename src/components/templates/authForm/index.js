"use client";

import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import ModalContainer from "@/components/partials/container/ModalContainer";
import { useGetUserData } from "@/core/services/queries";
import { signOut } from "next-auth/react";
import { useEffect } from "react";
import Link from "next/link";

function AuthForm() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data } = useGetUserData();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".menu") && !event.target.closest("a")) {
        setIsMenuOpen(false);
      }
    };
  
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    signOut(); 
  };

  if (data?.data){ return (
  <div className="relative">
    <Link className="text-green-600 flex numbers" href="#" onClick={handleMenu}>
    <img className="ml-2" src="/ico/profile-g.svg" alt="My Icon" width="24" height="24" />
    {data?.data?.mobile}
    <img src="/ico/arrow-down.svg" alt="My Icon" width="24" height="24" />
    </Link>
    {isMenuOpen && data?.data?.id && (
      <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 w-60">
        <div className="flex items-center space-x-2 rtl:space-x-reverse bg-gray-100 rounded h-10">
        <div className="w-7 h-7 bg-gray-300 items-center justify-center flex rounded-full mr-3">
          <img src="/ico/profiletranp.svg" className=""></img>
        </div>
        <p className="numbers flex items-center space-x-2 rtl:space-x-reverse pr-4">{data?.data?.mobile}</p>
        </div>
        <div className="flex items-center space-x-2 rtl:space-x-reverse h-10">
        <Link href="/profile" className="flex items-center space-x-2 rtl:space-x-reverse pr-4">
        <img src="/ico/profilenull.svg" className="ml-2"></img>
        اطلاعات حساب کاربری</Link>
        </div>
        <hr></hr>
        <div className="flex items-center space-x-2 rtl:space-x-reverse h-10">
        <img src="/ico/logout.svg" className="mr-4"></img>
        <button  onClick={handleLogout} className="flex items-center space-x-2 rtl:space-x-reverse text-red-600">
          خروج از حساب کاربری</button>
        </div>
      </div>
    )}
  </div>
  );  }

  return (
    <div>
      <button className="loginbtn" onClick={() => setIsOpen(true)}>ورود|ثبت نام</button>
      {step === 1 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <SendOTPForm
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <CheckOTPForm
            mobile={mobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
          />
        </ModalContainer>
      )}
    </div>
  );
}

export default AuthForm;