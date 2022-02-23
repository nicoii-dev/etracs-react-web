import React, {useState, useEffect, useCallback} from 'react';
import Button from '@mui/material/Button';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';

// components
import JuridicalTable from '../../components/table/entity/juridical-table';
import AddJuridical from '../../components/entity/juridical/add-juridical';
// api
import JuridicalApi from '../../library/api/juridical-api';

const JuridicalPage = () => {

    const status = useSelector(state => state.navStatus.status)
    const [juridical, setJuridical] = useState();
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedToDelete, setSelectedToDelete] = useState(false);

    const getJuridicals = useCallback(async () => {
      try {
        const _juridical = await JuridicalApi.getJuridical();
        setJuridical(_juridical)
      } catch (error) {
          console.log(error.message);
      }
    }, [])
    useEffect(() => {
        getJuridicals()
    }, [getJuridicals])

    const addData = (_data) => {
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
                juridical_name: _data.juridicalName,
                email: _data.email,
                contact_number: _data.contactNumber,
                house_number: _data.houseNumber,
                street: _data.street,
                barangay: _data.barangay,
                city_municipality: _data.cityMunicipality,
                zipcode: _data.zipCode,
                date_registered: _data.dateRegistered,
                kind_of_organization: _data.kindOfOrganization,
                tin: _data.tin,
                nature_of_business: _data.natureOfBusiness,
                remarks: _data.remarks
              }
                try {
                  const _juridical = await JuridicalApi.storeJuridical(payload);
                  if(_juridical === '422' || _juridical === '500' || _juridical === '404'){
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'Something went wrong!',
                    })
                    return;
                  }
                  setJuridical(_juridical) //updating the tables data
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
                juridical_name: _data.juridicalName,
                email: _data.email,
                contact_number: _data.contactNumber,
                house_number: _data.houseNumber,
                street: _data.street,
                barangay: _data.barangay,
                city_municipality: _data.cityMunicipality,
                zipcode: _data.zipCode,
                date_registered: _data.dateRegistered,
                kind_of_organization: _data.kindOfOrganization,
                tin: _data.tin,
                nature_of_business: _data.natureOfBusiness,
                remarks: _data.remarks
              }
                try {
                  const _juridical = await JuridicalApi.updateJuridical(payload, _data.id);
                  if(_juridical === '422' || _juridical === '500' || _juridical === '404'){
                    Swal.fire({
                      icon: 'error',
                      title: 'Oops...',
                      text: 'Something went wrong!',
                    })
                    return;
                  }
                  setJuridical(_juridical)
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
                      const _juridical = await JuridicalApi.multipleDeleteJuridical({ids:selectedToDelete.toString()});
                      setJuridical(_juridical) //updating the tables data
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
                      const _juridical = await JuridicalApi.deleteJuridical(selectedToDelete.toString());
                      setJuridical(_juridical)
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
            <h2 style={{fontFamily:'-moz-initial'}}>Juridical Page</h2>
            <div style={{width:'100%', display:'flex', justifyContent:'flex-end', marginBottom: 10}}>
                <Button 
                    variant="contained" 
                    style={{color:'white'}} 
                    onClick={() => {
                        setData(null);
                        setOpen(!open)
                    }}>
                    Add Juridical
                </Button>
            </div>

            <div>
                <JuridicalTable 
                    juridical={juridical}
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
                <AddJuridical
                    data={data}
                    setData={setData}
                    addData={addData}
                    updateData={updateData}
                />

            </Modal>
        </>
    );  
};

export default JuridicalPage;