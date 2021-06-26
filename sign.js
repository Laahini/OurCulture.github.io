
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBoDLlnH_Vi8PpYAm5lngLhOQb58rEoj6A",
    authDomain: "ourculture-9be78.firebaseapp.com",
    projectId: "ourculture-9be78",
    storageBucket: "ourculture-9be78.appspot.com",
    messagingSenderId: "712137593747",
    appId: "1:712137593747:web:ebabbc1bb9a781099c0e66",
    measurementId: "G-2LRTQZZ331"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


const auth =firebase.auth()

function signUp(){
  var email = document.getElementById("email2")
  var password = document.getElementById("password2")

  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  alert("Signed Up");
  location.href = "home.html";
}

function signIn(){
  var email = document.getElementById("email")
  var password = document.getElementById("password")

  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => alert(e.message));
  location.href = "home.html";
}

auth.onAuthStateChanged(function(user){
  if(user){
    //is signed in
    var email=user.email;
    alert("Active User ")
  }else{
    alert("No Active User")
  }
});
