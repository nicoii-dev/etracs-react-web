import React, {useCallback, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { visuallyHidden } from '@mui/utils';

const EnhancedTableHead = (props) => {
  const { order, orderBy, onRequestSort, tableHead } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  const [tableHeadArray, setTableHeadArray] = useState([]);
  // create new array for table head
  const SetTableHead = useCallback(() => {
    const PropertyNames = Object.getOwnPropertyNames(tableHead[0]); //getting all property names in the array data
    let _tableHeadArray = [];
    let newObject = {};

    //adding action manually
    _tableHeadArray.push({
      id: 'action',
      numeric: false,
      disablePadding: true,
      label: 'ACTIONS',
    })

    for(let i = 0; i < PropertyNames.length; i++){
      if(PropertyNames[i] === 'id' || PropertyNames[i] === 'owner_id' || PropertyNames[i] === 'created_at' || PropertyNames[i] === 'updated_at' || 
      PropertyNames[i] === 'classification_id' || PropertyNames[i] === 'specific_class' || PropertyNames[i] === 'sub_class'){

      } else {
        newObject = {
          id: PropertyNames[i],
          numeric: true,
          disablePadding: false,
          label: PropertyNames[i].toLocaleUpperCase(),
        }
        _tableHeadArray.push(newObject)
      }

    }
    setTableHeadArray(_tableHeadArray);
  }, [tableHead]);


  useEffect(() => {
    if(tableHead?.length > 0){
      SetTableHead();
    }
    
  }, [SetTableHead, tableHead?.length])

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="normal">

        </TableCell>
        {tableHeadArray.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            style={{
              fontWeight:'bolder', 
              minWidth: headCell.id === "action" ? 20: 170,
            }}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label.replace("_", " ")}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;