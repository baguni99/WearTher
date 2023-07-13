//게시글을 볼 수 있는 페이지
import { Logo } from "../components/Logo";
import { Header } from "../components/Logo";
import CustomButton from "../components/Button";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebase/config";
import DetailModal from "../components/DetailModal";
import { GlobalStyle } from "../components/BackGround";
import {
  PostContainer,
  PostContent,
  PostImage,
  PostTitle,
  PostComponents,
  WarningMessage,
  InputDate,
} from "../components/PostPage";

const PostPage = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [detailModalOpen, setDetailModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "posts"));
      const allPosts = querySnapshot.docs.map((doc) => doc.data());
      setPosts(allPosts);
    };

    fetchData();
  }, []);

  const openDetailModal = (post) => {
    setSelectedPost(post);
    setDetailModalOpen(true);
  };

  const closeDetailModal = () => {
    setSelectedPost(null);
    setDetailModalOpen(false);
  };

  //오늘 날짜 가져오기
  const today = new Date();
  const minDate = today.toISOString().split("T")[0];

  //5일 후의 날짜까지만 가져오기
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 5);
  const maxDateStr = maxDate.toISOString().split("T")[0];

  return (
    <div>
      <GlobalStyle />
      <Header>
        <Logo src="assets/wearTher.png" />
        <Logo src="assets/logoIll.png" />
      </Header>
      <WarningMessage>
        ⛅날씨 예보는 변동될 수 있으니, 실제 날씨에 따라 옷을 선택하시기
        바랍니다.
      </WarningMessage>
      <InputDate type="date" min={minDate} max={maxDateStr} />
      <CustomButton name="GoToOtherDayButton" post={posts} setPost={setPosts} />
      <PostComponents>
        {posts.map((post) => (
          <PostContainer key={post.id}>
            <PostImage src={post.image} alt={post.title} />
            <PostTitle>{post.title}</PostTitle>

            <CustomButton
              name="watchDetailButton"
              onClick={() => openDetailModal(post)}
            />
          </PostContainer>
        ))}
      </PostComponents>
      {detailModalOpen && (
        <DetailModal post={selectedPost} closeDetailModal={closeDetailModal} />
      )}
    </div>
  );
};
export default PostPage;
