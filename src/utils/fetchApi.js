"use strict";

import { handleApiError } from "./handleApiError";
import { handleApiResponse } from "./handleApiResponse";
import { httpRequest } from "./httpRequest";
import { addRequestInterceptor } from "./interceptors/request.interceptor";

export const fetchApi = async ({
                                   method,
                                   url,
                                   data,
                                   params,
                                   headers,
                                   withInterceptor = true,
                               }) => {
    const executeRequest = async () => {
        try {
            const requestConfig = {
                method,
                url,
                data,
                params,
                headers,
            };
            const response = await httpRequest(requestConfig);
            console.log("-------------------");
            console.log(response)

            // if (withInterceptor) {
            //     addRequestInterceptor();
            // }

            if (!response) {
                throw new Error("No response received");
            }

            if (!response.status) {
                throw new Error("No status code received");
            }

            // const processedResponse = handleApiResponse(response);
            // console.log('API Response:', processedResponse);

            return response;
        } catch (error) {
            console.error("API Error:", error);
        }
    };

    return executeRequest();
};