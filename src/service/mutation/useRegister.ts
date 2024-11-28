import { request } from "../../config/request";
import { useMutation } from "@tanstack/react-query";
import { regsiterType } from "../regsiterType";


export const useRegister = () => {
    useMutation({
        mutationFn: (data) => request.post("/register",data).then((res)=> res.data),
        onSuccess: (data) => {
            request.post<regsiterType>("api/admin/login",data).then((res)=> res.data)
        }
    })
}