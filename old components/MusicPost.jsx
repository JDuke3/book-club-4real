import { useParams } from "react-router-dom";
import { posts } from "./MusicPosts";

export default function MusicPost() {
  const { slug } = useParams();

  // Find the post that matches the URL slug
  const post = posts.find(p => p.slug === slug);

  // Handle invalid slugs
  if (!post) {
    return (
      <article className="mt-40 max-w-3xl mx-auto pt-24 px-4">
        <h1 className="text-4xl mb-4">Post not found</h1>
        <p>The post you are looking for does not exist.</p>
      </article>
    );
  }

  return (
    <article className="mt-40 max-w-3xl mx-auto pt-24 px-4">
        <img src={post.image} alt="cover" className="mb-5 w-70" />
        <h1 className="text-4xl mb-2">{post.title}</h1>
        <p className="text-slate-400 mb-4">{post.date}</p>

        {post.content.map((paragraph, index) => (
        <p key={index} className="mb-4">{paragraph}</p>
        ))}
    </article>
  );
}
