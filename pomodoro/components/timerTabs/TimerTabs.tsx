import React from "react";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from "@material-ui/core/Container";
import { v4 as uuid4 } from "uuid";
import { ITabPanelProps, TTimerTabProps } from "../../types";
import useStyles from "./timerTabs.styles";

function TabPanel(props: ITabPanelProps) {
  const { children, value, index, className, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
      className={className}
    >
      {value === index && children}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const TimerTabs: React.FC<TTimerTabProps> = ({ items }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Container maxWidth="md" className={classes.root}>
      <AppBar position="static" className={classes.appbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="primary"
          variant="fullWidth"
        >
          {items.map(({ tabLabel }, index) => (
            <Tab label={tabLabel} {...a11yProps(index)} key={uuid4()} />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        className={classes.swipeableViews}
      >
        {items.map(({ children }, index) => (
          <TabPanel
            value={value}
            index={index}
            dir={theme.direction}
            key={uuid4()}
            className={classes.tabPanel}
          >
            {children}
          </TabPanel>
        ))}
      </SwipeableViews>
    </Container>
  );
};

export default TimerTabs;
