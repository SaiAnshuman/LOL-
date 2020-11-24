// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCPzwz9_BwurkmjEZXJGWl3DWxrdiK0OP0",
  authDomain: "lol-5c225.firebaseapp.com",
  databaseURL: "https://lol-5c225.firebaseio.com",
  projectId: "lol-5c225",
  storageBucket: "lol-5c225.appspot.com",
  messagingSenderId: "19257553062",
  appId: "1:19257553062:web:dbbc52b571f7bfcd730467"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "lol_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "lol_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "lol.html";
}
