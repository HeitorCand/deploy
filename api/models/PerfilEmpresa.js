/* eslint-disable camelcase */
// api/models/PerfilEmpresa.js

module.exports = {
  attributes: {
    nome: {
      type: 'string',
      columnName: 'nome',
      allowNull: false,
    },
    cnpj: {
      type: 'string',
      columnName: 'cnpj',
      allowNull: false,
    },
    cidade: {
      type: 'string',
      columnName: 'cidade',
      allowNull: false,
    },
    estado: {
      type: 'string',
      columnName: 'estado',
      allowNull: true,
    },
    pais: {
      type: 'string',
      columnName: 'pais',
      allowNull: false,
    },
    voluntarioEmpresa: {
      collection: 'PerfilUsuario',
      via: 'PerfilEmpresa',
      through: 'UsuariosPorEmpresa'
    },
    ProjetoEmpresa: {
      collection: 'Projeto',
      via: 'PerfilEmpresa',
      through: 'EmpresasPorProjeto'
    },
  },
};
