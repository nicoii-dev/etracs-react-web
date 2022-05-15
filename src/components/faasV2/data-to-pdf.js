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

import { useForm, Controller } from "react-hook-form";

const DataToPdf = React.forwardRef((props, ref) => {
    const { data } = props;
    return (
        <>
            <div ref={ref}>
                <div style={{ marginTop: 30, display: 'flex' }}>
                    <div style={{ marginLeft: 50 }}>
                        <h5 style={{ fontWeight: 'bold' }}>RPA FORM No. 1-A</h5>
                    </div>
                    <div style={{ marginLeft: 500, alignSelf: 'flex-end' }}>
                        <h5 style={{ fontWeight: 'bold' }}>ATTACHED "B"</h5>
                    </div>
                </div>
                <Typography style={{ marginLeft: 50, fontSize: 14, marginTop: -20 }}>
                    UPDATE CODE:
                    <input type={"text"} value={data?.transaction} style={{ width: 250, marginLeft: 10, borderTopWidth: 0, borderLeftWidth: 0, borderRight: 0, borderBottomWidth: 1, textAlign: 'center' }} />
                </Typography>
                <div style={{ marginLeft: 50, marginTop: -10 }}>
                    <h5>REAL PROPERTY FIELD APPRAISAL AND ASSESSMENT SHEET - LAND, PLANTS AND TREES</h5>
                </div>

                <div style={{ marginTop: -20, marginLeft: 50, border: '1px solid', display: 'flex', width: 725 }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', marginLeft: 10, fontSize: 12, }}>
                            ARP No. : <div style={{ marginLeft: 30 }}>{data?.pin}</div>
                        </div>
                        <div style={{ marginLeft: 200, display: 'flex', fontSize: 12 }}>
                            PIN : <div style={{ marginLeft: 30 }}>{data?.pin}</div>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: 0, marginLeft: 50, border: '1px solid', borderTop: '0px', display: 'flex', width: 725 }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', marginLeft: 10, fontSize: 12 }}>
                            OCT/TCT No. : <div style={{ marginLeft: 10 }}>{data?.title_number}</div>
                        </div>
                        <div style={{ position: 'absolute', right: 300, display: 'flex', fontSize: 12 }}>
                            Date : <div style={{ marginLeft: 10 }}>{data?.issue_date}</div>
                        </div>
                        <div style={{ right: 150, display: 'flex', fontSize: 12, position: 'absolute', border: '1px solid', borderTop: '0px', borderRight: '0px', borderBottom: '0px' }}>
                            Lot No. : <div style={{ marginLeft: 10, }}>{data?.issue_date}</div>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: 0, marginLeft: 50, border: '1px solid', borderTop: '0px', display: 'flex', width: 725 }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', marginLeft: 10, fontSize: 12 }}>
                            Survey No. : <div style={{ marginLeft: 10 }}>{data?.survey_number}</div>
                        </div>
                        <div style={{ position: 'absolute', marginLeft: 350, border: '1px solid', borderTop: '0px', borderRight: '0px', borderBottom: '0px' }}>
                            <div style={{ marginLeft: 10, display: 'flex', fontSize: 12 }}>
                                Blk No. : <div style={{ marginLeft: 10 }}>{data?.block_number}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ marginTop: 0, marginLeft: 50, border: '1px solid', borderTop: '0px', display: 'flex', width: 725, height: 40 }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ display: 'flex', marginLeft: 10, fontSize: 12 }}>
                            Owner : <div style={{ marginLeft: 10, fontWeight: 'bold' }}>{data?.owner_name}</div>
                        </div>
                        <div style={{ height: 40, position: 'absolute', marginLeft: 350, border: '1px solid', borderTop: '0px', borderRight: '0px', borderBottom: '0px' }}>
                            <div style={{ marginLeft: 10, display: 'flex', fontSize: 12, }}>
                                Address : <div style={{ marginLeft: 10, fontWeight: 'bold' }}>{data?.owner_address}</div>
                            </div>
                            <div style={{ marginLeft: 10, display: 'flex', fontSize: 12, }}>
                                Tel. No. : <div style={{ marginLeft: 10, fontWeight: 'bold' }}>{data?.owner_telephone}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <h5 style={{ marginLeft: 50 }}>PROPERTY LOCATION</h5>
                <div style={{ marginTop: -20, marginLeft: 50, border: '1px solid', display: 'flex', width: 725, height: 40 }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ height: 40, border: '1px solid', borderTop: '0px', borderLeft: '0px', borderRight: '0px', borderBottom: '0px' }}>
                            <div style={{ marginLeft: 10, display: 'flex', fontSize: 12, }}>
                                House No. : <div style={{ marginLeft: 10, fontWeight: 'bold' }}>{data?.house_number}</div>
                            </div>
                            <div style={{ marginLeft: 10, display: 'flex', fontSize: 12, }}>
                                Street : <div style={{ marginLeft: 10, fontWeight: 'bold' }}>{data?.street}</div>
                            </div>
                        </div>
                        <div style={{ height: 40, position: 'absolute', marginLeft: 350, border: '1px solid', borderTop: '0px', borderRight: '0px', borderBottom: '0px' }}>
                            <div style={{ marginLeft: 10, display: 'flex', fontSize: 12, }}>
                                Barangay/Disctrict: <div style={{ marginLeft: 10, fontWeight: 'bold' }}>{data?.barangay_lgu}</div>
                            </div>
                            <div style={{ marginLeft: 10, display: 'flex', fontSize: 12, }}>
                                Municipality/City/Province : <div style={{ marginLeft: 10, fontWeight: 'bold' }}>{data?.city_municipality}</div>
                            </div>
                        </div>
                    </div>
                </div>

                <h5 style={{ marginLeft: 50 }}>PROPERTY BOUNDARIES</h5>
                <div style={{ marginTop: -20, marginLeft: 50, border: '1px solid', display: 'flex', width: 725, height: 180 }}>
                    <div style={{ display: 'flex' }}>
                        <div style={{ height: 40, border: '1px solid', borderTop: '0px', borderLeft: '0px', borderRight: '0px', borderBottom: '0px' }}>
                            <div style={{ marginLeft: 10, display: 'flex', fontSize: 14, height: 50 }}>
                                North : <div style={{ marginLeft: 60, fontWeight: 'bold', position: 'absolute' }}>LOT {data?.north}</div>
                            </div>
                            <div style={{ marginLeft: 10, display: 'flex', fontSize: 14, height: 50 }}>
                                East : <div style={{ marginLeft: 60, fontWeight: 'bold', position: 'absolute' }}>LOT {data?.east}</div>
                            </div>
                            <div style={{ marginLeft: 10, display: 'flex', fontSize: 14, height: 50 }}>
                                South : <div style={{ marginLeft: 60, fontWeight: 'bold', position: 'absolute' }}>LOT {data?.south}</div>
                            </div>
                            <div style={{ marginLeft: 10, display: 'flex', fontSize: 14, height: 50 }}>
                                West : <div style={{ marginLeft: 60, fontWeight: 'bold', position: 'absolute' }}>LOT {data?.west}</div>
                            </div>
                        </div>
                        <div style={{ height: 180, position: 'absolute', marginLeft: 350, border: '1px solid', borderTop: '0px', borderRight: '0px', borderBottom: '0px' }}>
                            <div style={{ marginLeft: 10, display: 'flex', fontSize: 12, }}>
                                Land Sketch:
                            </div>
                        </div>
                    </div>
                </div>

                <h5 style={{ marginLeft: 50 }}>LAND APPRAISAL</h5>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: -20, marginLeft: 15 }}>
                    <table className='table' style={{ width: 725 }}>
                        <tr>
                            <th className='th' style={{ height: 30 }}>Classification</th>
                            <th className='th'>Sub-Class</th>
                            <th className='th'>Actual Use</th>
                            <th className='th'>Area</th>
                            <th className='th'>Type</th>
                            <th className='th'>Unit Value</th>
                            <th className='th'>Base Market Value</th>
                        </tr>

                        <tr>
                            <td className='td' style={{ height: 30 }}>{data?.classification_name}</td>
                            <td className='td'>{data?.sub_class}</td>
                            {/* <td className='td'>{(data?.actual_use_value * 100) + "%"}</td> */}
                            <td className='td'>{data?.classification_name}</td>
                            <td className='td'>{data?.area}</td>
                            <td className='td'>{data?.area_type}</td>
                            <td className='td'>{data?.unit_value}</td>
                            <td className='td'>{(data?.unit_value * data?.area).toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td className='td' style={{ height: 30 }}></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'> </td>
                            <td className='td'><p style={{ height: 0, visibility: 'hidden' }}>1</p></td>
                        </tr>
                        <tr>
                            <td className='td' style={{ height: 30 }}></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'><p style={{ height: 0, visibility: 'hidden' }}>1</p></td>
                        </tr>
                        <tr>
                            <td className='td' style={{ height: 30 }}></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'>Total</td>
                            <td className='td'>{(data?.unit_value * data?.area).toFixed(2)}</td>
                        </tr>
                    </table>
                </div>
                <h3 style={{ pageBreakBefore: 'always', visibility: 'hidden' }}>1</h3>
                <h5 style={{ marginLeft: 50, }}>PLANT AND TREES APPRAISAL</h5>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: -20, marginLeft: 15 }}>
                    <table className='table' style={{ width: 725 }}>
                        <thead>
                            <tr>
                                <th className='th' style={{ height: 30 }} rowspan="2">Sub-Class</th>
                                <th className='th' colspan="3">NUMBER OF TREES PLANTED</th>
                                <th className='th' rowspan="2">Unit Value</th>
                                <th className='th' rowspan="2">Base Market Value</th>
                            </tr>
                            <tr>
                                <th className='th' >Total</th>
                                <th className='th' >Non-Productive</th>
                                <th className='th' >Production</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='td' style={{ height: 30 }}><p style={{ height: 0, visibility: 'hidden' }}>1</p></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                            </tr>
                            <tr>
                                <td className='td' style={{ height: 30 }}><p style={{ height: 0, visibility: 'hidden' }}>1</p></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                            </tr>
                            <tr>
                                <td className='td' style={{ height: 30 }}><p style={{ height: 0, visibility: 'hidden' }}>1</p></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                            </tr>
                            <tr>
                                <td className='td' style={{ height: 30 }}><p style={{ height: 0, visibility: 'hidden' }}>1</p></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                            </tr>
                            <tr>
                                <td className='td' style={{ height: 30 }}><p style={{ height: 0, visibility: 'hidden' }}>1</p></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                            </tr>
                            <tr>
                                <td className='td' style={{ height: 30 }}><p style={{ height: 0, visibility: 'hidden' }}>1</p></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'>Total</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h5 style={{ marginLeft: 50, }}>VALUE ADJUSTMENT FACTOR - LAND</h5>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: -20, marginLeft: 15 }}>
                    <table className='table' style={{ width: 725 }}>
                        <tr>
                            <th className='th' style={{ height: 30 }}>Actual Use</th>
                            <th className='th'>Base Market Value</th>
                            <th className='th'>Adjustment Factor</th>
                            <th className='th'>Adjustment %</th>
                            <th className='th'>Value Adjustment</th>
                            <th className='th'>Market Value</th>
                        </tr>

                        <tr>
                            <td className='td' style={{ height: 30 }}>{data?.classification_name}</td>
                            <td className='td'>{(data?.unit_value * data?.area).toFixed(2)}</td>
                            <td className='td'></td>
                            <td className='td'>{data?.adjustment_value}</td>
                            <td className='td'>{(data?.unit_value * data?.area) * (data?.adjustment_value / 100)}</td>
                            <td className='td'>{data?.market_value}</td>

                        </tr>
                        <tr>
                            <td className='td' style={{ height: 30 }}></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'><p style={{ height: 0, visibility: 'hidden' }}>1</p></td>
                        </tr>
                        <tr>
                            <td className='td' style={{ height: 30 }}></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'><p style={{ height: 0, visibility: 'hidden' }}>1</p></td>
                        </tr>
                        <tr>
                            <td className='td' style={{ height: 30 }}>Total</td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'>{data?.market_value}</td>
                        </tr>
                    </table>
                </div>

                <h5 style={{ marginLeft: 50, }}>PROPERTY ASSESSMENT</h5>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: -20, marginLeft: 15 }}>
                    <table className='table' style={{ width: 725 }}>
                        <tr>
                            <th className='th' style={{ height: 30 }}>Classification</th>
                            <th className='th'>Actual Use</th>
                            <th className='th'>Market Value</th>
                            <th className='th'>Assessment Level</th>
                            <th className='th'>Assessed Value</th>
                        </tr>

                        <tr>
                            <td className='td' style={{ height: 30 }}>{data?.classification_name}</td>
                            <td className='td'>{data?.sub_class}</td>
                            <td className='td'>{data?.market_value}</td>
                            <td className='td'>{data?.assessment_level}</td>
                            <td className='td'>{data?.assessed_value}</td>

                        </tr>
                        <tr>
                            <td className='td' style={{ height: 30 }}></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'><p style={{ height: 0, visibility: 'hidden' }}>1</p></td>
                        </tr>
                        <tr>
                            <td className='td' style={{ height: 30 }}></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'><p style={{ height: 0, visibility: 'hidden' }}>1</p></td>
                        </tr>
                        <tr>
                            <td className='td' style={{ height: 30 }}>Total</td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'></td>
                            <td className='td'>{data?.assessed_value}</td>
                        </tr>
                    </table>
                </div>

                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', marginLeft: 50 }}>
                        Taxability : <Typography style={{ marginLeft: 10, fontWeight: 'bold' }}>{data.taxable === "0" ? "EXEMPT" : "TAXABLE"}</Typography>
                    </div>
                    <div style={{ display: 'flex', marginLeft: 300 }}>
                        Tax Effectivity : <Typography style={{ marginLeft: 10, fontWeight: 'bold' }}>{data?.quarter + ", " + data?.issue_date?.substr(0, data?.issue_date.indexOf('-'))}</Typography>
                    </div>
                </div>

                <h3 style={{ pageBreakBefore: 'always', visibility: 'hidden' }}>1</h3>

                <div style={{ display: 'flex', marginTop: 10 }}>
                    <div style={{ display: 'flex', marginLeft: 50, fontSize: 12 }}>
                        APPRAISED BY :
                    </div>
                    <div style={{ display: 'flex', marginLeft: 200, fontSize: 12 }}>
                        RECOMMENDING APPROVAL :
                    </div>
                </div>

                <div style={{ display: 'flex', marginTop: 10 }}>
                    <div style={{ display: 'flex', fontWeight: 'bold', marginLeft: 90, fontSize: 13, border: '1px solid', borderTop: '0px', borderLeft: '0px', borderRight: '0px' }}>
                        {data?.appraised_by}
                    </div>
                    <div style={{ display: 'flex', fontWeight: 'bold', marginLeft: 50, fontSize: 13, border: '1px solid', borderTop: '0px', borderLeft: '0px', borderRight: '0px' }}>
                        {data?.appraised_date}
                    </div>
                    <div style={{ display: 'flex', fontWeight: 'bold', marginLeft: 100, fontSize: 13, border: '1px solid', borderTop: '0px', borderLeft: '0px', borderRight: '0px' }}>
                        {data?.recommended_by}
                    </div>
                    <div style={{ display: 'flex', fontWeight: 'bold', marginLeft: 50, fontSize: 13, border: '1px solid', borderTop: '0px', borderLeft: '0px', borderRight: '0px' }}>
                        {data?.recommended_date}
                    </div>
                </div>

                <div style={{ display: 'flex', marginTop: 0 }}>
                    <div style={{ display: 'flex', marginLeft: 120, fontSize: 12, }}>
                        Name
                    </div>
                    <div style={{ display: 'flex', marginLeft: 100, fontSize: 12 }}>
                        Date
                    </div>
                    <div style={{ display: 'flex', marginLeft: 120, fontSize: 12 }}>
                        Municipal Assessor
                    </div>
                    <div style={{ display: 'flex', marginLeft: 70, fontSize: 12 }}>
                        Date
                    </div>
                </div>

                <div style={{ display: 'flex', marginTop: 20 }}>
                    <div style={{ display: 'flex', marginLeft: 200, fontSize: 12 }}>
                        APPROVED :
                    </div>
                </div>
                <div style={{ display: 'flex', marginTop: 0 }}>
                    <div style={{ display: 'flex', fontWeight: 'bold', marginLeft: 250, fontSize: 13, border: '1px solid', borderTop: '0px', borderLeft: '0px', borderRight: '0px' }}>
                        {data?.approve_by}
                    </div>
                    <div style={{ display: 'flex', fontWeight: 'bold', marginLeft: 130, fontSize: 13, border: '1px solid', borderTop: '0px', borderLeft: '0px', borderRight: '0px' }}>
                        {data?.approve_date}
                    </div>
                </div>
                <div style={{ display: 'flex', marginTop: 0 }}>
                    <div style={{ display: 'flex', marginLeft: 250, fontSize: 12, }}>
                        Acting Provincial Assessor
                    </div>
                    <div style={{ display: 'flex', marginLeft: 105, fontSize: 12 }}>
                        Date
                    </div>
                </div>
                
                <div style={{height: 100, width: 725, border: '1px solid', marginTop: 20, marginLeft: 50, fontSize: 13}}>
                    MEMORANDA: TRANSFER OF OWNERSHIP PER DEEP OF ABSOLUTE SALE P168,000.00 WITH DOC NO. 367 PAGE NO.65 BOOK NO. 50 SERIES OF
                    2019 RATIFIED BY ATTY. LOMA LINDA AGUINOT-SAY, TCT NO. T-136-2020000405, ECR201800168405, TAX ON TRANSFER PAID P1,109.95
                    UNDER OR NO. 10418378 DATED 01/30/2020, REALTY TAX CLEARANCE FOR 2020, ON FILE.
                </div>

                <h5 style={{ marginLeft: 50, }}>REFERENCE AND POSTING</h5>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: -20, marginLeft: 15 }}>
                    <table className='table' style={{ width: 725 }}>
                        <thead>
                            <tr>
                                <th className='th' style={{ height: 30 }} rowspan="2">Reference</th>
                                <th className='th' rowspan="2">Previous Record</th>
                                <th className='th' colspan="2">Posting Report</th>
                                <th className='th' rowspan="2">Post Inspection</th>
                            </tr>
                            <tr>
                                <th className='th' >Date</th>
                                <th className='th' >Posting Clerk Initial</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='td' style={{ height: 30, }}>PIN</td>
                                <td className='td'>{data?.pin}</td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                            </tr>
                            <tr>
                                <td className='td' style={{ height: 30 }}>TDN</td>
                                <td className='td'>{data?.td_number}</td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                            </tr>
                            <tr>
                                <td className='td' style={{ height: 30 }}>AR Page No.</td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                                <td className='td'></td>
                            </tr>
                            <tr>
                                <td className='td' style={{ height: 30 }} colSpan="3">Previous Owner: {" " + data?.previous_owner}</td>
                                <td className='td' colSpan="2">Tax Effectivity: </td>
                            </tr>
                            <tr>
                                <td className='td' style={{ height: 30 }} colSpan="3">Previous Assessed Value: {" " + data?.previous_av}</td>
                                <td className='td' colSpan="2">Previous Market Value: {" " + data?.previous_mv} </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    );
});

export default DataToPdf;
