"use strict";
import {fetchApi} from "../utils/fetchApi";

export const getWard = async (districtCode) => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: `http://localhost:8080/ward?districtCode=${districtCode}`,
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching departments: ", error);
        throw new Error(error.message || "An unknown error occurred");
    }
};

export const findByWardCode = async (wardCode) => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: `http://localhost:8080/ward?wardCode=${wardCode}`,
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching departments: ", error);
        throw new Error(error.message || "An unknown error occurred");
    }
};