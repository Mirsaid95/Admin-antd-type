import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";


export const useGetSignleData = (id: string | undefined) => {
    return useQuery({
        queryKey: ['singleData', id],
        queryFn: ()=> request.get('/category/${id}/').then((res)=> res.data)
    });
};