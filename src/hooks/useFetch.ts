import { useState } from "react";

type returnUseFetch = [() => void, boolean, string]

export const useFetch = (callBack: () => void): returnUseFetch => {
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const fething = async () => {
        try {
            setLoading(true);
            await callBack();
        } catch (error: any) {
            setErrorMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    return [fething, loading, errorMessage];
};
