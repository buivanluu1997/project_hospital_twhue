"use strict";
import {fetchApi} from "../utils/fetchApi";

export const getNationality = async () => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: "http://localhost:8080/nationality",
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching departments: ", error);
        throw new Error(error.message || "An unknown error occurred");
    }
};

export const findByNationalityCode = async (nationalityCode) => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: `http://localhost:8080/nationality?nationalityCode=${nationalityCode}`,
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching departments: ", error);
        throw new Error(error.message || "An unknown error occurred");
    }
};