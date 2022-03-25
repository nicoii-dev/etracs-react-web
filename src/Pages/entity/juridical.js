import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";

// components
import JuridicalTable from "../../components/table/entity/juridical-table";
import AddJuridical from "../../components/entity/juridical/add-juridical";

// redux
import {
  fetchJuridicalRedux,
  storeJuridicalRedux,
  updateJuridicalRedux,
  deleteJuridicalRedux,
  deleteMultipleJuridicalRedux,
} from "../../redux/juridical/actions";

const JuridicalPage = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.navStatus.status);
  const juridicalList = useSelector((state) => state.juridicalData.juridicals);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectedToDelete, setSelectedToDelete] = useState(false);

  useEffect(() => {
    dispatch(fetchJuridicalRedux());
  }, [dispatch]);

    // triggers for selected to delete/multiple delete
    useEffect(() => {
      setSelected([]);
    }, [juridicalList]);

  const addData = async (_data) => {
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
      remarks: _data.remarks,
    };
    await dispatch(storeJuridicalRedux(payload))
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
          remarks: _data.remarks,
        };
        await dispatch(updateJuridicalRedux(payload, _data.id))
        setOpen(!open);
      }
    });
  };

  const deleteData = async () => {
    if (selectedToDelete.length > 1) {
      await dispatch(
        deleteMultipleJuridicalRedux({ ids: selectedToDelete.toString() })
      );
    } else {
      await dispatch(deleteJuridicalRedux(selectedToDelete.toString()));
    }
  };

  return (
    <>
      <h2 style={{ fontFamily: "-moz-initial" }}>Juridical Page</h2>
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
          Add Juridical
        </Button>
      </div>

      <div>
        <JuridicalTable
          juridicalList={juridicalList}
          data={data}
          setData={setData}
          open={open}
          setOpen={setOpen}
          setSelectedToDelete={setSelectedToDelete}
          deleteData={deleteData}
          selected={selected}
          setSelected={setSelected}
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
