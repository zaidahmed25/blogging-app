import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js";
import { auth , db} from "./config.js";
import { collection, addDoc, getDocs, Timestamp, query , orderBy, deleteDoc, doc, updateDoc, where} from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"; 



// const form = document.querySelector('#form');
// const username = document.querySelector('#form');


// const text = document.querySelector('#text');
// const submit = document.querySelector('#submit');
// const todocard = document.querySelector('#todocard');




// onAuthStateChanged(auth, async (user) => {
//     if (user) {
//         const uid = user.uid;
//         const q = query(collection(db, "users"), where("uid", "==", uid));
//         getDataFromFirestore(user.uid)
//     } else {
//         window.location = 'index.html'
//     }
// });




const logout = document.querySelector('#logout-btn');

logout.addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log('logout successfully');
        window.location = 'login.html'
    }).catch((error) => {
        console.log(error);
    });
})



// form.addEventListener('submit', async (event) => {
//     event.preventDefault();
//     try {
//         const postObj = {
//             text: text.value,
            // username: username.value
//             uid: auth.currentUser.uid,
//             postDate: Timestamp.fromDate(new Date())
//         }
//         const docRef = await addDoc(collection(db, "todo"), postObj);
//         console.log("Document written with ID: ", docRef.id);
//         postObj.docId = docRef.id;
//         arr = [postObj, ...arr];
//         console.log(arr);
//         renderTodo();
//     } catch (e) {
//         console.error("Error adding document: ", e);
//     }
//     text.value =""
// })