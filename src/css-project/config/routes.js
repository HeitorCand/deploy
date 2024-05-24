/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at views/homepage.ejs your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an index.html file in your         *
  * assets directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/landingpage' },


  '/login': { view: 'pages/entrar/login' },

  '/cadastro': { view: 'pages/entrar/cadastro' },

  'GET /social/:unused?':   { action: 'redirect/view-social' },
  'GET /criarAcao/:unused?': { action: 'redirect/view-criaracao' },
  'GET /perfil/:unused?': { action: 'redirect/view-perfil' },

  //Firebase
  'POST /googleLogin': 'GoogleAuth.googleLogin',
  'POST /emailLogin': 'EmailAuthController.emailLogin',
  'POST /emailSignUp': 'EmailAuthController.emailSignUp',
  'POST /emailLogout': 'EmailAuthController.emailLogout',
  'POST /checkUser': 'EmailAuthController.checkUser',


  'POST /user': 'UsuarioController.create',
  'GET /user/:id': 'UsuarioController.read',

  //acao
  'POST /criarAcao/create': 'ProjetoController.create',
  'GET /getAcao/findMy/:id': 'ProjetoController.findMyProjects',
  'GET /getAcao/all': 'ProjetoController.find',


  //'POST /criarAcao/create': 'ProjetoController.create'
  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
};
