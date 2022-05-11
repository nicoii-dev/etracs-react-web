import React, {useState} from 'react';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Typography
} from '@mui/material';

const user = {
    avatar: '/static/images/avatars/avatar_6.png',
    city: 'Los Angeles',
    country: 'USA',
    jobTitle: 'Senior Developer',
    name: 'Katarina Smith',
    timezone: 'GTM-7'
};

const AccountProfile = (props) => {
    const {userdata, setShowModal} = props;

    const fullName = userdata?.personnel[0]?.firstname + " " + userdata?.personnel[0]?.middlename?.charAt(0) + ". " + userdata?.personnel[0]?.lastname;
    const email = userdata?.user?.email;
    const phoneNumber = userdata?.personnel[0]?.phone_number;

    return (

        <Card>
            <CardContent>
                <Box
                    sx={{
                        alignItems: 'center',
                        display: 'flex',
                        flexDirection: 'column'
                    }}
                >
                    <Avatar
                        src={user.avatar}
                        sx={{
                            height: 64,
                            mb: 2,
                            width: 64
                        }}
                    />
                    <Typography
                        color="textPrimary"
                        gutterBottom
                        variant="h5"
                    >
                        {fullName}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {email}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {phoneNumber}
                    </Typography>
                </Box>
            </CardContent>
            <Divider />
            <CardActions>
                <Button
                    color="primary"
                    fullWidth
                    variant="text"
                    onClick={() => {setShowModal(true)}}
                >
                    Update Password
                </Button>
            </CardActions>
        </Card>
    )
}
export default AccountProfile;
