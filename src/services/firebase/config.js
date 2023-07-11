//파이어베이스 db선언
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTOuokWOhfinIcLbYpHGrJ9qlNEdgXYKo",
  authDomain: "wearther-4c743.firebaseapp.com",
  projectId: "wearther-4c743",
  storageBucket: "wearther-4c743.appspot.com",
  messagingSenderId: "219567828618",
  appId: "1:219567828618:web:23cf597da05d495aad4773",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export const addNewDocument = async (title, post, photo) => {
  try {
    //try-catch블록 내에서 posts 컬렉션에 새 문서 추가하기 addDoc:새로운 문서 추가, 추가된 문서 반환(docRef)
    const docRef = await addDoc(collection(db, "posts"), {
      title: title,
      content: post,
      image: photo,
    });

    console.log("게시글 입력 성공:", docRef.id);
  } catch (e) {
    console.error("게시글 입력 오류: ", e);
  }
};

export { db, storage };
