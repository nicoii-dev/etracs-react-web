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
    disabled=false
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
                        value={defaultData ? defaultData : value}
                        placeholder={placeholder}
                        error={errorStatus}
                        disabled={disabled}
                        size='small'
                    />

                )}
            />
        </>
    );
}

export default FaasTextInputController;