import { fetchApi } from "@/lib/fetchApi";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useDeleteData = (url: string, invalidateKey?: string) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => fetchApi(`${url}/${id}`, "DELETE"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [invalidateKey] });
    },
  });
};

export default useDeleteData;
