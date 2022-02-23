import React, {useState, useEffect, useCallback} from 'react';
import Button from '@mui/material/Button';
import Swal from 'sweetalert2';
import Modal from 'react-modal';
import {useSelector} from 'react-redux';

// components
import IndividualTable from '../../components/table/entity/individual-table';
import AddIndividual from '../../components/entity/individual/add-individual';
// api
import IndividualApi from '../../library/api/individual-api';

// redux


const IndividualPage = () => {

    const status = useSelector(state => state.navStatus.status)
    const [individual, setIndividual] = useState();
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);
    const [selectedToDelete, setSelectedToDelete] = useState(false);

    const getIndividuals = useCallback(async () => {
      try {
        const _individual = await IndividualApi.getIndividuals();
        setIndividual(_individual)
        //console.log(_individual)
      } catch (error) {
          console.log(error.message);
      }
    }, [])
    useEffect(() => {
      getIndividuals()
    }, [getIndividuals])

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
            firstname: _data.firstName,
            middlename: _data.middleName,
            lastname: _data.lastName,
            email: _data.email,
            phone_number: _data.phoneNumber,
            birth_date: _data.birthDate,
            place_of_birth: _data.placeOfBirth,
            citizenship: _data.citizenship,
            gender: _data.gender,
            civil_status: _data.civilStatus,
            house_number: _data.houseNumber,
            street: _data.street,
            barangay: _data.barangay,
            city_municipality: _data.cityMunicipality,
            zipcode: _data.zipCode,
            profession: _data.profession,
            id_presented: _data.idPresented,
            tin: _data.tin,
            sss: _data.sss,
            height: _data.height,
            weight: _data.weight
          }
            try {
              const _individual = await IndividualApi.storeIndividual(payload);
              if(_individual === '422' || _individual === '500' || _individual === '404'){
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong!',
                })
                return;
              }
              setIndividual(_individual) //updating the tables data
              //setLoad(true);
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
            firstname: _data.firstName,
            middlename: _data.middleName,
            lastname: _data.lastName,
            email: _data.email,
            phone_number: _data.phoneNumber,
            birth_date: _data.birthDate,
            place_of_birth: _data.placeOfBirth,
            citizenship: _data.citizenship,
            gender: _data.gender,
            civil_status: _data.civilStatus,
            house_number: _data.houseNumber,
            street: _data.street,
            barangay: _data.barangay,
            city_municipality: _data.cityMunicipality,
            zipcode: _data.zipCode,
            profession: _data.profession,
            id_presented: _data.idPresented,
            tin: _data.tin,
            sss: _data.sss,
            height: _data.height,
            weight: _data.weight
          }
            try {
              const _individual = await IndividualApi.updateIndividual(payload, _data.id);
              if(_individual === '422' || _individual === '500' || _individual === '404'){
                Swal.fire({
                  icon: 'error',
                  title: 'Oops...',
                  text: 'Something went wrong!',
                })
                return;
              }
              setIndividual(_individual)
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
                  const _individual = await IndividualApi.multipleDeleteIndividual({ids:selectedToDelete.toString()});
                  setIndividual(_individual) //updating the tables data
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
                  const _individual = await IndividualApi.deleteIndividual(selectedToDelete.toString());
                  setIndividual(_individual)
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
            <h2 style={{fontFamily:'-moz-initial'}}>Individual Page</h2>
            <div style={{width:'100%', display:'flex', justifyContent:'flex-end', marginBottom: 10}}>
                <Button 
                    variant="contained" 
                    style={{color:'white'}} 
                    onClick={() => {
                        setData(null);
                        setOpen(!open)
                    }}>
                    Add Individual
                </Button>
            </div>

            <div>
                <IndividualTable 
                    individual={individual}
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
                  <AddIndividual
                      data={data}
                      setData={setData}
                      addData={addData}
                      updateData={updateData}
                  />

            </Modal>
        </>
    );  
};

export default IndividualPage;