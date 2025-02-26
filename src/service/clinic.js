"use strict";
import {fetchApi} from "../utils/fetchApi";

export const getClinic = async () => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: "http://localhost:8080/clinic",
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching departments: ", error);
        throw new Error(error.message || "An unknown error occurred");
    }
};

export const findByClinicCode = async (clinicCode) => {
    try {
        let response = await fetchApi({
            method: "GET",
            url: `http://localhost:8080/clinic?clinicCode=${clinicCode}`,
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching departments: ", error);
        throw new Error(error.message || "An unknown error occurred");
    }
};