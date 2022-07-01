import useSWR from "swr";
import { fetcher } from "../utils";

type HelloAPI = {
  name: string;
};

export const useHello = () => {
  const { data, error } = useSWR<HelloAPI>(`/api/hello`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};
