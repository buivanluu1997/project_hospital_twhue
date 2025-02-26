"use strict";
import {fetchApi} from "../utils/fetchApi";

export const getEthnic = async () => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: "http://localhost:8080/ethnic",
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching departments: ", error);
        throw new Error(error.message || "An unknown error occurred");
    }
};


export const findByEthnicCode = async (ethnicCode) => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: `http://localhost:8080/ethnic?ethnicCode=${ethnicCode}`,
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching departments: ", error);
        throw new Error(error.message || "An unknown error occurred");
    }
};