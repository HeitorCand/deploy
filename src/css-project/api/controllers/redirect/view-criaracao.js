module.exports = {


  friendlyName: 'View Acao page',


  description: 'Display the dashboard "Welcome" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/criarAcao',
      description: 'Display the welcome page for authenticated users.'
    },

  },


  fn: async function () {

    console.log('View Acao page');

    return {};

  }


};
