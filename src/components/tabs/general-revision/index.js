import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";


const GeneralRevisionTabs = ({
    tabValues
}) => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Assessment Levels" value="1" />
            <Tab label="LCUV" value="2" />
            <Tab label="Land Adjustment" value="3" />
            <Tab label="Applied to the following LGUs" value="4" />
          </TabList>
        </Box>
        <TabPanel value="1">Item 1One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
        {/* {tabValues.map((item, key) => {
            <TabPanel value={key}>{item}</TabPanel>
        })} */}
      </TabContext>
    </Box>
  );
}

export default GeneralRevisionTabs;