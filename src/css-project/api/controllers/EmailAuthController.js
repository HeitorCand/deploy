/**
 * EmailAuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
require('../services/firebase');
const auth = require('firebase/auth');

module.exports = {
  emailLogin: async function (req, res) {
    let email = req.body.email;
    let password = req.body.password;

    try {
      const result = await auth.signInWithEmailAndPassword(auth.getAuth(), email, password);
      const user = result.user;

      //autoriza o usuário
      req.session.authenticated = true;
      req.session.userId = user.uid;

      // Salvar informações do usuário no banco de dados ou realizar outras ações
      console.log(user);
      return res.json({ user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
  },


  emailSignUp: async function (req, res) {
    let email = req.body.email;
    let password = req.body.password;

    try {
      const result = await auth.createUserWithEmailAndPassword(auth.getAuth(), email, password);
      const user = result.user;

      // Autoriza o usuário
      req.session.authenticated = true;
      req.session.userId = user.uid;

      // Salvar informações do usuário no banco de dados ou realizar outras ações
      console.log(user);
      return res.json({ user });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao criar usuário com email e senha' });
    }
  },
  emailLogout: async function (req, res) {
    try {
      await auth.signOut(auth.getAuth());
      req.session.authenticated = false;
      req.session.userId = null;
      return res.json({ message: 'Usuário deslogado' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao deslogar usuário' });
    }
  },
  //verificar se o usuário está logado
  checkUser: async function (req, res) {
    try {
      const user = auth.getAuth();

      return res.json(user.currentUser);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao verificar usuário' });
    }
  }
};

