import React from 'react';
import { Controller } from "react-hook-form";
import {TextField} from '@mui/material';

const TextInputController = ({
    defaultData,
    label,
    control,
    type = null,
    name,
    rules,
    placeholder,
    errorStatus=false,
    inputStyle,
    disabled=false,
}) => {

    return (
        <Controller
            defaultValue={defaultData ? defaultData : ""}
            name={name}
            control={control}
            rules={rules}
            render={({field: {onChange, onBlur, value}}) => (
                <TextField
                    disabled={disabled}
                    fullWidth
                    label={label}
                    name={name}
                    type={type}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                    error={errorStatus}
                    inputProps={inputStyle}
                    size='small'
                />
            )}
        />
    );
}

export default TextInputController;