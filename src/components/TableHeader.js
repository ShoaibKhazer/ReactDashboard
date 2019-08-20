import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import TabLabel from './TabLabel';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    border: "none"
  }
});


const TableHeader = () => {
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
        <Tab label={<TabLabel icon={faUserFriends} title='Brief' />} />
        <Tab label={<TabLabel icon={faLocationArrow} title='Detailed' />} />
      </Tabs>
    </Paper>
  );
}

export default TableHeader;