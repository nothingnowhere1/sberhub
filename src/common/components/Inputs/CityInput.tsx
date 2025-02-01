import React, {useEffect, useState} from 'react';
import {Control, FieldPath, FieldValues, Path, PathValue} from 'react-hook-form';
import {MenuItem} from '@mui/material';
import {SelectProps as BaseProps} from '@mui/material/Select/Select';
import {SelectInput} from "./SelectInput";
import axios from "axios";

export type ControlledFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: FieldPath<T>;
    defaultValue?: PathValue<T, (Path<T> & string)> | undefined,
} & Omit<BaseProps, 'defaultValue'>;

export const CityInput = <T extends FieldValues>(props: ControlledFieldProps<T>) => {
    const [dataCities, setDataCities] = useState<{ id: number; title: string }[] | null>(null);

    useEffect(() => {
        axios.get(`https://dev.bro-js.ru/connectme/api/cities`)
            .then(r => r.data)
            .then(r => setDataCities(r));
    }, []);

    return (
        <SelectInput {...props}
                     items={dataCities?.map((el) => <MenuItem key={el.id}
                                                              value={el.id}>{el.title}</MenuItem>) ?? []}/>
    );
};