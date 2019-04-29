import React from "react";
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

const MovieNightItem = props => {
  const { id, movieTitle, removeMovie } = props;
  return (
    <ListItem divider={true}>
      <ListItemAvatar>
        <Avatar />
      </ListItemAvatar>
      <ListItemText primary={movieTitle} />
      <ListItemSecondaryAction>
        <IconButton onClick={() => removeMovie(id)}>
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default MovieNightItem;
