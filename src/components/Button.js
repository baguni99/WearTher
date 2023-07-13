//만능버튼
import React from "react";
import {
  AddButton,
  ViewButton,
  DeleteButton,
  AddCommentButton,
  EditButton,
  CloseButton,
  AddPostButton,
  GoToOtherDayButton,
  WatchDetailButton,
} from "./ButtonStyle";
import { useDispatch } from "react-redux";
import { handleCloseModal, handleShowModal } from "../redux/modules/modalSlice";
import { useNavigate } from "react-router-dom";
import { db, storage } from "../services/firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useSelector } from "react-redux";
import { selectWeatherNow } from "../redux/modules/weatherSlice";
import {
  handleCloseDetailModal,
  handleShowDetailModal,
} from "../redux/modules/detailSlice";
const CustomButton = ({ name, title, post, photo, setPost, onClick }) => {
  const dispatch = useDispatch(); //AddButton 클릭 -> 모달 : dispatch를 사용하여 showModal 액션 디스패치 !
  const navigate = useNavigate();
  const weatherNow = useSelector(selectWeatherNow);

  const showDetailModal = () => {
    console.log("showDetailModal 잘 작동합니다");
    dispatch(handleShowDetailModal());
  };
  const closeDetailModal = () => {
    console.log("closeDetailModal 잘 됩니다.");
    dispatch(handleCloseDetailModal());
  };
  //console.log("show 상태:", modalShow);

  const showModal = () => {
    //dispatch는 handleShowModal이라는 액션크리에이터를 가져오고 , 액션 크리에이터가 configurestore에서 액션개체를 만든다
    console.log("showModal잘 작동하는지");
    dispatch(handleShowModal());
  };
  const closeModal = () => {
    console.log("closeModal잘 작동하는지");
    dispatch(handleCloseModal());
  };

  const switchPage = () => {
    navigate("/Posts");
  };
  //AddPostButton을 틀릭하면 handleUpload 함수가 호출된다 ( 이미지를 Firebase Storage에 업로드)
  const uploadImage = async () => {
    if (!title || !post || !photo) {
      //값이 설정되었는지 확인 !
      console.error("모든 칸을 입력해주세요");
      return alert("모든 칸을 입력해주세요");
    }
    try {
      //입력창 초기화 setTitle(""), setPhoto(null), setPost("");
      //try catch구문 사용하여 업로드 중에 발생할 수 있는 예외: 오류 발생하면 catch 블록 실행
      const timestamp = Date.now().toString(); // 현재 시간을 문자열로 반환( 스토리지에 이름 같은 파일 덮어씌워지는 것 방지 )
      const storageRef = ref(storage, `images/${timestamp}_${photo.name}`);
      const uploadTask = uploadBytesResumable(storageRef, photo);
      // 업로드 상태 모니터링
      await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => {
            console.error("등록 오류! :", error);
            reject(error);
          },
          () => resolve() // 업로드가 성공적으로 완료되면 Promise를 resolve
        );
      });

      // 업로드 완료 후 실행될 코드
      // 이미지 URL 가져오기
      const downloadURL = await getDownloadURL(storageRef);

      //날씨 범위에 따라 나누고 파이어베이스에 같이 저장
      console.log("현재날씨는: ", weatherNow);
      const tempRange = getTempCategory(weatherNow);
      // Firestore에 post 추가
      const docRef = await addDoc(collection(db, "posts"), {
        title: title,
        content: post,
        image: downloadURL, // 업로드된 이미지의 URL
        temperature: tempRange,
      });
      console.log("입력성공: ", docRef.id);
    } catch (error) {
      console.error("입력오류!:", error);
    }
  };
  const getTempCategory = (temperature) => {
    if (temperature <= 0) return "cold";
    else if (temperature > 0 && temperature <= 10) return "cool";
    else if (temperature > 10 && temperature <= 20) return "nice";
    else if (temperature > 20 && temperature <= 30) return "warm";
    else return "hot";
  };
  const handleGoToOtherDay = async () => {
    //날씨API를 사용!!(5일간의 날씨)
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?lat=37.5665&lon=126.9780&APPID=b3bd3a62a36638732c39683a390282b0` //다른 날짜 날씨 보여주는 api 가져오기
    );
    const data = await response.json();
    const temperature = data.list[0].main.temp - 273.15; //평균기온으로 하는 법
    console.log("Temperature: ", temperature); // 현재 온도 출력

    const tempCategory = getTempCategory(temperature);
    console.log("Temp Category: ", tempCategory);
    const filteredPosts = post.filter(
      (post) => post.temperature === tempCategory
    );
    setPost(filteredPosts);
  };

  switch (name) {
    case "AddButton":
      return <AddButton onClick={showModal}>Post My ootd</AddButton>;
    case "ViewButton":
      return <ViewButton onClick={switchPage}>Other's ootd</ViewButton>;
    // case "DeleteButton":
    //   return <DeleteButton onClick={props.onClickDelete}>삭제</DeleteButton>;
    // case "EditButton":
    //   return <EditButton onClick={props.onClickEdit}>수정</EditButton>;
    // case "AddCommentButton":
    //   return (
    //     <AddCommentButton onClick={props.onClickAddComment}>
    //       등록
    //     </AddCommentButton>
    //   );
    case "closeButton":
      return <CloseButton onClick={closeModal} />;
    case "AddPostButton":
      return (
        <AddPostButton
          onClick={async (e) => {
            await uploadImage();
            onClick(e);
          }}
        />
      );
    case "GoToOtherDayButton":
      return (
        <GoToOtherDayButton onClick={handleGoToOtherDay}>Go</GoToOtherDayButton>
      );
    case "watchDetailButton":
      return <WatchDetailButton onClick={onClick}>Detail</WatchDetailButton>;
    default:
      return null;
    //}
  }
};

export default CustomButton;
