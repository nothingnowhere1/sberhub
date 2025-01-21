import React, {ChangeEvent, useEffect, useRef} from "react"
import {Stack, TextField} from "@mui/material";
import {useSearchParams} from "react-router-dom";

export const SearchHead = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const ref = useRef<NodeJS.Timeout | null>(null);
    const inputRef = useRef<HTMLInputElement | null>(null);

    const currentSearch = searchParams.get('search') || '';

    useEffect(() => {
        const search = searchParams.get('search');
        if (search && inputRef.current && search !== inputRef.current.value) {
            inputRef.current.value = search;
        }
    }, [searchParams.get('search')]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (ref.current) {
            clearTimeout(ref.current);
        }

        ref.current = setTimeout(() => {
            setSearchParams(prev => {
                if (!event.target.value) {
                    prev.delete('search');
                    return prev;
                }
                prev.set('search', event.target.value);
                return prev;
            });
        }, 500);
    }

    return (
        <Stack>
            <TextField inputRef={inputRef} fullWidth defaultValue={currentSearch} onChange={handleChange}
                       label={'Поиск'}/>
        </Stack>
    )
}