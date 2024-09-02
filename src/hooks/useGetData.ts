import { fetchApi } from "@/lib/fetchApi";
import { useQuery } from "@tanstack/react-query";

const useGetData = (
  url: string,
  key: string,
  staleTime: number = 60 * 1000,
  enabled: boolean = true
) => {
  return useQuery({
    queryKey: [key],
    queryFn: () => fetchApi(url),
    staleTime,
    enabled,
  });
};

export default useGetData;
