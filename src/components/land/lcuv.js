import React, {useCallback, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import { TableHead } from '@mui/material';

const data = [
    ["Gabby George", "Business Analyst", "Minneapolis", 30, "$100,000"],
    ["Aiden Lloyd", "Business Consultant", "Dallas", 55, "$200,000"],
    ["Jaden Collins", "Attorney", "Santa Ana", 27, "$500,000"],
    ["Franky Rees", "Business Analyst", "St. Petersburg", 22, "$50,000"],
    ["Aaren Rose", "Business Consultant", "Toledo", 28, "$75,000"],
    ["Blake Duncan", "Business Management Analyst", "San Diego", 65, "$94,000"],
    ["Frankie Parry", "Agency Legal Counsel", "Jacksonville", 71, "$210,000"],
    ["Lane Wilson", "Commercial Specialist", "Omaha", 19, "$65,000"],
    ["Robin Duncan", "Business Analyst", "Los Angeles", 20, "$77,000"],
    ["Mel Brooks", "Business Consultant", "Oklahoma City", 37, "$135,000"],
    ["Harper White", "Attorney", "Pittsburgh", 52, "$420,000"],
    ["Kris Humphrey", "Agency Legal Counsel", "Laredo", 30, "$150,000"],
    ["Frankie Long", "Industrial Analyst", "Austin", 31, "$170,000"],
    ["Brynn Robbins", "Business Analyst", "Norfolk", 22, "$90,000"],
    ["Justice Mann", "Business Consultant", "Chicago", 24, "$133,000"],
    ["Addison Navarro", "Business Management Analyst", "New York", 50, "$295,000"],
    ["Jesse Welch", "Agency Legal Counsel", "Seattle", 28, "$200,000"],
    ["Eli Mejia", "Commercial Specialist", "Long Beach", 65, "$400,000"],
    ["Gene Leblanc", "Industrial Analyst", "Hartford", 34, "$110,000"],
    ["Danny Leon", "Computer Scientist", "Newark", 60, "$220,000"],
    ["Lane Lee", "Corporate Counselor", "Cincinnati", 52, "$180,000"],
    ["Jesse Hall", "Business Analyst", "Baltimore", 44, "$99,000"],
    ["Danni Hudson", "Agency Legal Counsel", "Tampa", 37, "$90,000"],
    ["Terry Macdonald", "Commercial Specialist", "Miami", 39, "$140,000"],
    ["Justice Mccarthy", "Attorney", "Tucson", 26, "$330,000"],
    ["Silver Carey", "Computer Scientist", "Memphis", 47, "$250,000"],
    ["Franky Miles", "Industrial Analyst", "Buffalo", 49, "$190,000"],
    ["Glen Nixon", "Corporate Counselor", "Arlington", 44, "$80,000"],
    ["Gabby Strickland", "Business Process Consultant", "Scottsdale", 26, "$45,000"],
    ["Mason Ray", "Computer Scientist", "San Francisco", 39, "$142,000"]
  ];

const LCUV = () => {

    return(
        <Box sx={{ width: '100%' }}>
            <Paper sx={{ width: '100%', mb: 2 }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell align='left'>Code</TableCell>
                                <TableCell align='left'>Name</TableCell>
                                <TableCell align='left'>Fix?</TableCell>
                                <TableCell align='right'>Rate (%)</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => {
                                //const isItemSelected = isSelected(row.id);
                                return(
                                    <TableRow
                                        hover
                                        onClick={(event) => {console.log(row.id)}}
                                        role="checkbox"
                                        tabIndex={-1}
                                        key={row.id}
                                    >
                                        <TableCell align='left'>LWD</TableCell>
                                        <TableCell align='left'>Local Water District Water District</TableCell>
                                        <TableCell padding="checkbox">
                                            <Checkbox />
                                        </TableCell>
                                        <TableCell align='right'>
                                            <TextField
                                                id="standard-size-small"
                                                defaultValue=""
                                                size="small"
                                                variant="standard"
                                                type="number"
                                                inputProps={{min: 0, style: { textAlign: 'center' }}}
                                                style={{width:50}}
                                            />
                                        </TableCell>
                                    </TableRow>
                                )
                            })}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    )
}

export default LCUV;