import React, { memo } from 'react';
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form';
import { TextField as Base, TextFieldProps } from '@mui/material';

type Props<T extends FieldValues> = {
	control: Control<T>; name: FieldPath<T>;
} & TextFieldProps;

export const TextFieldForm = <T extends FieldValues>({sx, name, control, onChange, ...props}: Props<T>) => {
	return (
		<Controller control={control} name={name}
					render={({field: {onChange: fieldOnChange, ...field}, fieldState: {error, ...fieldState}}) => (
						<Base sx={{
							'& .MuiOutlinedInput-notchedOutline': {
								borderRadius: '8px', border: '1px solid #D9D9D9', '&:hover': {
									borderColor: '#000'
								}
							}, '& .MuiInputBase-input': {
								paddingY: 1.5, paddingX: 2
							}, '& .MuiInputLabel-root': {
								lineHeight: '16px !important', fontSize: '16px !important'
							}, ...sx
						}} {...props} onChange={(e) => {
							onChange(e);
							fieldOnChange(e);
						}} {...field} error={!!error}
							  helperText={error && error?.message}/>
					)}/>
	);
};

export default memo(TextFieldForm) as <T extends FieldValues>(props: Props<T>) => React.JSX.Element;