//파이어베이스 db선언
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
const firebaseConfig={
    //firebase설정
  apiKey: "AIzaSyCTOuokWOhfinIcLbYpHGrJ9qlNEdgXYKo",
  authDomain: "wearther-4c743.firebaseapp.com",
  projectId: "wearther-4c743",
  storageBucket: "wearther-4c743.appspot.com",
  messagingSenderId: "219567828618",
  appId: "1:219567828618:web:31191e44670cbb94ad4773"
}

const app = initializeApp(firebaseConfig);
const db= getFirestore(app);
const storage = getStorage(app);


try {
    const docRef = await addDoc(collection(db, "posts"), {
      title: 'Post Title',
      content: 'Post content...',
      image: 'Image URL or data...'
    });
  
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

export { db, storage };