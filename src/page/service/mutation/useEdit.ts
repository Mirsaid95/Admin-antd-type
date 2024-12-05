import { useMutation } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useEditData = () => {
    return useMutation({
        mutationFn: ({id, data}: any) => request.put(`/category/${id}/`, data).then((res) => res.data)
    })
}