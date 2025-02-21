import { handleApiError } from "../handleApiError";
import { handleApiResponse } from "../handleApiResponse";
import { axiosInstance } from "../../lib/axios-instance";

export const addResponseInterceptor = () => {
    axiosInstance.interceptors.response.use(
        (response) => handleApiResponse(response),
        (error) => Promise.reject(handleApiError(error))
    );
};