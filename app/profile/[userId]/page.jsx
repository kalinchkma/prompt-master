'use client';

import { useState, useEffect } from "react";

import Profile from "@components/Profile";

const UserProfile = ({params}) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${params?.userId}/posts`);
            const data = await response.json()
            setPosts(data);
        }
        if (params?.userId) fetchPosts();
    }, [params?.userId]);

  return (
    <Profile
        name="My"
        desc="Welcome to your personalized profile page"
        data={posts}
    />
  )
}

export default UserProfile