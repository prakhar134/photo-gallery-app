import React, {useState, useEffect} from "react";
import {Container, Grow, Grid} from "@material-ui/core"
import Posts from "../Posts/Posts"
import Form from "../Form/Form"
import {useDispatch} from "react-redux"
import { getPosts } from "../../actions/posts";


const Home = () => {

    const dispatch = useDispatch();
  const [currentId, setcurrentId] = useState(null);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Grow in>
      <Container>
        <Grid
          container
          justify="space-between"
          alignItems="stretch"
          spaceing={3}
        >
          <Grid item xs={12} sm={7}>
            <Posts currentId={currentId} setcurrentId={setcurrentId} />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Form currentId={currentId} setcurrentId={setcurrentId} />
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
