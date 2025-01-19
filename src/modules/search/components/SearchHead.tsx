import React, {ChangeEvent, useRef} from "react"
import {Stack, TextField} from "@mui/material";
import {useSearchParams} from "react-router-dom";

export const SearchHead = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const ref = useRef<NodeJS.Timeout | null>(null);

    const currentSearch = searchParams.get('search') || '';

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
            <TextField fullWidth defaultValue={currentSearch} onChange={handleChange} label={'Поиск'}/>
        </Stack>
    )
}