import likesType from '@/app/posts/page'
import { useRouter } from 'next/router';
import { useState } from 'react';

export const PostActions = ({
    postId,
    likes,
}: {
    postId: string;
    likes: likesType[];
}) => {
    const [isDialoguesOpen, setIsDialoguesOpen] = useState(false);
    const handleDialog = () => { setIsDialoguesOpen((prev)=> !prev);
        const router = useRouter()
    }

}