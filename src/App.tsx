import React from 'react';
import { url } from './config';

import getApiPosts from './api/getApiPosts';
import Post from './components/Post';

function App() {
  const [posts, setPosts] = React.useState([]);

  const getPosts = React.useCallback(() => {
    getApiPosts().then((data) => setPosts(data));
  }, []);

  React.useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="container mx-auto justify-center  my-10">
      <div className="">
        {posts?.map((obj, idx) => (
          <Post key={idx} post={obj} getPosts={getPosts} />
        ))}
      </div>
    </div>
  );
}

export default App;
