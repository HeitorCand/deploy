const firebase = require('firebase/app');
require('firebase/auth');

const firebaseConfig = {
  // Substitua pelas suas credenciais do Firebase
  apiKey: 'AIzaSyAC51NK6GQWnymm5Fk9fWhPTlUM-t_6wzU',
  authDomain: 'css-project-1e0a4.firebaseapp.com',
  projectId: 'css-project-1e0a4',
  storageBucket: 'css-project-1e0a4.appspot.com',
  messagingSenderId: '977352624201',
  appId: '1:977352624201:web:07ff1b0ee75b8eb0b05798'
};

firebase.initializeApp(firebaseConfig);

module.exports = firebase;
