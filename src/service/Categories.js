"use strict";

import { fetchApi } from "../utils/fetchApi";

export const getCategories = async () => {

   /* if (!departmentConfig) {
        throw new Error("Department configuration is not defined");
    }

    const departmentUri = departmentConfig.getDepartments;

    if (!departmentUri) {
        throw new Error("DepartmentUri is not defined");
    }

    if (!userName || !authToken) {
        throw new Error("Invalid authentication details");
    }*/

    try {
        const authToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJEVVAwMTciLCJpYXQiOjE3NDAxMDg2NTUsImV4cCI6MTc0MDM2Nzg1NX0.PQwJsEJhnlyN6T9TIvJw-VlAPf9b42qSiFWMhmsvAi4'
        let response = await fetchApi({
            method: "GET",
            url: `http://192.168.1.31:8080/api/dept/DUP017`,
            headers: {
                accept: "application/json",
                "content-type": "application/json",
                "Authorization": `Bearer ${authToken}`,
            },
        });

        // console.log(response);

        // if (!response) {
        //     throw new Error("Failed to fetch departments");
        // }

        return response;
    } catch (error) {
        console.error("Error fetching departments: ", error);
        throw new Error(error.message || "An unknown error occurred");
    }
};