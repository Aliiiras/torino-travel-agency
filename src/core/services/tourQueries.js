import { useQuery } from "@tanstack/react-query";

import api from "../config/api";

const useGetTourData = () => {
  const queryFn = () => api.get("tour");
  console.log(queryFn);
  const queryKey = ["tour-data"];

  return useQuery({ queryFn, queryKey });
};

export { useGetTourData };
