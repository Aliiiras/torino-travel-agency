"use client";

import { useState } from "react";
import SendOTPForm from "./SendOTPForm";
import CheckOTPForm from "./CheckOTPForm";
import ModalContainer from "@/components/partials/container/ModalContainer";
import { useGetUserData } from "@/core/services/userQueries";
import Link from "next/link";

function AuthForm() {
  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  // const [isMainModalOpen, setIsMainModalOpen] = useState(true);
  const [isCheckOTP, setIsCheckOTP] = useState(false);

  const { data } = useGetUserData();

  const onClose = () => {
    setIsOpen(false);
  };

  const backToSendOTP = () => {
    setIsCheckOTP(false);
    setStep(1);
  };
  const openCheckOTP = () => {
    setIsCheckOTP(true);
    setStep(2);
  };

  if (data?.data) return <Link href="/profile">ورود به حساب کاربری</Link>;

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>ورود|ثبت نام</button>
      {step === 1 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen} onClose={onClose}>
          <SendOTPForm
            mobile={mobile}
            setMobile={setMobile}
            setStep={setStep}
            onClose={onClose}
          />
        </ModalContainer>
      )}
      {step === 2 && (
        <ModalContainer setIsOpen={setIsOpen} isOpen={isOpen}>
          <button onClick={backToSendOTP}>Back</button>
          <CheckOTPForm
            mobile={mobile}
            setStep={setStep}
            setIsOpen={setIsOpen}
            backToSendOTP={backToSendOTP}
          />
        </ModalContainer>
      )}
    </div>
  );
}

export default AuthForm;


// onClose={() => setIsOpen(false)}