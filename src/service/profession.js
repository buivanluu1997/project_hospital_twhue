"use strict";
import {fetchApi} from "../utils/fetchApi";

export const getProfession = async () => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: "http://localhost:8080/profession",
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching departments: ", error);
        throw new Error(error.message || "An unknown error occurred");
    }
};

export const findByProfessionCode = async (professionCode) => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: `http://localhost:8080/profession?professionCode=${professionCode}`,
        });

        return response.data?.length > 0 ? response.data[0] : {};
    } catch (error) {
        console.error("Error fetching departments: ", error);
        throw new Error(error.message || "An unknown error occurred");
    }
};