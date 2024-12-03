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
}

export default Page;