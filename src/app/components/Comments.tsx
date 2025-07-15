import React from 'react';

type Comment = {
  id: number;
  desc: string;
  name: string;
  userId?: number;
  profilePicture: string;
  timeAgo: string;
};

type CommentsProps = {
  comments: Comment[];
};

const Comments: React.FC<CommentsProps> = ({ comments }) => {
  return (
    <div className="comments space-y-4 mt-5">
      <div className="write flex items-center space-x-2">
        <img
          src="/photos/cake.jpg"
          alt="User profile"
          className="w-10 h-10 rounded-full"
        />
        <input
          type="text"
          placeholder="Write a comment"
          className="flex-1 p-2 rounded-md border-2 border-gray-700 bg-white"
          aria-label="Write a comment"
        />
        <button className="py-1 px-3 bg-[#034a9c] hover:bg-[#022f73] text-white rounded-xl">
          Send
        </button>
      </div>

      {comments.map((comment) => (
        <div className="flex items-start space-x-3" key={comment.id}>
          <img
            src={comment.profilePicture}
            alt={`${comment.name} profile`}
            className="w-10 h-10 rounded-full cursor-pointer"
          />
          <div className="bg-gray-100 p-3 rounded-md flex-1">
            <span className="font-semibold cursor-pointer hover:text-gray-500">
              {comment.name}
            </span>
            <p className="text-sm text-black">{comment.desc}</p>
            <span className="date text-gray-500 text-xs">{comment.timeAgo}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
