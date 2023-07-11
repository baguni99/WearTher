//게시글을 볼 수 있는 페이지
import React from "react";
import { Logo } from "../components/Logo";
import { Header } from "../components/Logo";
import CustomButton from "../components/Button";
const PostPage = () => {
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
    </div>
  );
};
export default PostPage;
