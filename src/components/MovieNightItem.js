import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  withStyles
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { TimePicker } from "material-ui-pickers";
import { DateTime } from "luxon";

const styles = theme => ({
  timePicker: {
    width: 40,
    position: "absolute",
    left: "70%"
  }
});

const MovieNightItem = props => {
  const {
    classes,
    id,
    movieTitle,
    removeMovie,
    image,
    handleTimeChange,
    times
  } = props;
  // console.log(times);
  // const lol = DateTime.fromMillis(
  times.find(time => {
    console.log(time[id]);
    // return time.id === id;
  });
  // );
  // console.log(lol);
  return (
    <ListItem divider={true}>
      <ListItemAvatar>
        <Avatar src={`http://image.tmdb.org/t/p/w45${image}`} />
      </ListItemAvatar>
      <ListItemText primary={movieTitle} />
      <TimePicker
        clearable
        ampm={false}
        classes={{ root: classes.timePicker }}
        // value={}
        onChange={date => handleTimeChange(date, id)}
      />
      <ListItemSecondaryAction>
        <IconButton onClick={() => removeMovie(id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default withStyles(styles)(MovieNightItem);
