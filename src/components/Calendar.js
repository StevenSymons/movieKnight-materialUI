import React from "react";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
  Toolbar,
  DateNavigator
} from "@devexpress/dx-react-scheduler-material-ui";
import {
  Paper,
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core";
import { blue } from "@material-ui/core/colors";
import { appointments } from "../data";

const theme = createMuiTheme({ palette: { type: "light", primary: blue } });

const styles = theme => ({
  paper: {
    ...theme.mixins.gutters(),
    width: 960,
    height: "100vh",
    margin: "auto",
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit * 3,
    overflowY: "hidden"
  }
});

class Calendar extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments
    };
  }
  render() {
    const { data } = this.state;
    const { classes } = this.props;
    return (
      <MuiThemeProvider theme={theme}>
        <Paper className={classes.paper}>
          <Scheduler data={data}>
            <ViewState currentDate="2018-06-28" />
            <DayView startDayHour={0} endDayHour={24} />
            <Appointments />
            <Toolbar />
            <DateNavigator />
          </Scheduler>
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(Calendar);
