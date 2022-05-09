import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";

// components
import IndividualTable from "../../components/table/entity/individual-table";
import AddIndividual from "../../components/entity/individual/add-individual";

// redux
import {
  fetchIndividualRedux,
  storeIndividualRedux,
  updateIndividualRedux,
  deleteIndividualRedux,
  deleteMultipleIndividualRedux,
} from "../../redux/individual/actions";

const IndividualPage = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.navStatus.status);
  const individualList = useSelector(
    (state) => state.individualData.individuals
  );
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectedToDelete, setSelectedToDelete] = useState(false);

  useEffect(() => {
    dispatch(fetchIndividualRedux());
  }, [dispatch]);

  // triggers for selected to delete/multiple delete
  useEffect(() => {
    setSelected([]);
  }, [individualList]);

  const addData = async (_data) => {
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
      weight: _data.weight,
    };
    const response = await dispatch(storeIndividualRedux(payload))
    if (response !== 200) {
      return;
    }
    setOpen(!open)
  };

  const updateData = (_data) => {
    Swal.fire({
      title: "Do you want to update this data?",
      //showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Update",
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
          weight: _data.weight,
        };
        const response = await dispatch(updateIndividualRedux(payload, _data.id));
        if (response !== 200) {
          return;
        }
        setOpen(!open)
      }
    });
  };

  const deleteData = async () => {
    if (selectedToDelete.length > 1) {
      await dispatch(
        deleteMultipleIndividualRedux({ ids: selectedToDelete.toString() })
      );
    } else {
      await dispatch(deleteIndividualRedux(selectedToDelete.toString()));
    }
  };

  return (
    <>
      <h2 style={{ fontFamily: "-moz-initial" }}>Individual Page</h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 10,
        }}
      >
        <Button
          variant="contained"
          style={{ color: "white" }}
          onClick={() => {
            setData(null);
            setOpen(!open);
          }}
        >
          Add Individual
        </Button>
      </div>

      <div>
        <IndividualTable
          individualList={individualList}
          data={data}
          setData={setData}
          open={open}
          setOpen={setOpen}
          selected={selected}
          setSelected={setSelected}
          setSelectedToDelete={setSelectedToDelete}
          deleteData={deleteData}
        />
      </div>

      <Modal
        isOpen={open}
        onRequestClose={() => {
          setOpen(!open);
        }}
        contentLabel="Example Modal"
        onClose={() => setOpen(!open)}
        ariaHideApp={false}
        style={{
          content: {
            top: "55%",
            marginLeft: !status ? "50%" : "58%",
            transform: "translate(-50%, -50%)",
            width: !status ? "80%" : "73%",
            height: "75%",
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
