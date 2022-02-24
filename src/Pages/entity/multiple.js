import React, {useState, useEffect, useCallback} from 'react';
import Button from '@mui/material/Button';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';

// components
import MultipleTable from '../../components/table/entity/multiple-table';
import AddMultiple from '../../components/entity/multiple/add-multiple';

// api
import MultipleApi from '../../library/api/multiple-api';

const MultiplePage = () => {

    const status = useSelector(state => state.navStatus.status)
    const [multiple, setMultiple] = useState();
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedToDelete, setSelectedToDelete] = useState(false);

    const getMultiple = useCallback(async () => {
        try {
          const _multiple = await MultipleApi.getMultiple();
          if(_multiple === '422' || _multiple === '500' || _multiple === '404'){
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'No database connection!',
            })
            return;
          } else {
            setMultiple(_multiple)         
          }
        } catch (error) {
            console.log(error.message);
        }
      }, [])
      useEffect(() => {
          getMultiple()
      }, [getMultiple])

      const addData = (_data) => {
          console.log(_data)
        Swal.fire({
            title: 'Do you want to save this data?',
            //showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
          }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              const payload = {
                account_number: _data.accountNumber,
                multiple_name: _data.multipleName,
                email: _data.email,
                contact_number: _data.contactNumber,
                house_number: _data.houseNumber,
                street: _data.street,
                barangay: _data.barangay,
                city_municipality: _data.cityMunicipality,
                zipcode: _data.zipCode,
                remarks: _data.remarks
              }
                try {
                  const _multiple = await MultipleApi.storeMultiple(payload);
                  if(_multiple === '422' || _multiple === '500' || _multiple === '404'){
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'Something went wrong!',
                    })
                    return;
                  }
                  setMultiple(_multiple) //updating the tables data
                  setOpen(!open);
                  Swal.fire('Saved!', '', 'success');
                } catch (error) {
                    console.log(error.message);
                }
              
            } 
          })
      }
    
      const updateData = (_data) => {
        console.log(_data)
        Swal.fire({
            title: 'Do you want to update this data?',
            //showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Update',
          }).then(async (result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              const payload = {
                account_number: _data.accountNumber,
                multiple_name: _data.multipleName,
                email: _data.email,
                contact_number: _data.contactNumber,
                house_number: _data.houseNumber,
                street: _data.street,
                barangay: _data.barangay,
                city_municipality: _data.cityMunicipality,
                zipcode: _data.zipCode,
                remarks: _data.remarks
              }
                try {
                  const _multiple = await MultipleApi.updateMultiple(payload, _data.id);
                  if(_multiple === '422' || _multiple === '500' || _multiple === '404'){
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'Something went wrong!',
                    })
                    return;
                  }
                  setMultiple(_multiple)
                  setOpen(!open);
                  Swal.fire('Updated!', '', 'success');
                } catch (error) {
                    console.log(error.message);
                }
              
            } 
          })
      }
    
      const deleteData = (setSelected) => {
        if(selectedToDelete.length > 1) {
          Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
          }).then(async (result) => {
              if (result.isConfirmed) {
                  
                  try {
                      const _multiple = await MultipleApi.multipleDeleteMultiple({ids:selectedToDelete.toString()});
                      setMultiple(_multiple) //updating the tables data
                      Swal.fire(
                          'Deleted!',
                          'Data has been deleted.',
                          'success'
                      )
                      return setSelected([]) //to set the selected data to zero after deleting the selected
                  } catch (error) {
                      console.log(error.message);
                      Swal.fire({
                          icon: 'error',
                          title: 'Oops...',
                          text: 'Something went wrong!',
                      })
                  }
    
              }
          })
        } else {
          Swal.fire({
              title: 'Are you sure?',
              text: "You won't be able to revert this!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Yes, delete it!'
          }).then(async (result) => {
              if (result.isConfirmed) {
                  try {
                      const _multiple = await MultipleApi.deleteMultiple(selectedToDelete.toString());
                      setMultiple(_multiple)
                      Swal.fire(
                          'Deleted!',
                          'Data has been deleted.',
                          'success'
                      )
                     return setSelected([]) //to set the selected data to zero after deleting the selected
                  } catch (error) {
                      console.log(error.message);
                      Swal.fire({
                          icon: 'error',
                          title: 'Oops...',
                          text: 'Something went wrong!',
                      })
                  }
    
              }
          })
        }
      }      

    return (
        <>
            <h2 style={{fontFamily:'-moz-initial'}}>Multiple Page</h2>
            <div style={{width:'100%', display:'flex', justifyContent:'flex-end', marginBottom: 10}}>
                <Button 
                    variant="contained" 
                    style={{color:'white'}} 
                    onClick={() => {
                        setData(null);
                        setOpen(!open)
                    }}>
                    Add Multiple
                </Button>
            </div>

            <div>
                <MultipleTable 
                    multiple={multiple}
                    data={data}
                    setData={setData}
                    open={open}
                    setOpen={setOpen}
                    setSelectedToDelete={setSelectedToDelete}
                    deleteData={deleteData}
                />
            </div>

            <Modal
                isOpen={open}
                onRequestClose={() => {setOpen(!open)}}
                contentLabel="Example Modal"
                onClose={() => setOpen(!open)}
                ariaHideApp={false}
                style={{
                    content: {
                    top: '55%',
                    marginLeft: !status ? '50%' : '58%',
                    transform: 'translate(-50%, -50%)',
                    width: !status ? '80%' : '73%',
                    height:'75%'
                    },
                }}
            >
                <AddMultiple
                    data={data}
                    setData={setData}
                    addData={addData}
                    updateData={updateData}
                />

            </Modal>
        </>
    );  
};

export default MultiplePage;