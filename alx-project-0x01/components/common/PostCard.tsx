import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId, id}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-4">
        <h2 className="text-2xl font-seminold text-gray-800">{title}</h2>
      </div>
      <p className="text-gray-600">{body}</p>
      <div>
        <span>User ID: {userId}</span>
        <span>Post ID: {id}</span>
      </div>
    </div>
  );
};

export default PostCard;