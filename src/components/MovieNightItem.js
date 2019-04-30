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
  const { id, movieTitle, removeMovie, image } = props;
  return (
    <ListItem divider={true}>
      <ListItemAvatar>
        <Avatar src={`http://image.tmdb.org/t/p/w45${image}`} />
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
