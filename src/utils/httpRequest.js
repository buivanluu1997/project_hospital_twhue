"use strict";

import { axiosInstance } from "../lib/axios-instance";

export const httpRequest = async ({ method, url, data, params, headers }) => {
    try {
        const response = await axiosInstance.request({
            method,
            url,
            data,
            params,
            headers,
        });
        return response;
    } catch (error) {
        console.error("API Error:", error);
        return { error: "An error occurred while making the request." };
    }
};