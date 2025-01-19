import React from 'react';
import {Control, Controller, FieldPath, FieldValues, Path, PathValue} from 'react-hook-form';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DatePicker as BaseDatePicker, DatePickerProps} from '@mui/x-date-pickers/DatePicker';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, {Dayjs} from 'dayjs';
import 'dayjs/locale/ru';

type ControlledFieldProps<T extends FieldValues, C extends Dayjs> = {
    control: Control<T>; name: FieldPath<T>; defaultValue?: PathValue<T, (Path<T> & string)> | undefined,
} & Omit<DatePickerProps<C>, 'defaultValue'>;


export const DatePicker = <T extends FieldValues, C extends Dayjs>({
                                                                       control, name, defaultValue, onChange, ...props
                                                                   }: ControlledFieldProps<T, C>) => {

    return (
        <LocalizationProvider adapterLocale={'ru'} dateAdapter={AdapterDayjs}>
            <Controller
                name={name}
                defaultValue={(
                    defaultValue ? dayjs(defaultValue) : dayjs(new Date())
                ) as PathValue<T, (Path<T> & string)>}
                control={control}
                render={({field: {onChange: fieldOnChange, value, ...field}}) => (
                    <BaseDatePicker
                        slotProps={{
                            textField: {
                                margin: 'normal',
                            }
                        }}
                        {...field}
                        {...props}
                        value={value ? dayjs(value) as C : null}
                        onChange={(value, context) => {
                            fieldOnChange(value);
                            if (onChange) onChange(value, context);
                        }}
                    />
                )}
            />
        </LocalizationProvider>
    );
};
