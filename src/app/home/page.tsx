import Upload from "@/components/Upload";
import Posts from "@/components/Posts";

export default function HomePage() {
  return (
    <div className="p-3 text-black dark:text-white lg:ml-5">
      <Upload />
      <Posts />
    </div>
  );
}
