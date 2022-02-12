import React from 'react';
import { Controller } from "react-hook-form";
import {TextField} from '@mui/material';

const TextInputController = ({
    label,
    control,
    type = null,
    name,
    rules,
    placeholder,
}) => {

    return (
        <Controller
            name={name}
            control={control}
            rules={rules}
            defaultValue=""
            render={({field: {onChange, onBlur, value}}) => (
                <TextField
                    fullWidth
                    label={label}
                    name={name}
                    type={type}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                    placeholder={placeholder}
                />
            )}
        />
    );
}

export default TextInputController;