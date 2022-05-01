/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from 'react';
import {
    Box,
    Button,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    TextField,
    Typography
} from '@mui/material';
import './data-to-print.css';
import Logo from '../../assets/image/mis-or-logo.png'
import { useSelector } from 'react-redux';

const DataToPrint = React.forwardRef((props, ref) => {
    const { data } = props;
    const pinData = useSelector((state) => state.pinData.pin);

    let a = ['', 'one ', 'two ', 'three ', 'four ', 'five ', 'six ', 'seven ', 'eight ', 'nine ', 'ten ', 'eleven ', 'twelve ', 'thirteen ', 'fourteen ', 'fifteen ', 'sixteen ', 'seventeen ', 'eighteen ', 'nineteen '];
    let b = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    const inWords = useCallback((num) => {
        if ((num = num.toString()).length > 9) return 'overflow';
        let n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
        if (!n) return; var str = '';
        str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
        str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
        str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
        str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
        str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
        return str;
    }, [a, b])

    // React.useEffect(() => {
    //     console.log(inWords(data?.assessed_value))
    //     console.log(inWords(1430).replace('only', ''))
    // }, [inWords])

    return (
        <>
            <Grid container spacing={3} ref={ref} style={{ pointerEvents: 'none'}}>
                <Grid item md={12} xs={12}>
                    <Typography style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 12, marginTop: 15 }}>PROVINCE OF MISAMIS ORIENTAL</Typography>
                    <Typography style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, marginTop: 25 }}>TAX DECLARTION OF REAL PROPERTY</Typography>
                    <img src={Logo} alt="logo" style={{ height: 100, width: 100, position: 'absolute', left: 100, top: 15 }}></img>
                </Grid>
                {data?.status === "CANCELLED" ?
                    <div style={{
                        width: '100%',
                        height: 100,
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        margin: 'auto',
                        alignContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Typography align="center" style={{
                            fontWeight: 'bold',
                            width: '100%',
                            fontSize: 120,
                            zIndex: -10,
                            color: 'rgba(0,0,0,0.4',
                        }}>
                            CANCELLED
                        </Typography>
                    </div>
                    : null
                }
                <Typography style={{ marginLeft: 70, marginTop: 40, fontWeight: 'bold', fontSize: 12 }}>
                    TD No.: <input type={"text"} value={data?.td_number}
                        style={{ width: 250, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1, textAlign: 'center' }} />
                </Typography>
                <Typography style={{ marginLeft: 10, marginTop: 40, fontWeight: 'bold', fontSize: 12 }}>
                    Property Indetification No.: <input type={"text"} value={data.pin}
                        style={{ width: 252, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1, textAlign: 'center' }} />
                </Typography>

                <Typography style={{ marginLeft: 70, marginTop: 5, fontSize: 12 }}>
                    Owner: <input type={"text"} value={data?.owner_name}
                        style={{ width: 500, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 10, marginTop: 5, fontSize: 12 }}>
                    TIN: <input type={"text"} value={data?.tin}
                        style={{ width: 142, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>

                <Typography style={{ marginLeft: 70, marginTop: 5, fontSize: 12 }}>
                    Address: <input type={"text"} value={data?.owner_address}
                        style={{ width: 494, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 10, marginTop: 5, fontSize: 12 }}>
                    Telephone No.: <input type={"text"} value={data?.contact_number}
                        style={{ width: 80, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>

                <Typography style={{ marginLeft: 70, marginTop: 5, fontSize: 12 }}>
                    Administrator/Beneficial User: <input type={"text"}
                        style={{ width: 380, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 10, marginTop: 5, fontSize: 12 }}>
                    TIN: <input type={"text"}
                        style={{ width: 141, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>

                <Typography style={{ marginLeft: 70, marginTop: 5, fontSize: 12 }}>
                    Address: <input type={"text"}
                        style={{ width: 493, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 10, marginTop: 5, fontSize: 12 }}>
                    Telephone No.: <input type={"text"} style={{ width: 81, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>

                <Typography style={{ marginLeft: 70, marginTop: 5, fontSize: 12 }}>
                    Location of Property:
                    <input type={"text"} value={data?.location_street} 
                    style={{ width: 150, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1, textAlign: 'center' }} />
                    <input type={"text"} value={data?.barangay_lgu}
                        style={{ width: 200, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, marginLeft: 15, borderBottomWidth: 1, textAlign: 'center' }} />
                    <input type={"text"} value={data?.city_municipality}
                        style={{ width: 228, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, marginLeft: 15, borderBottomWidth: 1, textAlign: 'center' }} />
                </Typography>

                <Typography style={{ marginLeft: 215, marginTop: 0, fontSize: 10, fontFamily: "initial" }}>
                    (Number and Street)
                </Typography>
                <Typography style={{ marginLeft: 108, marginTop: 0, fontSize: 10, fontFamily: "initial" }}>
                    (Barangay/District)
                </Typography>
                <Typography style={{ marginLeft: 125, marginTop: 0, fontSize: 10, fontFamily: "initial" }}>
                    {'(Municipality & Province/City)'}
                </Typography>

                <Typography style={{ marginLeft: 70, marginTop: 5, fontSize: 12 }}>
                    OCT/TCT/CLOA No.: <input type={"text"} value={data?.title_number}
                        style={{ width: 257, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1, }} />
                </Typography>
                <Typography style={{ marginLeft: 10, marginTop: 5, fontSize: 12 }}>
                    Survey No.: <input type={"text"} value={data?.survey_number}
                        style={{ width: 251, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>

                <Typography style={{ marginLeft: 158, marginTop: 5, fontSize: 12 }}>
                    CCT: <input type={"text"} style={{ width: 257, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 48, marginTop: 5, fontSize: 12 }}>
                    Lot No.: <input type={"text"} value={data?.house_number}
                        style={{ width: 252, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>

                <Typography style={{ marginLeft: 155, marginTop: 5, fontSize: 12 }}>
                    Date: <input type={"text"} value={data?.title_date}
                        style={{ width: 257, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1, }} />
                </Typography>
                <Typography style={{ marginLeft: 47, marginTop: 5, fontSize: 12 }}>
                    Blk No.: <input type={"text"} value={data?.block_number}
                        style={{ width: 253, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1, }} />
                </Typography>

                <Typography style={{ marginLeft: 70, marginTop: 5, fontSize: 12 }}>
                    Boundaries:
                </Typography>
                <Typography style={{ marginLeft: 30, marginTop: 5, fontSize: 12 }}>
                    North: <input type={"text"} value={data?.north}
                        style={{ width: 589, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1, }} />
                </Typography>
                <Typography style={{ marginLeft: 171, marginTop: 5, fontSize: 12 }}>
                    East: <input type={"text"} value={data?.east}
                        style={{ width: 589, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1, }} />
                </Typography>
                <Typography style={{ marginLeft: 163, marginTop: 5, fontSize: 12 }}>
                    South: <input type={"text"} value={data?.south}
                        style={{ width: 589, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1, }} />
                </Typography>
                <Typography style={{ marginLeft: 167, marginTop: 5, fontSize: 12 }}>
                    West: <input type={"text"} value={data?.west}
                        style={{ width: 590, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1, }} />
                </Typography>

                <Typography style={{ marginLeft: 70, marginTop: 15, fontSize: 12 }}>
                    KIND OF PROPERTY ASSESSED:
                </Typography>
                <Grid item md={12} xs={12} style={{ marginTop: -20, }}>
                    <Grid item md={12} xs={12} style={{ display: 'flex' }}>
                        <Typography style={{ marginLeft: 100, fontSize: 14 }}>
                            <input type="checkbox" style={{ height: 15, width: 15 }} checked={true} />LAND
                        </Typography>
                        <Typography style={{ marginLeft: 250, fontSize: 14 }}>
                            <input type="checkbox" style={{ height: 15, width: 15 }} checked={false} />MACHINERY
                        </Typography>
                        <Typography style={{ marginLeft: 10, fontSize: 14, marginTop: 3 }}>
                            Brief Description: <input type={"text"} style={{ width: 128, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                        </Typography>
                    </Grid>
                    <Grid item md={12} xs={12} style={{ display: 'flex' }}>
                        <Typography style={{ marginLeft: 100, fontSize: 14 }}>
                            <input type="checkbox" style={{ height: 15, width: 15 }} checked={false} />BUILDING
                        </Typography>
                        <Typography style={{ marginLeft: 10, fontSize: 14, marginTop: 3 }}>
                            No. of Storeys: <input type={"text"} style={{ width: 98, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                        </Typography>
                        <Typography style={{ marginLeft: 14, fontSize: 14 }}>
                            <input type="checkbox" style={{ height: 15, width: 15 }} checked={false} />OTHERS
                        </Typography>
                        <Typography style={{ marginLeft: 36, fontSize: 14, marginTop: 3 }}>
                            Brief Description: <input type={"text"} style={{ width: 128, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                        </Typography>
                    </Grid>
                    <Typography style={{ marginLeft: 200, fontSize: 14, marginTop: 0 }}>
                        Brief Description: <input type={"text"} style={{ width: 200, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                    </Typography>
                </Grid>

                <div className="App">
                    <table className='table'>
                        <tr>
                            <th className='th'>Classification</th>
                            <th className='th'>Area</th>
                            <th className='th'>Area type</th>
                            <th className='th'>Market value</th>
                            <th className='th'>Actual use</th>
                            <th className='th'>Assessment level</th>
                            <th className='th'>Assessed value</th>
                        </tr>

                        <tr>
                            <td className='td'>{data?.classification_name}</td>
                            <td className='td'>{data?.area}</td>
                            <td className='td'>{data?.area_type}</td>
                            <td className='td'>{data?.market_value}</td>
                            <td className='td'>{data?.actual_use_value}</td>
                            <td className='td'>{data?.assessment_level}</td>
                            <td className='td'>{data?.assessed_value}</td>
                        </tr>
                    </table>
                </div>

                <Typography style={{ marginLeft: 150, fontSize: 14, marginTop: 15 }}>
                    Total Market Value: <input type={"text"} value={`P ${data?.market_value}`}
                        style={{ width: 200, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1, textAlign: 'center' }} />
                </Typography>
                <Typography style={{ marginLeft: 20, fontSize: 14, marginTop: 15 }}>
                    Total Assessed Value: <input type={"text"} value={`P ${data?.assessed_value}`}
                        style={{ width: 153, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1, textAlign: 'center' }} />
                </Typography>

                <Typography style={{ marginLeft: 70, fontSize: 14, marginTop: 0 }}>
                    Total Assessed: <input type={"text"} value={inWords(parseInt(data?.assessed_value))}
                        style={{ width: 618, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1, textAlign: 'center' }} />
                </Typography>

                <Grid item md={12} xs={12} style={{ display: 'flex', marginTop: -20 }}>
                    <Typography style={{ marginLeft: 70, fontSize: 14 }}>
                        TAXABLE<input type="checkbox" style={{ height: 15, width: 15, }} checked={data?.taxable === "1" ? true : false} />
                    </Typography>
                    <Typography style={{ marginLeft: 5, fontSize: 14 }}>
                        EXEMPT<input type="checkbox" style={{ height: 15, width: 15 }} checked={data?.taxable === "0" ? true : false} />
                    </Typography>
                    <Typography style={{ marginLeft: 233, fontSize: 14, marginTop: 3 }}>
                        Effectivity of Assessment: <input type={"text"} value={data?.issue_date}
                            style={{ width: 128, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1, textAlign: 'center' }} />
                    </Typography>
                </Grid>

                <Grid item md={12} xs={12} style={{ display: 'flex', marginTop: -10 }}>
                    <Typography style={{ marginLeft: 350, fontSize: 14, marginTop: 3 }}>
                        Recommended by: <input type={"text"} value={data?.recommended_by}
                            style={{ width: 250, marginLeft: 10, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1, textAlign: 'center' }} />
                    </Typography>
                </Grid>
                <Typography style={{ marginLeft: 600, fontSize: 14, marginTop: 0 }}>
                    {data?.recommended_position}
                </Typography>

                <Grid item md={12} xs={12} style={{ display: 'flex', marginTop: -10 }}>
                    <Typography style={{ marginLeft: 70, fontSize: 14, marginTop: 3 }}>
                        Approved by: <input type={"text"} value={data?.approve_by}
                            style={{ width: 250, marginLeft: 10, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1, textAlign: 'center' }} />
                        <input type={"text"} value={data?.approve_date}
                            style={{ width: 150, marginLeft: 20, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1, textAlign: 'center' }} />
                    </Typography>
                </Grid>
                <Typography style={{ marginLeft: 290, fontSize: 14, marginTop: 0 }}>
                    {data?.approved_position}
                </Typography>
                <Typography style={{ marginLeft: 180, fontSize: 14, marginTop: 0 }}>
                    Date
                </Typography>

                <Typography style={{ marginLeft: 180, marginTop: 5, fontSize: 12 }}>
                    This declaration cancels
                </Typography>
                <Typography style={{ marginLeft: 155, marginTop: 5, fontSize: 12 }}>

                    TD No.: <input type={"text"} value={data?.previous_td_number}
                        style={{ width: 589, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1}} />
                </Typography>
                <Typography style={{ marginLeft: 123, marginTop: 5, fontSize: 12 }}>
                    Previous PIN: <input type={"text"} value={data?.previous_pin}
                        style={{ width: 589, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 108, marginTop: 5, fontSize: 12 }}>
                    Previous Owner: <input type={"text"} value={data?.previous_owner}
                        style={{ width: 589, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 97, marginTop: 5, fontSize: 12 }}>
                    Previous M.V Php: <input type={"text"} value={`P ${data?.previous_mv}`}
                        style={{ width: 250, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 , textAlign: 'center'}} />
                </Typography>
                <Typography style={{ marginLeft: 10, marginTop: 5, fontSize: 12 }}>
                    Previous A.V Php: <input type={"text"} value={`P ${data?.previous_av}`}
                        style={{ width: 227, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1, textAlign: 'center' }} />
                </Typography>

                <textarea id="w3review" name="w3review" rows="3" cols="50" style={{ marginLeft: 70, marginTop: 10, width: '86%' }}>
                    {data?.remarks}
                </textarea>

                <Typography style={{ marginLeft: 70, marginTop: 5, fontSize: 12, fontWeight: 'bolder', fontStyle: 'italic' }}>
                    Note:
                </Typography>
                <Typography style={{ marginLeft: 10, marginTop: 5, fontSize: 10, fontStyle: 'italic', width: '81%' }}>
                    This declartion is for real property taxation purpose only and the value indicated herein are based on the schedule of unit market values prepared
                    for the purpose and duly enacted into an Ordinance by the SANGGUNIANG PANLALAWIGAN under Ordinance No. 947-2006 dated 2006-11-06. It does not and
                    cannot by itself alone confer any ownership or legal title of the property.
                </Typography>

            </Grid>
        </>
    )
});

export default DataToPrint;
