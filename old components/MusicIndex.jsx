import { Link } from "react-router-dom";
import { posts } from "./MusicPosts";

export default function MusicIndex() {
  return (
    <section className="max-w-3xl mx-auto pt-24 px-4">
      <h1 className="mt-40 text-4xl font-mono mb-8">The Music "Blog"</h1>

      {posts.map(post => (
        <Link
          key={post.slug}
          to={`/musicblog/${post.slug}`}
          className="block mb-6 p-6 rounded-xl bg-slate-800 hover:bg-slate-700 transition"
        >
          <div className="flex items-start gap-4">
            <img src={post.image} className="w-30 object-cover rounded-2xl" />
            <div className="flex-col">
              <h2 className="text-2xl">{post.title}</h2>
              <p className="text-sm text-slate-400">{post.date}</p>
              <p className="mt-2">{post.excerpt}</p>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}