/**
 * EmpresasPorProjeto.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    funcao: {
      type: 'string',
      columnName: 'funcao',
      allowNull: false,
    },
    dataEntrada: {
      type: 'ref',
      columnType: 'date',
      columnName: 'dataEntrada',
    },
    Projeto: {
      model: 'Projeto',
      columnName: 'id_projeto',
      required: true
    },
    PerfilEmpresa: {
      model: 'PerfilEmpresa',
      columnName: 'id_perfil_empresa',
      required: true
    },

  },
  beforeCreate: function (valuesToSet, proceed) {
    valuesToSet.dataEntrada = new Date();
    return proceed();
  }
};

