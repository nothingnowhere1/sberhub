import React, {memo, ReactElement} from 'react';
import {Control, Controller, FieldPath, FieldValues, Path, PathValue} from 'react-hook-form';
import {FormControl, InputLabel, Select, SelectProps as BaseProps} from '@mui/material';

export type ControlledFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: FieldPath<T>;
    defaultValue?: PathValue<T, (Path<T> & string)> | undefined,
    items: (ReactElement | null)[]
} & Omit<BaseProps, 'defaultValue'>;

export const SelectInput = <T extends FieldValues>({
                                                       control,
                                                       onBlur,
                                                       sx,
                                                       onChange,
                                                       defaultValue,
                                                       items,
                                                       name,
                                                       margin,
                                                       ...props
                                                   }: ControlledFieldProps<T>) => {
    const customSX = {
        '& .MuiPaper-root': {
            maxHeight: '300px'
        },
        ...(sx ? sx : {})
    };

    return (
        <FormControl margin={margin ?? 'normal'} fullWidth>
            <InputLabel>{props.label}</InputLabel>
            <Controller
                defaultValue={defaultValue ?? '' as PathValue<T, (Path<T> & string)>}
                control={control}
                name={name}
                render={({field: {onChange: fieldOnChange, value, onBlur: fieldOnBlur, ...field}}) => (
                    <Select
                        {...field}
                        {...props}
                        value={items.length !== 0 ? value : ''}
                        sx={customSX}
                        onChange={(e, child) => {
                            if (onChange) onChange(e, child);
                            fieldOnChange(e);
                        }} onBlur={(e) => {
                        if (onBlur) onBlur(e);
                        fieldOnBlur();
                    }}
                    >
                        {items.map((el) => el)}
                    </Select>
                )}
            />
        </FormControl>
    );
};

export default memo(SelectInput) as <T extends FieldValues>(props: ControlledFieldProps<T>) => React.JSX.Element;
