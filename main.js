// Import the functions you need from the SDKs you need
//  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
//  import { firebase } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_-hXIJBryGzts8JXVk5TMC91nMTLr7X8",
  authDomain: "fir-firebase-7684f.firebaseapp.com",
  databaseURL: "https://fir-firebase-7684f-default-rtdb.firebaseio.com",
  projectId: "fir-firebase-7684f",
  storageBucket: "fir-firebase-7684f.appspot.com",
  messagingSenderId: "842539197403",
  appId: "1:842539197403:web:a0f7028cc62f3b58b83dfe",
};

// Initialize Firebase
const db = firebase.initializeApp(firebaseConfig);
//   import{getDatabase, ref, set, get, child, update, remove} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

//  const db= getDatabase();
var d = new Date();
var hours = d.getTime();
//  var random=Math.floor(Math.random() * 100);

// references
var namebox = document.getElementById("Namebox");
var agebox = document.getElementById("Agebox");
var birbox = document.getElementById("Birbox");
var genbox = document.getElementById("Genbox");

var insBtn = document.getElementById("Insbtn");
var selBtn = document.getElementById("Selbtn");
var updBtn = document.getElementById("Updbtn");
var delBtn = document.getElementById("Delbtn");

function InserData() {
  const dbRef = firebase
    .database()
    .ref("fir-firebase-7684f-default-rtdb/" + hours);
//   var newStoreRef =.push();
  dbRef
    .set({
      Iduser: hours,
      Name: namebox.value,
      Age: agebox.value,
      Birthday: birbox.value,
      Gender: genbox.value,
    })
    .then(() => {
      alert("data insert successfully");
    })
    .catch((error) => {
      alert("unssessfull, error" + error);
    });

  //   ref((db,'fir-firebase-7684f-default-rtdb/' + hours),{
  //     Iduser: hours,
  //     Name: namebox.value,
  //     Age: agebox.value,
  //     Birthday: birbox.value,
  //     Gender: genbox.value,
  //   })
  //   .then(()=>{
  //       alert('data insert successfully');
  //   })
  //   .catch((error)=>{
  //       alert('unssessfull, error'+ error);
  //   });
}
// truy vấn tìm kiếm

function SelectDate() {
  const dbRef = firebase.database().ref("fir-firebase-7684f-default-rtdb");
  dbRef.on("value", (snap) => {
    console.log(snap.val());
  });

  //   get(child(dbref,'fir-firebase-7684f-default-rtdb/'))
  //   .then((snap)=>{
  //       if(snap.exists()){
  //           namebox.value=snap.val().Name,
  //           agebox.value=snap.val().Age,
  //           birbox.value=snap.val().Birthday,
  //           genbox.value=snap.val().Gender,
  //           console.log(snap.val().Iduser);
  //       }
  //       else{
  //           alert('No data found');
  //       }
  //   })
  //   .catch((error)=>{
  //       alert('a hihi do ngu'+error);
  //   });
}

//------------------------------//
insBtn.addEventListener("click", InserData);
selBtn.addEventListener("click", SelectDate);
