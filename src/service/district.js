"use strict";
import {fetchApi} from "../utils/fetchApi";

export const getDistrict = async (provinceCode) => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: `http://localhost:8080/district?provinceCode=${provinceCode}`,
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching departments: ", error);
        throw new Error(error.message || "An unknown error occurred");
    }
};

export const findByDistrictCode = async (districtCode) => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: `http://localhost:8080/district?districtCode=${districtCode}`,
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching departments: ", error);
        throw new Error(error.message || "An unknown error occurred");
    }
};