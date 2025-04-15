import React, { useState, useEffect }  from 'react';
import loadScript from './load-script'
import removeScript from './remove-script'

//const clientId = '904912626802-brs81ugevi8dodj8cahskrlitqhnl1qs.apps.googleusercontent.com'
//const clientId = '129104259490-61g6fna8aosjd3tce943m92lpcdod4ap.apps.googleusercontent.com'
const clientId = '303078380115-7285jhr8oi6t834lqfen90if3afjdckj.apps.googleusercontent.com'
//const SCOPE = 'profile email https://www.googleapis.com/auth/drive';
const SCOPE = 'profile email';

// Retrieve the discovery document for version 3 of Google Drive API.
// In practice, your app can retrieve one or more discovery documents.
const discoveryUrl = 'https://www.googleapis.com/discovery/v1/apis/drive/v3/rest';



const success = response => {
  console.log("sucesso", response) // eslint-disable-line
}

const failureScript = response => {
  console.error("failure script", response) // eslint-disable-line
}

var GoogleAuth= null;

function initClient() {
  // Initialize the gapi.client object, which app uses to make API requests.
  // Get API key and client ID from API Console.
  // 'scope' field specifies space-delimited list of access scopes.
  gapi.client.init({
    'apiKey': '',
    'discoveryDocs': [discoveryUrl],
    'clientId': clientId,
    'scope': SCOPE
  }).then(function () {
    GoogleAuth = gapi.auth2.getAuthInstance();
    console.log("initClient | GoogleAuth | isSignedIn", GoogleAuth.isSignedIn.get());

    // Listen for sign-in state changes.
    GoogleAuth.isSignedIn.listen(updateSigninStatus);

    // Handle initial sign-in state. (Determine if user is already signed in.)
    var user = GoogleAuth.currentUser.get();
    console.log("initClient | user", user);
    updateComponents();
  },function (err) {
    console.error("initClient | error", err);
  });
}

// Atualiza a base para indicar login do usuário
function updateSigninStatus(isSignedIn) {
  console.log("updateSigninStatus", isSignedIn);
  updateComponents(); 
  var user = GoogleAuth.currentUser.get();
  var isAuthorized = user.hasGrantedScopes(SCOPE);
  var email, id, name;
  if (isAuthorized) {
    console.log("registrando");
    email = user.getBasicProfile().getEmail();
    id = user.getBasicProfile().getId();
    name = user.getBasicProfile().getName();
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://us-central1-ebook-livros-personalizados.cloudfunctions.net/registrarLogin?s=aeBookPersonalizar&id="+id+"&name="+name+"&email="+email, true); 
    xhr.send(null);
  }
}

//Apresenta na tela itens dependendo do login
function updateComponents() {
  var user = GoogleAuth.currentUser.get();
  var isAuthorized = user.hasGrantedScopes(SCOPE);
  console.log("updateComponents | isAuthorized", isAuthorized )
  var visibilityLogedIn, visibilityLogedOut, email;
  if (isAuthorized) {
    visibilityLogedIn = "inline";
    visibilityLogedOut = "none";
    email = GoogleAuth.currentUser.get().getBasicProfile().getEmail();
  } else {
    visibilityLogedIn = "none";
    visibilityLogedOut = "inline";
    email = "";
  }

    var logedIn = document.getElementsByClassName('GoogleLogedIn');
     
    //console.log("updateComponents",logedIn, logedOut);

    var len = logedIn.length;
    for (var i=0; i<len; i++) {
      logedIn[i].style.display = visibilityLogedIn;
    }

    var logedOut = document.getElementsByClassName('GoogleLogedOut');
    var len = logedOut.length;
    for (var i=0; i<len; i++) {
      logedOut[i].style.display = visibilityLogedOut;
    }

    var dataEmail = document.getElementsByClassName('GoogleDataEmail');
    var len = dataEmail.length;
    for (var i=0; i<len; i++) {
      dataEmail[i].textContent = email;
    }
}

//Sign in-out
function handleAuthClick() {
  if (GoogleAuth.isSignedIn.get()) {
        // User is authorized and has clicked 'Sign out' button.
        GoogleAuth.signOut();
  } else {
        // User is not signed in. Start Google auth flow.
        GoogleAuth.signIn();
  }
}

const ChekLogin = () => {
  useEffect(() => {
    loadScript(
      document,
      'script',
      'google-login',
      'https://apis.google.com/js/api.js',
      () => {
        console.log("GoogleLogin | loadScript | sucesso na carga do script");
        gapi.load('client:auth2', initClient);
      },
      err => {
        console.error("GoogleLogin | loadScript | erro na carga do script", err);
      }
    )
    return () => {
      removeScript(document, 'google-login');
      console.log("ChekLogin | removeScript");
    }
  }, [])
}

const CheckGoogleLogin = () => {
  ChekLogin();

  //const [showButton, toggleShow] = useState(false);
  return (<span></span>
  );
}

const GoogleLogedIn = (props) => {
  //console.log("GoogleLogedIn")
  return (
    <div className="GoogleLogedIn" style={{display: "none"}}>
      {props.children}
    </div>
  );
}

const GoogleLogedOut = (props) => {
  //console.log("GoogleLogedOut")
  return (
    <div className="GoogleLogedOut" style={{display: "none"}}>
      {props.children}
    </div>
  );
}

class GoogleLoginData extends React.Component {
  render() {
    if (this.props.email) {
      return <span className="GoogleDataEmail"></span>;
    }
    return <span></span>;
  }
}

const GoogleOpenLogin = (props) => {
  return (
    <a href="" onClick={handleAuthClick}>{props.children}</a>
  )
}

export { GoogleLogedIn, CheckGoogleLogin, GoogleLogedOut, GoogleLoginData, GoogleOpenLogin };
