import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {
  faInbox,
  faList,
  faUserFriends,
  faSearch,
  faDesktop,
  faSlidersH,
  faPoll
} from "@fortawesome/free-solid-svg-icons";
import TabLabel from './TabLabel';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    border: "none"
  }
});

const TopNavigationTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
      >
        <Tab label={<TabLabel icon={faInbox} title='Inbox' />} />
        <Tab label={<TabLabel icon={faList} title='Steps' />} />
        <Tab label={<TabLabel icon={faUserFriends} title='People' />} />
        <Tab label={<TabLabel icon={faSearch} title='Preview' />} />
        <Tab label={<TabLabel icon={faDesktop} title='Stats' />} />
        <Tab label={<TabLabel icon={faSlidersH} title='Settings' />} />
        <Tab label={<TabLabel icon={faPoll} title='Log' />} />
      </Tabs>
    </Paper>
  );
}

export default TopNavigationTabs;