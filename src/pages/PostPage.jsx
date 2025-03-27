import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CommentSection from "../components/CommentSection";
import PostCard from "../components/PostCard";

export default function PostPage() {
  const { postSlug } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);
  
  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=3`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  
  if (loading)
    return (
      <div className="flex justify-center items-center">
        <Spinner size="xl" />
      </div>
    );
    const isVideo = /\.(mp4|webm|ogg|mov)$/i.test(post.image);
    const isImage = /\.(jpg|jpeg|png|gif|bmp|svg|webp)$/i.test(post.image);
    return (
      <main className="flex flex-col justify-center max-w-[1480px] w-full p-5 mx-auto mt-20 sm:mt-24 md:mt-28 lg:mt-32 xl:mt-36 2xl:mt-40">
        <div className="">
          <h1 className="text-3xl lg:text-4xl text-center font-serif w-full mx-auto">
            {post && post.title}
          </h1>
          <Link to={`/search?category=${post && post.category}`} className="self-center mt-5">
            <Button color="gray" pill size="xl" className="rounded-2xl py-2 px-8 mx-auto">
              {post && post.category}
            </Button>
          </Link>
          {isVideo ? (
              <video src={post.image}controls autoPlay loop className="size-auto object-cover group-hover:h-[200px] transition-all duration-300 z-20 mx-auto"/>
            ) : isImage ? (
              <img src={post.image} alt="post cover" className="h-fit w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20 mt-5"/>
            ) : (
              <p className="text-center text-red-500">Unsupported media type</p>
          )}
          <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-7xl text-xs">
            <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
            <span className="italic text-sm font-normal txt-grey-500">
              {post && (post.content.length / 1000).toFixed(0)} mins read
            </span>
          </div>
          <div className="max-w-7xl w-full text-sm font-medium text-grey-900 p-3 mx-auto post-content" dangerouslySetInnerHTML={{ __html: post && post.content }}></div>
          <CommentSection postId={post._id} />
        </div>
        <div className="flex flex-col justify-center items-center mb-5">
          <h1 className="text-2xl font-medium text-gray-900 overpass underline ring-offset-8 mt-5">Recent articles</h1>
          <div className="flex justify-center flex-wrap gap-10 mt-5">
            {recentPosts &&
              recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
          </div>
        </div>

    </main>
  );
}
