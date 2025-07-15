'use client';

import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaRegCommentDots } from "react-icons/fa";
import { RiShareForwardLine } from "react-icons/ri";
import { BsThreeDots } from "react-icons/bs";
import Link from 'next/link';
import Comments from './Comments'; // Importing the Comments component

// Define types for comment and post
type Comment = {
  id: number;
  desc: string;
  name: string;
  userId?: number;
  profilePicture: string;
  timeAgo: string;
};

type PostType = {
  id: number;
  name: string;
  userId: number;
  profilePic: string;
  desc: string;
  img?: string;
  likes: number;
  timeAgo: string;
  comments: Comment[];
};

interface PostProps {
  post: PostType;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(post.likes);

  const handleLikeClick = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <div className="post p-4 bg-white rounded-xl shadow-xl mb-4">
      <div className="container">
        <div className="user flex items-center justify-between mb-4">
          <div className="userInfo flex items-center">
            <img
              src={post.profilePic}
              alt={`${post.name} profile`}
              className="w-10 h-10 rounded-full mr-3 cursor-pointer"
            />
            <div className="details">
              <Link
                href={`/profile/${post.userId}`}
                className="text-lg font-semibold text-black hover:text-gray-500"
              >
                {post.name}
              </Link>
              <span className="date text-gray-500 text-sm block">{post.timeAgo}</span>
            </div>
          </div>
          <BsThreeDots className="text-gray-500 dark:text-gray-300" />
        </div>

        <div className="content mb-4">
          <p className="mb-2 text-black">{post.desc}</p>
          {post.img && <img src={post.img} alt="Post image" className="w-full rounded-lg" />}
        </div>

        <div className="info flex justify-between text-gray-600">
          <div className="item flex items-center space-x-1 cursor-pointer" onClick={handleLikeClick}>
            {liked ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart />}
            <span>{likesCount} Likes</span>
          </div>
          <div className="item flex items-center space-x-1 cursor-pointer" onClick={() => setCommentOpen(!commentOpen)}>
            <FaRegCommentDots />
            <span>{post.comments.length} Comments</span>
          </div>
          <div className="item flex items-center space-x-1 cursor-pointer">
            <RiShareForwardLine />
            <span>Share</span>
          </div>
        </div>

        {commentOpen && <Comments comments={post.comments} />}
      </div>
    </div>
  );
};

export default Post;
