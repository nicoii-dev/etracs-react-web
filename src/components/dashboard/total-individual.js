import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import { Person } from '@material-ui/icons';

export const TotalIndividual = (props) => (
    <Card
        sx={{ height: '100%' }}
        {...props}
    >
        <CardContent>
            <Grid
                container
                spacing={3}
                sx={{ justifyContent: 'space-between' }}
            >
                <Grid item>
                    <Typography
                        color="textSecondary"
                        gutterBottom
                        variant="overline"
                    >
                        TOTAL INDIVIDUALS
                    </Typography>
                    <Typography
                        color="textPrimary"
                        variant="h4"
                        style={{ textAlign: 'right' }}
                    >
                        {props?.individuallist?.length}
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar
                        sx={{
                            backgroundColor: '#c62828',
                            height: 56,
                            width: 56
                        }}
                    >
                        <Person />
                    </Avatar>
                </Grid>
            </Grid>
            <Box sx={{ pt: 3 }}>
                <LinearProgress
                    value={0}
                    variant="determinate"
                />
            </Box>
        </CardContent>
    </Card>
);