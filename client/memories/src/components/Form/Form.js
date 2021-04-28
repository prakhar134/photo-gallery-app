import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { CreatePost, update_post } from "../../actions/posts";

const Form = ({ currentId, setcurrentId }) => {
  const classes = useStyles();
  const [postData, setpostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    currentId ? state.posts.find((p) => p._id === currentId) : null
  );

  useEffect(() => {
    if (post) {
      setpostData(post);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(currentId);
    if (currentId) {
      dispatch(update_post(currentId, postData));
    } else {
      dispatch(CreatePost(postData));
    }
    clear();
  };

  const clear = () => {
    setpostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
    setcurrentId(null);
  };

  return (
    <Paper className={classes.Paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Update a post` : `Creating a memory`}
          <TextField
            name="creator"
            variant="outlined"
            label="Creator"
            fullWidth
            value={postData.creator}
            onChange={(e) =>
              setpostData({ ...postData, creator: e.target.value })
            }
          />
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={(e) =>
              setpostData({ ...postData, title: e.target.value })
            }
          />
          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            value={postData.message}
            onChange={(e) =>
              setpostData({ ...postData, message: e.target.value })
            }
          />
          <TextField
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={postData.tags}
            onChange={(e) => setpostData({ ...postData, tags: e.target.value })}
          />
          <div className={classes.FileInput}>
            <FileBase
              type="file"
              multiple={false}
              onDone={(base64) => (
                console.log(base64.base64),
                setpostData({ ...postData, selectedFile: base64.base64 })
              )}
            />
          </div>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            fullWidth
          >
            Submit
          </Button>
          <Button
            className={classes.buttonSubmit}
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => clear()}
            fullWidth
          >
            Clear
          </Button>
        </Typography>
      </form>
    </Paper>
  );
};

export default Form;
