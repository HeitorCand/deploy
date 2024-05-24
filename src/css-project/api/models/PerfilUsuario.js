// api/models/PerfilUsuario.js

module.exports = {
  id: {
    type: 'string',
    columnName: 'id',
    allowNull: false,
    required: true,
  },

  attributes: {
    id: {
      type: 'string',
      allowNull: false,
      required: true,
    },
    nome: {
      type: 'string',
      columnName: 'nome',
      allowNull: false,
    },
    idade: {
      type: 'number',
      columnName: 'idade',
      allowNull: false,
    },
    genero: {
      type: 'string',
      columnName: 'genero',
      allowNull: false,
    },
    email: {
      type: 'string',
      columnName: 'email',
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
      allowNull: false,
    },
    pais: {
      type: 'string',
      columnName: 'pais',
      allowNull: false,
    },
    horasTotais: {
      type: 'number',
      columnName: 'horasTotais',
      allowNull: false,
      defaultsTo: 0.0,
    },
    voluntarioEmpresa: {
      collection: 'PerfilEmpresa',
      via: 'PerfilUsuario',
      through: 'UsuariosPorEmpresa',
    },
    voluntarioProjeto: {
      collection: 'Projeto',
      via: 'PerfilUsuario',
      through: 'UsuariosPorProjeto',
    },
    idUsuarioRecebe: {
      collection: 'Convite',
      via: 'idUsuarioRecebe',
    },
    idUsuarioEnvia: {
      collection: 'Convite',
      via: 'idUsuarioEnvia',
    },
    idUsuario: {
      collection: 'Voluntariado',
      via: 'idUsuario',
    },
  },
};
