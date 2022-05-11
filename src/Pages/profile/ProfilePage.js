import React, {useState} from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import Modal from "react-modal";
import Swal from "sweetalert2";
import { useSelector } from 'react-redux';

import AccountProfileDetails from '../../components/profile/AccountProfileDetails';
import AccountProfile from '../../components/profile/AccountProfile';
import ChangePassword from '../../components/profile/ChangePassword';

const ProfilePage = () => {

    const userdata = JSON.parse(localStorage?.getItem("user"));
    const status = useSelector((state) => state.navStatus.status);
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 8
                }}
            >
                <Container maxWidth="lg">
                    <Typography
                        sx={{ mb: 3 }}
                        variant="h4"
                    >
                        Profile
                    </Typography>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            lg={4}
                            md={6}
                            xs={12}
                        >
                            <AccountProfile userdata={userdata} setShowModal={setShowModal} />
                        </Grid>
                        <Grid
                            item
                            lg={8}
                            md={6}
                            xs={12}
                        >
                            <AccountProfileDetails userdata={userdata} />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Modal
                isOpen={showModal}
                onRequestClose={() => {
                    Swal.fire({
                        title: 'Discard changes?',
                        showCancelButton: true,
                        confirmButtonText: 'Yes',
                        denyButtonText: `Cancel`,
                    }).then((result) => {
                        /* Read more about isConfirmed, isDenied below */
                        if (result.isConfirmed) {
                            setShowModal(!showModal);
                        } else if (result.isDenied) {
                            Swal.fire('Changes are not saved', '', 'info')
                        }
                    })
                }}
                contentLabel="Example Modal"
                //onClose={() => setShowModal(!showModal)}
                ariaHideApp={false}
                style={{
                    content: {
                        top: "40%",
                        marginLeft: !status ? "45%" : "53%",
                        transform: "translate(-50%, -50%)",
                        width: !status ? "25%" : "25%",
                        height: "55%",
                    },
                    overlay: {
                        zIndex: 1,
                    },
                }}
            >
                <ChangePassword 
                    userdata={userdata}
                    setShowModal={setShowModal}
                />
            </Modal>
        </>
    )
}

export default ProfilePage;
