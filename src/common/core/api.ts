import {useState} from 'react';
import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_URL, HEADERS_KEY} from "../../Env";
import {RoutePool} from "../../Route";
import {sessionSlice} from "../../modules/user/store/slices/session";

const axiosInstance: AxiosInstance = axios.create();

export const fetcher = async (init: AxiosRequestConfig) => {
    try {
        init.url = `${API_URL}${init.url}`;
        init.headers = {
            ...init.headers, projectkey: HEADERS_KEY
        };
        const response = (
            await axiosInstance(init)
        );
        return response.data;
    } catch (error) {

        // if (_.get(error, 'response.status') === 401) {
        // 	return await signOut();
        // }
        //
        // if (_.get(error, 'response.status') === 503) {
        // 	if (await fetch('/api/maintenance-mode/status').then(r => r.json()).then(r => r.status)) {
        // 		return (
        // 			window.location.href = process.env.NEXT_PUBLIC_MAINTENANCE_ROUTE as string
        // 		);
        // 	}
        // }
        return await Promise.reject(error);
    }
};

export const reduxFetcher = () => {
    return fetchBaseQuery({
        baseUrl: API_URL,
        prepareHeaders: (headers) => {
            headers.set('projectkey', `${HEADERS_KEY}`);
            return headers;
        },
    });
}

export const useApi = <Request, Response>(fetcher: (args: Request) => Promise<Response>) => {
    const [isLoading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<Response | null>(null);
    const [error, setError] = useState<any | null>(null);

    const trigger = (args: Request): Promise<Response> => new Promise((resolve, reject) => {
        setLoading(true);
        fetcher(args)
            .then((r) => {
                setData(r);
                setLoading(false);
                resolve(r);
            })
            .catch((err) => {
                setLoading(false);
                setError(err);
                setData(null);
                reject(err);
            });
    });

    return {trigger, data, error, isLoading};
};

export const SignOut = () => {
    localStorage.removeItem('token');
    sessionSlice.actions.signOut();
    window.location.href = RoutePool.MainURL.url;
}
