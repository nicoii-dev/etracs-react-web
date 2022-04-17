import React from 'react';
import { Controller, useFormContext } from "react-hook-form";
import {TextField} from '@mui/material';

const FaasTextInputController = ({
    defaultData,
    label,
    control,
    type = null,
    name,
    rules,
    placeholder,
    errorStatus=false,
    disabled=false,
    inputStyle,
}) => {
    const methods = useFormContext();
    return (
        <>
            <Controller
                defaultValue={defaultData ? defaultData : ""}
                name={name}
                control={control}
                rules={rules}
                render={({field: {onChange, onBlur, value}}) => (
                    <TextField
                        {...methods.register(name)}
                        fullWidth
                        label={label}
                        name={name}
                        type={type}
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        placeholder={placeholder}
                        error={errorStatus}
                        disabled={disabled}
                        inputProps={inputStyle}
                        size='small'
                    />

                )}
            />
        </>
    );
}

export default FaasTextInputController;