//게시글을 볼 수 있는 페이지
import { Logo } from "../components/Logo";
import { Header } from "../components/Logo";
import CustomButton from "../components/Button";
import React, { useEffect, useState } from "react";
import { collection, getDoc, getDocs } from "firebase/firestore";
import { db } from "../services/firebase/config";
const PostPage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(collection(db, "posts"));
      setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getPosts();
  }, []);
  return (
    <div>
      <Header>
        <Logo src="assets/wearTher.png" />
        <Logo src="assets/logoIll.png" />
      </Header>
      <div>
        날씨 예보는 변동될 수 있으니, 실제 날씨에 따라 옷을 선택하시기 바랍니다.
      </div>
      <input type="date" min={"yyyy-mm-dd"} />
      <CustomButton name="GoToOtherDay">go</CustomButton>
      <div className="postComponents">
        {posts.map((post) => (
          <div key={post.id}>
            <img src={post.image} alt={post.title} />
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PostPage;
