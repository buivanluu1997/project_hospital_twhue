"use strict";
import {fetchApi} from "../utils/fetchApi";

export const addRegisterMedical = async (registerMedical) => {
    try {
        let response = await fetchApi({
            method: "POST",
            url: "http://localhost:8080/registerMedical",
            body: registerMedical
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching departments: ", error);
        throw new Error(error.message || "An unknown error occurred");
    }
};