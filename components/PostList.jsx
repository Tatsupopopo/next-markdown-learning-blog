import PostCard from "./PostCard";

export default function PostList({ posts, setFilter, filter }) {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <PostCard
          key={post.slug}
          post={post}
          setFilter={setFilter}
          filter={filter}
        />
      ))}
    </div>
  );
}
