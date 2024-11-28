import { loginType } from './../loginType';
import { useMutation } from "@tanstack/react-query";
import { request, saveToken } from "../../config/request";
import Cookies from "js-cookie";

interface loginResponse {
    token: string
}
export const useLogin = () => {
    return useMutation({
        mutationFn: (data:loginType) => request.post<loginResponse>("/api/admin-login/",data).then((res) => {
            saveToken(res.data.token)
            return res.data 
        }),
        onSuccess: (res) => {
            Cookies.set("accessToken", res.token)
        }
    })
}