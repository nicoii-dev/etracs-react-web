import React, {useState, useEffect, useCallback} from 'react';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import Fade from '@mui/material/Fade';
import {Box} from '@mui/material';
import Swal from 'sweetalert2';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

// components
import IndividualTable from '../../components/table/entity/individual-table';
import AddIndividual from '../../components/entity/individual/add-individual';
// api
import IndividualApi from '../../library/api/individual-api';

// styles
import ModalStyles from '../../styles/modal';

const IndividualPage = () => {
    const individuals = useSelector(state => state.individualData.individuals);
    const status = useSelector(state => state.navStatus.status)
    const [individual, setIndividual] = useState();
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);

    const setIndividualData = () => {
      setIndividual(...individuals)
    }
    useEffect(() => {
      setIndividualData()
    }, [setIndividualData])

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
            firstname: _data.firstName,
            middlename: _data.middleName,
            lastname: _data.lastName,
            email: _data.email,
            phone_number: _data.phoneNumber,
            birth_date: _data.birthdate,
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
              console.log(_individual)
              Swal.fire('Saved!', '', 'success');
              // setIndividual(_individual)
              setOpen(!open);
            } catch (error) {
                console.log(error.message);
            }
          
        } 
      })
  }

  const updateData = (_data) => {
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
          firstname: _data.firstName,
          middlename: _data.middleName,
          lastname: _data.lastName,
          email: _data.email,
          phone_number: _data.phoneNumber,
          birth_date: _data.birthdate,
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
            console.log(_individual)
            Swal.fire('Saved!', '', 'success');
            // setIndividual(_individual)
            setOpen(!open);
          } catch (error) {
              console.log(error.message);
          }
        
      } 
    })
}
    return (
        <div style={{marginTop:'5%'}}>
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
                  // top: '50%',
                  // left: '50%',
                  // right: 'auto',
                  // bottom: 'auto',
                  top: '55%',
                  marginLeft: !status ? '50%' : '58%',
                  transform: 'translate(-50%, -50%)',
                  width: !status ? '80%' : '73%',
                  height:'75%'
                },
              }}
            >
            {/* <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={() => setOpen(!open)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
                overflow='scroll'   
                style={{zIndex: 1001}}
            > */}
                  <AddIndividual
                      data={data}
                      setData={setData}
                      addData={addData}
                  />

            </Modal>
        </div>
    );  
};

export default IndividualPage;