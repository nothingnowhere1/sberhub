import {useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";

export interface AllParams {
    page: number,
    age: number[],
    gender: string | null,
    city: string | null,
    searchType: string | null,
    avatar: boolean,
    search: string | null,
}

const AllParamsDefaultValues: AllParams = {
    page: 1,
    age: [18, 37],
    gender: null,
    city: null,
    searchType: null,
    avatar: false,
    search: null,
}

export const useSearchCards = () => {
    const [searchParams] = useSearchParams();
    const [serializedParams, setSerializedParams] = useState<AllParams>(AllParamsDefaultValues)

    useEffect(() => {
        const objectSearchParams = Object.fromEntries(searchParams);
        setSerializedParams({
            ...AllParamsDefaultValues,
            ...objectSearchParams,
            age: objectSearchParams.age?.split('-').map((el) => +(el)) ?? [18, 37],
        });
    }, [searchParams]);

    return {serializedParams}
}