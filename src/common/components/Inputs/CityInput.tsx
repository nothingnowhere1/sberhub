import React, {useEffect, useState} from 'react';
import {Control, FieldPath, FieldValues, Path, PathValue} from 'react-hook-form';
import {MenuItem} from '@mui/material';
import {SelectProps as BaseProps} from '@mui/material/Select/Select';
import {SelectInput} from "./SelectInput";
import {cities} from "../../../MockData";

export type ControlledFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: FieldPath<T>;
    defaultValue?: PathValue<T, (Path<T> & string)> | undefined,
} & Omit<BaseProps, 'defaultValue'>;

export const CityInput = <T extends FieldValues>(props: ControlledFieldProps<T>) => {
    const [dataCities, setDataCities] = useState<{ id: number; title: string }[] | null>(null);

    useEffect(() => {
        if (window.location.href.includes('localhost')) {
            setDataCities(cities)
        }
    }, []);

    return (
        <SelectInput {...props}
                     items={dataCities?.map((el) => <MenuItem key={el.id}
                                                              value={el.id}>{el.title}</MenuItem>) ?? []}/>
    );
};