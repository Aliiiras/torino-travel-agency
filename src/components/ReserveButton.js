"use client";

import { useAddToBasket } from "@/core/services/mutations";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

function ReserveButton({ id }) {
  const { mutate, isPending } = useAddToBasket();
  const router = useRouter();

  const cartHandler = () => {
    if (isPending) return;

    mutate(id, {
      onSuccess: (data) => {
        toast.success(data.data.message);
        router.push("/checkout");
      },
      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <div>
      <button
        onClick={cartHandler}
        className="bg-green-500 w-32 rounded-lg text-white m-10 p-2 font-semibold"
      >
        رزرو و خرید
      </button>
    </div>
  );
}

export default ReserveButton;
