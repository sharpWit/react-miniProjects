import { usePosts } from "./PostContext";
import Results from "./Results";
import SearchPosts from "./SearchPosts";

export default function Header() {
  // 3) CONSUMING CONTEXT VALUE
  const { onClearPosts } = usePosts();

  return (
    <header>
      <h1>
        <span>⚛️</span>The Atomic Blog
      </h1>
      <div>
        <Results />
        <SearchPosts />
        <button onClick={onClearPosts}>Clear posts</button>
      </div>
    </header>
  );
}
