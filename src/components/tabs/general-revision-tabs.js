import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@material-ui/lab/TabContext";
import TabList from "@material-ui/lab/TabList";
import TabPanel from "@material-ui/lab/TabPanel";

const GeneralRevisionTabs = (props) => {
    const { tabData } = props;
    const [value, setValue] = React.useState("1");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
              {tabData.map((_tab) => {
                  return (
                    <Tab label={_tab.title} value={_tab.id} key={_tab.id}/>
                  )
              })}
          </TabList>
        </Box>        
            {tabData.map((_tab) => {
                return (
                    <TabPanel value={_tab.id} key={_tab.id}>
                        {_tab.tab}
                    </TabPanel>
                )
            })}   
      </TabContext>
    </Box>
  );
}

export default GeneralRevisionTabs;