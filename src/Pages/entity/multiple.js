import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Modal from "react-modal";
import Swal from "sweetalert2";
import { useSelector, useDispatch } from "react-redux";

// components
import MultipleTable from "../../components/table/entity/multiple-table";
import AddMultiple from "../../components/entity/multiple/add-multiple";

// api
import {
  fetchMultipleRedux,
  storeMultipleRedux,
  updateMultipleRedux,
  deleteMultipleRedux,
  deleteMultipleMultipleRedux,
} from "../../redux/multiple/actions";

const MultiplePage = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.navStatus.status);
  const multipleList = useSelector((state) => state.multipleData.multiples);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);
  const [selectedToDelete, setSelectedToDelete] = useState(false);

  useEffect(() => {
    dispatch(fetchMultipleRedux());
  }, [dispatch]);

  // triggers for selected to delete/multiple delete
  useEffect(() => {
    setSelected([]);
  }, [multipleList]);

  const addData = async (_data) => {
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
      remarks: _data.remarks,
    };
    await dispatch(storeMultipleRedux(payload));
    setOpen(!open);
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
          multiple_name: _data.multipleName,
          email: _data.email,
          contact_number: _data.contactNumber,
          house_number: _data.houseNumber,
          street: _data.street,
          barangay: _data.barangay,
          city_municipality: _data.cityMunicipality,
          zipcode: _data.zipCode,
          remarks: _data.remarks,
        };
        await dispatch(updateMultipleRedux(payload, _data.id));
        setOpen(!open);
      }
    });
  };

  const deleteData = async () => {
    if (selectedToDelete.length > 1) {
      await dispatch(
        deleteMultipleMultipleRedux({ ids: selectedToDelete.toString() })
      );
    } else {
      await dispatch(deleteMultipleRedux(selectedToDelete.toString()));
    }
  };

  return (
    <>
      <h2 style={{ fontFamily: "-moz-initial" }}>Multiple Page</h2>
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
          Add Multiple
        </Button>
      </div>

      <div>
        <MultipleTable
          multipleList={multipleList}
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
        <AddMultiple data={data} addData={addData} updateData={updateData} />
      </Modal>
    </>
  );
};

export default MultiplePage;
