"use strict";
import {fetchApi} from "../utils/fetchApi";

export const getProvince = async () => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: "http://localhost:8080/province",
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching departments: ", error);
        throw new Error(error.message || "An unknown error occurred");
    }
};

export const findByProvinceCode = async (provinceCode) => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: `http://localhost:8080/province?provinceCode=${provinceCode}`,
        });

        return response.data?.length > 0 ? response.data[0] : {};
    } catch (error) {
        console.error("Error fetching departments: ", error);
        throw new Error(error.message || "An unknown error occurred");
    }
};