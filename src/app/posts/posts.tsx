import { useState, useEffect } from "react";

// Define types for post, likes, and comments
type likesType = {
    UserId: string;
    postId: string;
    _id: string;
};

type commentsType = {
    UserId: string;
    postId: string;
    comment: string;
};

type postType = {
    UserId: string;
    postImg: string;
    postId: string;
    caption: string;
    likes: likesType[];
    comments: commentsType[];
    _id: string;
}[]; 

const Page = () => {
    const [posts, setPosts] = useState<postType>([]);

    // Fetch posts data from the backend
    const getPost = async () => {
        try {
            const jsonData = await fetch("https://frontgram.onrender.com/posts");  // Update with correct endpoint
            const response = await jsonData.json();
            setPosts(response); // Set posts to state
        } catch (error) {
            console.error("Error fetching posts:", error);
        }
    };

    useEffect(() => {
        getPost();  // Fetch data on page load
    }, []);

    return (
        <div>
            <h1>Posts</h1>
            {/* Render the posts */}
            {posts.length === 0 ? (
                <p>No posts available</p>
            ) : (
                <ul>
                    {posts.map((post) => (
                        <li key={post._id}>
                            <img src={post.postImg} alt={post.caption} width="300" />
                            <h2>{post.caption}</h2>
                            <p>Likes: {post.likes.length}</p>
                            <p>Comments:</p>
                            <ul>
                                {post.comments.map((comment, index) => (
                                    <li key={index}>{comment.comment}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Page;
