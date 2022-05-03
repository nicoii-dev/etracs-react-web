import { Avatar, Box, Card, CardContent, Grid, LinearProgress, Typography } from '@mui/material';
import { Group } from '@material-ui/icons';

export const TotalMultiple = (props) => (
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
                        TOTAL MULTIPLES
                    </Typography>
                    <Typography
                        color="textPrimary"
                        variant="h4"
                        style={{ textAlign: 'right' }}
                    >
                        {props?.multiplelist?.length}
                    </Typography>
                </Grid>
                <Grid item>
                    <Avatar
                        sx={{
                            backgroundColor: '#0277bd',
                            height: 56,
                            width: 56
                        }}
                    >
                        <Group />
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