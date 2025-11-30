import ProfileCard from "./sidebar/ProfileCard";
import TagListCard from "./sidebar/TagListCard";
import ArchiveCard from "./sidebar/ArchiveCard";

export default function Sidebar({ posts, setFilter, filter }) {
  return (
    <aside className="space-y-4">
      <ProfileCard />
      <TagListCard posts={posts} setFilter={setFilter} filter={filter} />
      <ArchiveCard posts={posts} setFilter={setFilter} />
    </aside>
  );
}