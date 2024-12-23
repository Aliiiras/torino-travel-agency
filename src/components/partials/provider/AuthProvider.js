"use client";

import { useGetUserData } from "@/core/services/userQueries";
import { useRouter } from "next/navigation";
import { useEffect,useState } from "react";
import ModalContainer from "../container/ModalContainer";

function AuthProvider({ children }) {
  const router = useRouter();
  const { isPending, data } = useGetUserData();

  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleButton = () => {
    if (!data?.data?.name) {
      setIsModalOpen(true); // مودال رو باز کن
    }
  };

  useEffect(() => {
    if (!isPending && !data?.data) router.push("/");
  }, [isPending]);

  if (isPending)
    return (
  <>
      <button onClick={handleButton} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
      {isPending ? (
        "در حال بارگذاری..."
      ) : data?.data?.name ? (
        ` ${data.data.name}`
      ) : (
        "ورود"
      )}
    </button>
      <ModalContainer
    isOpen={isModalOpen}
    onClose={() => setIsModalOpen(false)} />
    </>
    );

  return children;
}

export default AuthProvider;