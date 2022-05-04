import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Box, Button, Card, CardContent, CardHeader, Divider, useTheme, Menu, MenuItem, TextField } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import BarChart from 'react-bar-chart';
import "./BarChart.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChartComponent = (props) => {
  const { faaslist } = props;
  const theme = useTheme();

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    xAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: theme.palette.text.secondary,
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: theme.palette.divider,
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: theme.palette.divider
        }
      }
    ],
    tooltips: {
      backgroundColor: theme.palette.background.paper,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [year, setYear] = React.useState("");
  const [yearList, setYearList] = React.useState([]);
  const [status, setStatus] = React.useState("");
  const open = Boolean(anchorEl);

  const generateArrayOfYears = () => {
    let max = new Date().getFullYear()
    let min = max - 22
    let years = []

    for (let i = max; i >= min; i--) {
      years.push({ "year": i })
    }
    return years
  }

  React.useEffect(() => {
    setYearList(generateArrayOfYears())
  }, [])
  const [data, setData] = React.useState([
    { text: 'Jan', value: 500 },
    { text: 'Feb', value: 300 },
    { text: 'Mar', value: 500 },
    { text: 'Apr', value: 300 },
    { text: 'May', value: 500 },
    { text: 'Jun', value: 300 },
    { text: 'Jul', value: 500 },
    { text: 'Aug', value: 300 },
    { text: 'Sep', value: 500 },
    { text: 'Oct', value: 300 },
    { text: 'Nov', value: 500 },
    { text: 'Dec', value: 300 },
  ])

  const margin = { top: 20, right: 20, bottom: 50, left: 50 };

  const onChangeYear = (e) => {
    let jan = 0;
    let feb = 0;
    let mar = 0;
    let apr = 0;
    let may = 0;
    let jun = 0;
    let jul = 0;
    let aug = 0;
    let sep = 0;
    let oct = 0;
    let nov = 0;
    let dec = 0;
    setYear(e)

    // filtering based on year
    const filteredYear = faaslist?.filter((faas) => {
      return faas.issue_date.substr(0, faas.issue_date.indexOf('-')) === e
    })
    // filtering based on status
    const filtereStatus = filteredYear?.filter((faas) => {
      return faas.status === status
    })

    filtereStatus.map((myList) => {
      let monthDay = myList.issue_date.substring(myList.issue_date.indexOf('-') + 1)
      switch (monthDay.substr(0, monthDay.indexOf('-'))) {
        case "01":
          jan = jan + 1
          break;
        case "02":
          feb = feb + 1
          break;
        case "03":
          mar = mar + 1
          break;
        case "04":
          apr = apr + 1
          break;
        case "05":
          may = may + 1
          break;
        case "06":
          jun = jun + 1
          break;
        case "07":
          jul = jul + 1
          break;
        case "08":
          aug = aug + 1
          break;
        case "09":
          sep = sep + 1
          break;
        case "10":
          oct = oct + 1
          break;
        case "11":
          nov = nov + 1
          break;
        case "12":
          dec = dec + 1
          break;
        default:
          break;
      }
    });
    setData([
      { text: 'Jan', value: jan },
      { text: 'Feb', value: feb },
      { text: 'Mar', value: mar },
      { text: 'Apr', value: apr },
      { text: 'May', value: may },
      { text: 'Jun', value: jun },
      { text: 'Jul', value: jul },
      { text: 'Aug', value: aug },
      { text: 'Sep', value: sep },
      { text: 'Oct', value: oct },
      { text: 'Nov', value: nov },
      { text: 'Dec', value: dec },
    ])
  }

  const onStatusChange = (e) => {
    let jan = 0;
    let feb = 0;
    let mar = 0;
    let apr = 0;
    let may = 0;
    let jun = 0;
    let jul = 0;
    let aug = 0;
    let sep = 0;
    let oct = 0;
    let nov = 0;
    let dec = 0;
    setStatus(e)
    // filtering based on year
    const filteredYear = faaslist?.filter((faas) => {
      return faas.issue_date.substr(0, faas.issue_date.indexOf('-')) === year
    })
    // filtering based on status
    const filtereStatus = filteredYear?.filter((faas) => {
      return faas.status === e
    })

    filtereStatus.map((myList) => {
      let monthDay = myList.issue_date.substring(myList.issue_date.indexOf('-') + 1)
      switch (monthDay.substr(0, monthDay.indexOf('-'))) {
        case "01":
          jan = jan + 1
          break;
        case "02":
          feb = feb + 1
          break;
        case "03":
          mar = mar + 1
          break;
        case "04":
          apr = apr + 1
          break;
        case "05":
          may = may + 1
          break;
        case "06":
          jun = jun + 1
          break;
        case "07":
          jul = jul + 1
          break;
        case "08":
          aug = aug + 1
          break;
        case "09":
          sep = sep + 1
          break;
        case "10":
          oct = oct + 1
          break;
        case "11":
          nov = nov + 1
          break;
        case "12":
          dec = dec + 1
          break;
        default:
          break;
      }
    });
    setData([
      { text: 'Jan', value: jan },
      { text: 'Feb', value: feb },
      { text: 'Mar', value: mar },
      { text: 'Apr', value: apr },
      { text: 'May', value: may },
      { text: 'Jun', value: jun },
      { text: 'Jul', value: jul },
      { text: 'Aug', value: aug },
      { text: 'Sep', value: sep },
      { text: 'Oct', value: oct },
      { text: 'Nov', value: nov },
      { text: 'Dec', value: dec },
    ])
  }


  return (
    <Card {...props}>
      <CardHeader title="F A A S Details" />
      <div style={{ alignSelf: 'flex-end', flexDirection: 'row', width: 300, marginLeft: 10 }}>
        <TextField
          fullWidth
          label="STATUS*"
          name="status"
          select
          SelectProps={{ native: true }}
          variant="outlined"

          onChange={(e) => onStatusChange(e.target.value)}
          size='small'
          value={status}
        >
          <option key={'INTERIM'} value={'INTERIM'}>INTERIM</option>
          <option key={'CURRENT'} value={'CURRENT'}>CURRENT</option>
          <option key={'FOR APPROVAL'} value={'FOR APPROVAL'}>FOR APPROVAL</option>
          <option key={'APPROVED'} value={'APPROVED'}>APPROVED</option>
          <option key={'CANCELLED'} value={'CANCELLED'}>CANCELLED</option>
        </TextField>
        <TextField
          fullWidth
          label="RANGE OPTION*"
          name="range"
          select
          SelectProps={{ native: true }}
          variant="outlined"
          style={{ marginTop: 10, marginBottom: 10 }}
          onChange={(e) => onChangeYear(e.target.value)}
          size='small'
          value={year}
        >
          {yearList?.map((option) => (
            <option key={option.year} value={option.year}>
              {option.year}
            </option>
          ))}
        </TextField>
      </div>
      <Divider />
      <CardContent>
        <Box
          sx={{
            height: 400,
            position: 'relative'
          }}
        >
          {/* <Bar
          data={data}
          options={options}
        /> */}
          <BarChart
            // ylabel='Quantity'
            width={1500}
            height={500}
            margin={margin}
            data={data}
          //onBarClick={this.handleBarClick}
          />
        </Box>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
        >
          {/* Overview */}
        </Button>
      </Box>
    </Card>
  );
}

export default BarChartComponent;