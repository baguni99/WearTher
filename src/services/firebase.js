//파이어베이스 db선언
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig={
    //firebase설정
}

firebase.initializeApp(firebaseConfig);

const db= firebase.fireStore()

db.collection('')
    .add()
    .then((result)=>{
        //성공시 실행
    window.location.href='페이지주소'
    })

    .catch((error)=>{
        //실패시 실행
    })