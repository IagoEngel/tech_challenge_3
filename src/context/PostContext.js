import { createContext, useContext, useState } from "react";

export const PostContext = createContext({});
export const PostProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const getAllPosts = async () => {
        const response = await fetch('https://tech-challenge-2-latest.onrender.com/posts');
        const json = await response.json();

        if (json) {
            setPosts(json);
        }
    }

    const searchPost = async (query) => {
        const response = await fetch('https://tech-challenge-2-latest.onrender.com/posts/search', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({
                "queryString": query,
            })
        });

        const json = await response.json();

        if (json) {
            setPosts(json);
        }
    }

    const createPost = async (token, post) => {
        const response = await fetch('https://tech-challenge-2-latest.onrender.com/posts', {
            mode: 'cors',
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(post)
        });

        if (response?.status === 200) {
            await getAllPosts();
        }
    };

    const putPost = async (postId, token, post) => {
        console.log('postId: ', postId);
        console.log('token: ', token);
        console.log('post: ', post);

        const response = await fetch(`https://tech-challenge-2-latest.onrender.com/posts/${postId}`, {
            mode: 'cors',
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(post)
        });

        if (response?.status === 200) {
            await getAllPosts();
        }
    }

    const deletePost = async (postId, token) => {
        const response = await fetch(`https://tech-challenge-2-latest.onrender.com/posts/${postId}`, {
            mode: 'cors',
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Authorization': `Bearer ${token}`
            },
        });

        if (response?.status === 200) {
            await getAllPosts();
        }

    }

    return (
        <PostContext.Provider value={{
            posts,
            getAllPosts,
            searchPost,
            createPost,
            putPost,
            deletePost
        }}>
            {children}
        </PostContext.Provider>
    );
}

export const usePostContext = () => {
    return useContext(PostContext);
};