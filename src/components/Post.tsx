import React from 'react';
import changePost from '../api/changePost';
import deletePost from '../api/deletePost';
import getApiPosts from '../api/getApiPosts';

export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IProps {
  post: IPost;
  getPosts: () => void;
}

const Post: React.FC<IProps> = ({ post, getPosts }) => {
  const [isClicked, setIsClicked] = React.useState<boolean>(false);

  const [localPost, setLocalPost] = React.useState(post);

  const onDelete = (id: number) => {
    deletePost(id).then(() => getPosts());
  };

  const onChange = () => {
    setIsClicked((prev) => !prev);
  };

  const onSave = () => {
    changePost(post.id, localPost)
      .then(() => getPosts())
      .finally(() => setIsClicked(false));
  };

  return (
    <div className="border p-5 flex flex-col gap-2 relative">
      {isClicked ? (
        <>
          <input
            type="text"
            value={localPost.title}
            onChange={(e) => setLocalPost((prev) => ({ ...prev, title: e.target.value }))}
          />
          <input
            type="text"
            value={localPost.body}
            onChange={(e) => setLocalPost((prev) => ({ ...prev, body: e.target.value }))}
          />
        </>
      ) : (
        <>
          <strong>{post.title}</strong>
          <div className="">{post.body}</div>
        </>
      )}
      <div className="absolute top-0 right-0 flex gap-2">
        <button className="" onClick={() => onDelete(post.id)}>
          delete
        </button>
        {isClicked ? (
          <button onClick={onSave}>save</button>
        ) : (
          <button onClick={onChange}>edit</button>
        )}
      </div>
    </div>
  );
};

export default Post;
