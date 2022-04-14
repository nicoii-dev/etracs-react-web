import React from 'react';
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


const DataToPrint = React.forwardRef((props, ref) => {

    const rows = [
        {
            classification: "RESIDENTIAL",
            area: "104.00",
            area_type: "sqm",
            market_value: "41,600.00",
            actual_use: "RESIDENTIAL",
            assessment_level: "10%",
            assessed_value: "4,160.00",
        }
    ];
    return (
        <>
            <Grid container spacing={3} ref={ref}>
                <Grid item md={12} xs={12}>
                    <Typography style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 12, marginTop: 15 }}>PROVINCE OF MISAMIS ORIENTAL</Typography>
                    <Typography style={{ textAlign: 'center', fontWeight: 'bold', fontSize: 18, marginTop: 25 }}>TAX DECLARTION OF REAL PROPERTY</Typography>
                    <img src={Logo} alt="logo" style={{ height: 100, width: 100, position: 'absolute', left: 100, top: 15 }}></img>
                </Grid>
                <Typography style={{ marginLeft: 70, marginTop: 40, fontWeight: 'bold', fontSize: 12 }}>
                    TD No.: <input type={"text"} style={{
                        width: 250, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1
                    }} />
                </Typography>
                <Typography style={{ marginLeft: 10, marginTop: 40, fontWeight: 'bold', fontSize: 12 }}>
                    Property Indetification No.: <input type={"text"} style={{ width: 252, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>

                <Typography style={{ marginLeft: 70, marginTop: 5, fontSize: 12 }}>
                    Owner: <input type={"text"} style={{ width: 500, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 10, marginTop: 5, fontSize: 12 }}>
                    TIN: <input type={"text"} style={{ width: 142, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>

                <Typography style={{ marginLeft: 70, marginTop: 5, fontSize: 12 }}>
                    Address: <input type={"text"} style={{ width: 494, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 10, marginTop: 5, fontSize: 12 }}>
                    Telephone No.: <input type={"text"} style={{ width: 80, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>

                <Typography style={{ marginLeft: 70, marginTop: 5, fontSize: 12 }}>
                    Administrator/Beneficial User: <input type={"text"} style={{ width: 380, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 10, marginTop: 5, fontSize: 12 }}>
                    TIN: <input type={"text"} style={{ width: 141, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>

                <Typography style={{ marginLeft: 70, marginTop: 5, fontSize: 12 }}>
                    Address: <input type={"text"} style={{ width: 493, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 10, marginTop: 5, fontSize: 12 }}>
                    Telephone No.: <input type={"text"} style={{ width: 81, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>

                <Typography style={{ marginLeft: 70, marginTop: 5, fontSize: 12 }}>
                    Location of Property: <input type={"text"} style={{ width: 200, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                    <input type={"text"} style={{ width: 179, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, marginLeft: 25, borderBottomWidth: 1 }} />
                    <input type={"text"} style={{ width: 175, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, marginLeft: 25, borderBottomWidth: 1 }} />
                </Typography>

                <Typography style={{ marginLeft: 240, marginTop: 0, fontSize: 10, fontFamily: "initial" }}>
                    (Number and Street)
                </Typography>
                <Typography style={{ marginLeft: 140, marginTop: 0, fontSize: 10, fontFamily: "initial" }}>
                    (Barangay/District)
                </Typography>
                <Typography style={{ marginLeft: 95, marginTop: 0, fontSize: 10, fontFamily: "initial" }}>
                    {'(Municipality & Province/City)'}
                </Typography>

                <Typography style={{ marginLeft: 70, marginTop: 5, fontSize: 12 }}>
                    OCT/TCT/CLOA No.: <input type={"text"} style={{ width: 257, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 10, marginTop: 5, fontSize: 12 }}>
                    Telephone No.: <input type={"text"} style={{ width: 251, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>

                <Typography style={{ marginLeft: 158, marginTop: 5, fontSize: 12 }}>
                    CCT: <input type={"text"} style={{ width: 257, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 48, marginTop: 5, fontSize: 12 }}>
                    Lot No.: <input type={"text"} style={{ width: 252, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>

                <Typography style={{ marginLeft: 155, marginTop: 5, fontSize: 12 }}>
                    Date: <input type={"text"} value={10} style={{ width: 257, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 47, marginTop: 5, fontSize: 12 }}>
                    Blk No.: <input type={"text"} style={{ width: 253, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>

                <Typography style={{ marginLeft: 70, marginTop: 5, fontSize: 12 }}>
                    Boundaries:
                </Typography>
                <Typography style={{ marginLeft: 30, marginTop: 5, fontSize: 12 }}>
                    North: <input type={"text"} style={{ width: 589, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 171, marginTop: 5, fontSize: 12 }}>
                    East: <input type={"text"} style={{ width: 589, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 163, marginTop: 5, fontSize: 12 }}>
                    South: <input type={"text"} style={{ width: 589, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 167, marginTop: 5, fontSize: 12 }}>
                    West: <input type={"text"} style={{ width: 590, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
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
                        {rows.map((row, key) => {
                            return (
                                <tr key={key}>
                                    <td className='td'>{row.classification}</td>
                                    <td className='td'>{row.area}</td>
                                    <td className='td'>{row.area_type}</td>
                                    <td className='td'>{row.market_value}</td>
                                    <td className='td'>{row.actual_use}</td>
                                    <td className='td'>{row.assessment_level}</td>
                                    <td className='td'>{row.assessed_value}</td>
                                </tr>
                            )
                        })}
                    </table>
                </div>

                <Typography style={{ marginLeft: 150, fontSize: 14, marginTop: 30 }}>
                    Total Market Value: <input type={"text"} style={{ width: 200, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 20, fontSize: 14, marginTop: 30 }}>
                    Total Assessed Value: <input type={"text"} style={{ width: 153, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>

                <Typography style={{ marginLeft: 70, fontSize: 14, marginTop: 0 }}>
                    Total Assessed: <input type={"text"} style={{ width: 618, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>

                <Grid item md={12} xs={12} style={{ display: 'flex', marginTop: -20 }}>
                    <Typography style={{ marginLeft: 70, fontSize: 14 }}>
                        TAXABLE<input type="checkbox" style={{ height: 15, width: 15, }} checked={true} />
                    </Typography>
                    <Typography style={{ marginLeft: 5, fontSize: 14 }}>
                        EXEMPT<input type="checkbox" style={{ height: 15, width: 15 }} checked={false} />
                    </Typography>
                    <Typography style={{ marginLeft: 233, fontSize: 14, marginTop: 3 }}>
                        Effectivity of Assessment: <input type={"text"} style={{ width: 128, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                    </Typography>
                </Grid>

                <Grid item md={12} xs={12} style={{ display: 'flex', marginTop: -10 }}>
                    <Typography style={{ marginLeft: 350, fontSize: 14, marginTop: 3 }}>
                        Recommended by: <input type={"text"} style={{ width: 250, marginLeft: 10, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                    </Typography>
                </Grid>
                <Typography style={{ marginLeft: 600, fontSize: 14, marginTop: 0 }}>
                    Position
                </Typography>

                <Grid item md={12} xs={12} style={{ display: 'flex', marginTop: -10 }}>
                    <Typography style={{ marginLeft: 70, fontSize: 14, marginTop: 3 }}>
                        Approved by: <input type={"text"} style={{ width: 250, marginLeft: 10, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                        <input type={"text"} style={{ width: 150, marginLeft: 20, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                    </Typography>
                </Grid>
                <Typography style={{ marginLeft: 290, fontSize: 14, marginTop: 0 }}>
                    Position
                </Typography>
                <Typography style={{ marginLeft: 180, fontSize: 14, marginTop: 0 }}>
                    Date
                </Typography>

                <Typography style={{ marginLeft: 155, marginTop: 5, fontSize: 12 }}>
                    TD No.: <input type={"text"} style={{ width: 589, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 123, marginTop: 5, fontSize: 12 }}>
                    Previous PIN: <input type={"text"} style={{ width: 589, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 108, marginTop: 5, fontSize: 12 }}>
                    Previous Owner: <input type={"text"} style={{ width: 589, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 97, marginTop: 5, fontSize: 12 }}>
                    Previous M.V Php: <input type={"text"} style={{ width: 250, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>
                <Typography style={{ marginLeft: 10, marginTop: 5, fontSize: 12 }}>
                    Previous A.V Php: <input type={"text"} style={{ width: 227, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1 }} />
                </Typography>

                <textarea id="w3review" name="w3review" rows="4" cols="50" style={{marginLeft: 70, marginTop: 10, width: '86%'}}>
                    At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.
                </textarea>

                <Typography style={{ marginLeft: 70, marginTop: 5, fontSize: 12, fontWeight: 'bolder', fontStyle: 'italic' }}>
                    Note:
                </Typography>
                <Typography style={{ marginLeft: 10, marginTop: 5, fontSize: 10, fontStyle: 'italic', width: '81%'}}>
                    This declartion is for real property taxation purpose only and the value indicated herein are based on the schedule of unit market values prepared 
                    for the purpose and duly enacted into an Ordinance by the SANGGUNIANG PANLALAWIGAN under Ordinance No. 947-2006 dated 2006-11-06. It does not and
                    cannot by itself alone confer any ownership or legal title of the property.
                </Typography>

            </Grid>
        </>
    )
});

export default DataToPrint;
