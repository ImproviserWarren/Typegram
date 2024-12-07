"use client"
import { useState, useEffect} from "react"

type likesType = {
    UserId: string,
    postId: string,
    _id: string,
}
type commentsType = {
    UserId: string,
    postId: string,
    comment: string,
}

type postType = {
    UserId: string,
    postImg: string,
    postId: string,
    caption: string,
    likes: likesType,
    comments: commentsType,                 
    _id: string,
}[];


const Page = () => {
    const [posts, setPosts] = useState<postType>([]);
    console.log(posts)
    const getPost = async() => {
        const jsonData = await fetch(
            "https://frontgram.onrender.com/posts"
        );
        const response = await jsonData.json()
        setPosts(response);
        console.log(response)
    };
    useEffect(() => {
        getPost();
    }, []);

    return (
        <div></div>
    )
}

export default Page;