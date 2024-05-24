// api/models/UsuariosPorEmpresa.js


module.exports = {
  attributes: {
    PerfilUsuario: {
      model: 'PerfilUsuario',
      columnName: 'id_usuario',
      required: true
    },
    PerfilEmpresa: {
      model: 'PerfilEmpresa',
      columnName: 'id_perfil_empresa',
      required: true
    },
    cargo: {
      type: 'string',
      columnName: 'cargo',
      allowNull: false,
    },
    horasContadas: {
      type: 'number',
      columnName: 'horasContadas',
      allowNull: false,
    },
    dataEntrada: {
      type: 'ref',
      columnType: 'date',
      columnName: 'dataEntrada',
    },
  },
};
