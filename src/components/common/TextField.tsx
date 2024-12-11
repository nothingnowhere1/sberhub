import React, {memo} from 'react';
import {Control, Controller, FieldPath, FieldValues, Path, PathValue} from 'react-hook-form';
import {TextField as Base, TextFieldProps} from '@mui/material';
import {deepmerge} from '@mui/utils';

type Props<T extends FieldValues> = {
    control: Control<T>; name: FieldPath<T>;
} & TextFieldProps;

export const TextFieldForm = <T extends FieldValues>({
                                                         sx,
                                                         name,
                                                         defaultValue,
                                                         control,
                                                         onChange,
                                                         ...props
                                                     }: Props<T>) => {

    const baseSx = {
        '& .MuiOutlinedInput-notchedOutline': {
            borderRadius: '8px', border: '1px solid #D9D9D9', '&:hover': {
                borderColor: '#000'
            }
        }, '& .MuiInputBase-input': {
            paddingY: 1.5, paddingX: 2, borderRadius: '8px'
        }, '& .MuiInputLabel-root': {
            lineHeight: '16px !important', fontSize: '16px !important'
        }
    };

    const combinedSx = deepmerge(baseSx, sx);
    return (
        <Controller control={control} name={name}
                    defaultValue={(defaultValue ?? '') as PathValue<T, (Path<T> & string)>}
                    render={({field: {onChange: fieldOnChange, ...field}, fieldState: {error}}) => (
                        <Base sx={combinedSx} {...props} onChange={(e) => {
                            if (onChange) onChange(e);
                            fieldOnChange(e);
                        }} {...field} error={!!error} helperText={error ? error?.message : undefined}/>
                    )}
        />
    );
};

export default memo(TextFieldForm) as <T extends FieldValues>(props: Props<T>) => React.JSX.Element;