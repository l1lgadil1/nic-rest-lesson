import React from 'react';
import { connect } from 'react-redux';

import getApiPosts from './api/getApiPosts';
import Post, { IPost } from './components/Post';
import * as action from './store/actions/action';
import { bindActionCreators } from 'redux';

function App({ setState, arr, deleteAll }) {
  const posts = arr;
  console.log(arr);
  const getPosts = React.useCallback(() => {
    getApiPosts().then((data) => setState(data));
  }, []);

  React.useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container mx-auto justify-center  my-10">
      ----
      <div className="">
        <button onClick={deleteAll}>Delete</button>
        {posts?.map((obj, idx) => (
          <Post key={idx} post={obj} getPosts={getPosts} />
        ))}
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  const { setState, deleteAll } = bindActionCreators(action, dispatch);
  return {
    setState,
    deleteAll,
  };
};
const mapStateToProps = (state) => {
  return {
    arr: state.arr,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
