import React, { useState } from 'react';
import {
    CardContent,
    Divider,
    Grid,
    TextField,
} from '@mui/material';
import { useSelector } from 'react-redux';
import Select from 'react-select'
import { Controller } from "react-hook-form";
import FaasTextInputController from '../../input/faas-input';
import Quarter from '../../../library/constants/quarter'

import InputErrorStyles from '../../../styles/error-text/InputErrorStyles.module.css';
// styles for react select
const selectStyles = {
    control: provided => ({ ...provided, minWidth: 240, }),
    menu: () => ({ boxShadow: 'inset 0 1px 0 rgba(0, 0, 0, 0.1)', opacity: 1, }),
    menu: base => ({
        ...base,
        zIndex: 100
    })
};

const GeneralInformation = ({
    errors,
    control,
    data,
    personnel,
    newPersonnelList,
    status
}) => {
    const transaction = useSelector(state => state.transactionData.transaction)
    const userData = JSON.parse(localStorage?.getItem("user"));
    const faasList = useSelector((state) => state.faasData.faas);
    const [tdInUsed, setTdInUsed] = useState(false);
    console.log(faasList)

    // const [selectedAppraiser, setSelectedAppraiser] = useState(data?.appraised_by ? data?.appraised_by : "");
    // const [selectedRecommended, setSelectedRecommended] = useState(data?.recommended_by ? data?.recommended_by : "");
    // const [selectedApprove, setSelectedApprove] = useState(data?.approve_by ? data?.approve_by : "");

    const onTdChange = (e) => {
        let a = []
        a = faasList;
        console.log(a)
        faasList.map(faas => faas.td_number == e ? 
            setTdInUsed(true)
     : setTdInUsed(false)) 
    }
    console.log(tdInUsed)
    return (
        <>
            <Grid container spacing={3}
                style={{
                    marginTop: -50,
                    pointerEvents: (userData.user.role === "ASSESSOR" && status === "FOR APPROVAL")
                        || (userData.user.role === "ADMIN" && status === "FOR APPROVAL")
                        || (transaction === "Data Capture" && status === "CURRENT") ? 'none' : 'auto'
                }}>
                <Grid item md={12} xs={12}>
                    <Divider textAlign="left">
                        <p style={{ fontSize: 20 }}>
                            General Information
                        </p>
                    </Divider>
                </Grid>
                <Grid item md={6} xs={12} style={{ marginTop: -50 }}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12}>
                                <FaasTextInputController
                                    defaultData={transaction === "Data Capture" || transaction.includes("Change") ? data?.td_number : ""}
                                    label="TD number* "
                                    name="tdNumber"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.tdNumber ? true : false}
                                    disabled={transaction === "Change Classification" || transaction === "Change Taxability" ? true : false}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'TD Number is required',
                                        },
                                    }}
                                />
                                <Controller
                                    defaultData={transaction === "Data Capture" || transaction.includes("Change") ? data?.td_number : ""}
                                    name='tdNumber'
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Date is required',
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            name="tdNumber"
                                            label="td"
                                            size='small'
                                            error={errors?.tdNumber ? true : false}
                                            fullWidth
                                            onBlur={onBlur}
                                            onChange={(e) => {
                                                onChange(e.target.value)
                                                onTdChange(e.target.value)
                                            }}

                                            disabled={transaction === "Change Classification" || transaction === "Change Taxability" ? true : false}
                                            value={value}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                                {/* <FaasTextInputController
                                    defaultData={data?.titleType}
                                    label="Title type*"
                                    name="titleType"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.titleType ? true:false}
                                    rules={{
                                        required: {
                                        value: true,
                                        message: 'Title Type is required',
                                        },
                                    }}
                                /> */}
                                <Controller
                                    defaultValue={data?.title_type}
                                    name={'titleType'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Appraised date is required',
                                        },
                                        pattern: {
                                            value: /^[^-]+(?!.*--)/, // regex for not allowing (-)
                                            message: 'Civil status is required',
                                        }
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            fullWidth
                                            label="Title type*"
                                            name="titleType"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            size='small'
                                            error={errors.titleType ? true : false}
                                            disabled={transaction === "Change Classification" || transaction === "Change Taxability" ? true : false}
                                            value={value}
                                        >
                                            <option key={'-Select-'} value={'-Select-'}>
                                                -Select-
                                            </option>
                                            <option key={"OCT"} value={"OCT"}>
                                                OCT
                                            </option>
                                            <option key={"TCT"} value={"TCT"}>
                                                TCT
                                            </option>
                                            <option key={"CLOA"} value={"CLOA"}>
                                                CLOA
                                            </option>
                                        </TextField>
                                    )}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} style={{ marginTop: -15 }}>
                                <FaasTextInputController
                                    defaultData={data?.title_number}
                                    label="Title number*"
                                    name="titleNumber"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.titleNumber ? true : false}
                                    disabled={transaction === "Change Classification" || transaction === "Change Taxability" ? true : false}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Middle name is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} style={{ marginTop: -15 }}>
                                <Controller
                                    defaultValue={data?.title_date}
                                    name='titleDate'
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Date is required',
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            name="titleDate"
                                            label="Date"
                                            type="date"
                                            size='small'
                                            error={errors?.titleDate ? true : false}
                                            fullWidth
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            disabled={transaction === "Change Classification" || transaction === "Change Taxability" ? true : false}
                                            value={value}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                                <Controller
                                    defaultValue={data?.issue_date}
                                    name={'issueDate'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Issue Date is required',
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            name="issueDate"
                                            label="Issue Date*"
                                            type="date"
                                            size='small'
                                            error={errors?.issueDate ? true : false}
                                            fullWidth
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            disabled={transaction === "Change Classification" || transaction === "Change Taxability" ? true : false}
                                            value={value}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} style={{ marginTop: -15 }}>
                                <FaasTextInputController
                                    defaultData={data?.effectivity}
                                    label="Effectivity*"
                                    name="effectivity"
                                    variant="outlined"
                                    control={control}
                                    errorStatus={errors.effectivity ? true : false}
                                    disabled={transaction === "Change Classification" || transaction === "Change Taxability" ? true : false}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Effectivity is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} style={{ marginTop: -15 }}>
                                <Controller
                                    defaultValue={data?.quarter}
                                    name={'quarter'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Citizenship is required',
                                        },
                                        pattern: {
                                            value: /^[^-]+(?!.*--)/, // regex for not allowing (-)
                                            message: 'Civil status is required',
                                        }
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            fullWidth
                                            label="Quarter*"
                                            name="quarter"
                                            select
                                            SelectProps={{ native: true }}
                                            variant="outlined"
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            size='small'
                                            error={errors.quarter ? true : false}
                                            disabled={transaction === "Change Classification" || transaction === "Change Taxability" ? true : false}
                                            value={value}
                                        >
                                            {Quarter.map((option) => (
                                                <option
                                                    key={option.quarter}
                                                    value={option.quarter}
                                                >
                                                    {option.quarter}
                                                </option>
                                            ))}
                                        </TextField>
                                    )}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                                <FaasTextInputController
                                    defaultData={data?.restriction}
                                    label="Restriction"
                                    name="restriction"
                                    variant="outlined"
                                    control={control}
                                    disabled={transaction === "Change Classification" || transaction === "Change Taxability" ? true : false}
                                    errorStatus={errors.restriction ? true : false}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Quarter is required',
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>
                <Grid item md={6} xs={12} style={{ marginTop: -50 }}>
                    <CardContent>
                        <Grid container spacing={3}>
                            <Grid item md={12} xs={12}>
                                <FaasTextInputController
                                    defaultData={data?.previous_td_number && transaction.includes("Transfer") ? data?.td_number :
                                        (transaction === "Change Classification" && data?.previous_td_number) || (transaction === "Change Taxability" && data?.previous_td_number) ||
                                            (transaction === "Data Capture" && data?.previous_td_number) ?
                                            data?.previous_td_number : ""}
                                    label="Previous TD number"
                                    name="previousTdNumber"
                                    variant="outlined"
                                    control={control}
                                    disabled={true}
                                    errorStatus={errors.previousTdNumber ? true : false}
                                    rules={{
                                        required: {
                                            value: false,
                                            message: 'Previous TD Number is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={12} xs={12} style={{ marginTop: -15 }}>
                                <FaasTextInputController
                                    // defaultData={transaction === "Change Classification" || transaction === "Change Taxability"
                                    //     || transaction === "Data Capture" ? "" : data.pin}
                                    defaultData={data?.pin && transaction.includes("Transfer") ? data?.pin :
                                        (transaction === "Change Classification" && data?.previous_td_number) || (transaction === "Change Taxability" && data?.previous_td_number) ||
                                            (transaction === "Data Capture" && data?.previous_td_number) ?
                                            data?.previous_td_number : ""}

                                    label="Previous PIN"
                                    name="previousPin"
                                    variant="outlined"
                                    control={control}
                                    disabled={true}
                                    errorStatus={errors.previousPin ? true : false}
                                    rules={{
                                        required: {
                                            value: false,
                                            message: 'Previous PIN is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} style={{ marginTop: -15 }}>
                                <FaasTextInputController
                                    // defaultData={transaction === "Change Classification" || transaction === "Change Taxability"
                                    //     || transaction === "Data Capture" ? "" : data.market_value}
                                    defaultData={data?.previous_mv && transaction.includes("Transfer") ? data?.market_value :
                                        (transaction === "Change Classification" && data?.previous_mv) || (transaction === "Change Taxability" && data?.previous_mv) ||
                                            (transaction === "Data Capture" && data?.previous_mv) ?
                                            data?.previous_mv : ""}

                                    label="Previous MV*"
                                    name="previousMv"
                                    variant="outlined"
                                    control={control}
                                    disabled={true}
                                    errorStatus={errors.previousMv ? true : false}
                                    rules={{
                                        required: {
                                            value: transaction === "Change Classification" || transaction === "Change Taxability" || transaction === "Data Capture" ? false : true,
                                            message: 'Previous MV is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={6} xs={12} style={{ marginTop: -15 }}>
                                <FaasTextInputController
                                    // defaultData={transaction === "Change Classification" || transaction === "Change Taxability"
                                    //     || transaction === "Data Capture" ? "" : data.assessed_value}
                                    defaultData={data?.previous_av && transaction.includes("Transfer") ? data?.assessed_value :
                                        (transaction === "Change Classification" && data?.previous_av) || (transaction === "Change Taxability" && data?.previous_av) ||
                                            (transaction === "Data Capture" && data?.previous_av) ?
                                            data?.previous_av : ""}

                                    label="Previous AV*"
                                    name="previousAv"
                                    variant="outlined"
                                    control={control}
                                    disabled={true}
                                    errorStatus={errors.previousAv ? true : false}
                                    rules={{
                                        required: {
                                            value: transaction === "Change Classification" || transaction === "Change Taxability" || transaction === "Data Capture" ? false : true,
                                            message: 'Previous AV is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={7} xs={12} style={{ marginTop: -15 }}>
                                <FaasTextInputController
                                    defaultData={data?.appraised_by ? data?.appraised_by :
                                        userData?.personnel[0]?.firstname + " " + userData?.personnel[0]?.middlename.charAt(0) + ". " + userData?.personnel[0]?.lastname}
                                    label="Appraised By*"
                                    name="appraisedBy"
                                    variant="outlined"
                                    control={control}
                                    disabled={true}
                                    errorStatus={errors.appraisedBy ? true : false}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Appraised by is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={7} xs={12} style={{ marginTop: -15 }} display={{ md: "none" }}>
                                <FaasTextInputController
                                    defaultData={data?.appraised_position ? data?.appraised_position : userData?.job[0]?.code}
                                    label="Appraised Position*"
                                    name="appraisedPosition"
                                    variant="outlined"
                                    control={control}
                                    disabled={true}
                                    errorStatus={errors.appraisedPosition ? true : false}
                                    rules={{
                                        required: {
                                            value: false,
                                            message: 'appraisedPosition is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={5} xs={12} style={{ marginTop: -15 }}>
                                <Controller
                                    defaultValue={data?.appraised_date ? data?.appraised_date : ""}
                                    name={'appraisedDate'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: true,
                                            message: 'Appraised date is required',
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            name="appraisedDate"
                                            label="Appraised Date*"
                                            type="date"
                                            size='small'
                                            error={errors?.appraisedDate ? true : false}
                                            fullWidth
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            disabled={status === "CURRENT" || status === "FOR APPROVAL" || status === "APPROVED" || status === "CANCELLED" ? true : false}
                                            value={value}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item md={7} xs={12} style={{ marginTop: -15 }}>
                                <FaasTextInputController
                                    defaultData={data?.recommended_by ? data?.recommended_by : (userData.user.role === "APPROVER" && status === "CURRENT")
                                        || (userData.user.role === "ADMIN" && status === "CURRENT") ?
                                        userData?.personnel[0]?.firstname + " " + userData?.personnel[0]?.middlename.charAt(0) + ". " + userData?.personnel[0]?.lastname : ""}
                                    label="Recommended By*"
                                    name="recommendedBy"
                                    variant="outlined"
                                    control={control}
                                    disabled={true}
                                    errorStatus={errors.recommendedBy ? true : false}
                                    rules={{
                                        required: {
                                            value: status === "INTERIM" ? false : true,
                                            message: 'Recommend by is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={7} xs={12} style={{ marginTop: -15 }} display={{ md: "none" }}>
                                <FaasTextInputController
                                    // defaultData={data?.recommended_position ? data?.recommended_position : userData?.job[0]?.code}
                                    defaultData={data?.recommended_position ? data?.recommended_position : (userData.user.role === "APPROVER" && status === "CURRENT")
                                        || (userData.user.role === "ADMIN" && status === "CURRENT") ? userData?.job[0]?.code : ""}
                                    label="Recommended Position*"
                                    name="recommendedPosition"
                                    variant="outlined"
                                    control={control}
                                    disabled={true}
                                    errorStatus={errors.recommendedPosition ? true : false}
                                    rules={{
                                        required: {
                                            value: false,
                                            message: 'recommendedPosition is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={5} xs={12} style={{ marginTop: -15 }}>
                                <Controller
                                    defaultValue={data?.recommended_date ? data?.recommended_date : ""}
                                    name={'recommendedDate'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: status === "INTERIM" ? false : true,
                                            message: 'Recommended date is required',
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            name="recommendedDate"
                                            label="Recommended Date"
                                            type="date"
                                            size='small'
                                            error={errors?.recommendedDate ? true : false}
                                            fullWidth
                                            disabled={status === "INTERIM" || status === "FOR APPROVAL" || status === "APPROVED" || status === "CANCELLED" ? true : false}
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            value={value}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                            <Grid item md={7} xs={12} style={{ marginTop: -15 }}>
                                <FaasTextInputController
                                    // defaultData={status === "INTERIM" || status === "CURRENT" ? data?.approve_by :
                                    //     userData?.personnel[0]?.firstname + " " + userData?.personnel[0]?.middlename.charAt(0) + ". " + userData?.personnel[0]?.lastname}
                                    defaultData={data?.approve_by ? data?.approve_by : (userData.user.role === "ASSESSOR" && status === "FOR APPROVAL")
                                        || (userData.user.role === "ADMIN" && status === "FOR APPROVAL") ?
                                        userData?.personnel[0]?.firstname + " " + userData?.personnel[0]?.middlename.charAt(0) + ". " + userData?.personnel[0]?.lastname : ""}
                                    label="Approved By*"
                                    name="approveBy"
                                    variant="outlined"
                                    control={control}
                                    disabled={true}
                                    errorStatus={errors.approveBy ? true : false}
                                    rules={{
                                        required: {
                                            value: status === "INTERIM" || status === "CURRENT" ? false : true,
                                            message: 'Approved by is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={7} xs={12} style={{ marginTop: -15 }} display={{ md: "none" }}>
                                <FaasTextInputController
                                    defaultData={data?.approved_position ? data?.approved_position : (userData.user.role === "ASSESSOR" && status === "FOR APPROVAL")
                                        || (userData.user.role === "ADMIN" && status === "FOR APPROVAL") ? userData?.job[0]?.code : ""}
                                    label="Approved Position*"
                                    name="approvedPosition"
                                    variant="outlined"
                                    control={control}
                                    disabled={true}
                                    errorStatus={errors.approvedPosition ? true : false}
                                    rules={{
                                        required: {
                                            value: false,
                                            message: 'approvedPosition is required',
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item md={5} xs={12} style={{ marginTop: -15 }}>
                                <Controller
                                    defaultValue={data?.approve_date ? data?.approve_date : ""}
                                    name={'approvedDate'}
                                    control={control}
                                    rules={{
                                        required: {
                                            value: status === "INTERIM" || status === "CURRENT" ? false : true,
                                            message: 'Approved date is required',
                                        },
                                    }}
                                    render={({ field: { onChange, onBlur, value } }) => (
                                        <TextField
                                            name="approvedDate"
                                            label="Approved Date*"
                                            type="date"
                                            size='small'
                                            error={errors?.approvedDate ? true : false}
                                            fullWidth
                                            disabled={status === "INTERIM" || status === "CURRENT" || status === "APPROVED" || status === "CANCELLED" ? true : false}
                                            onBlur={onBlur}
                                            onChange={onChange}
                                            value={value}
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                        />
                                    )}
                                />
                            </Grid>
                        </Grid>
                    </CardContent>
                </Grid>

            </Grid>
        </>
    );
};

export default GeneralInformation;