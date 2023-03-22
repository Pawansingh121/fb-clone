import { data } from "autoprefixer";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";

import { db } from "../Firebase";
import Post from "./Post";
import Story from "./Story";
import UploadMenu from "./UploadMenu";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const postsCollectionRef = collection(db, "posts");

  useEffect(() => {
    const q = query(postsCollectionRef, orderBy("timestamp", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let postsArr = [];
      querySnapshot.forEach((doc) => {
        postsArr.push({ ...doc.data(), id: doc.id });
      });

      setPosts(postsArr);
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className=" absolute left-[400px] top-[100px]">
      <Story />

      <UploadMenu />

      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            photoUrl={post.photoUrl}
            image={post.image}
            username={post.username}
            timestamp="12 PM"
            message={post.message}
          />
        );
      })}
    </div>
  );
};

export default Feed;
