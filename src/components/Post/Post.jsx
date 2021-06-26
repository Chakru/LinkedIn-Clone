import React from 'react';
import './Post.css';
import { Avatar } from '@material-ui/core';
import InputOption from '../Feeds/InputOption/InputOption';
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from '@material-ui/icons';

const Post = ({ username, description, photoUrl, message }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{username[0]}</Avatar>
        <div className="post__info">
          <h2>{username}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlined} title="Share" color="gray" />
        <InputOption Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </div>
  );
};

export default Post;
