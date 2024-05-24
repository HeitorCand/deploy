
/**
 * PerfilUsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  create: async function (req, res) {
    try {
      let id = req.body.id;
      let nome = req.body.nome;
      let idade = req.body.idade;
      let email = req.body.email;
      let senha = req.body.senha;
      let cidade = req.body.cidade;
      let estado = req.body.estado;
      let pais = req.body.pais;
      let horasTotais = req.body.horasTotais;
      let genero = req.body.genero;

      const perfilUsuario = await PerfilUsuario.create({
        id,
        nome,
        idade,
        email,
        senha,
        cidade,
        estado,
        pais,
        horasTotais,
        genero,
      }).fetch();

      return res.status(201).json(perfilUsuario);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar um novo usuário' });
    }
  },

  delete: async function (req, res){
    try{
      let id = req.params.id;
      const perfilUsuario = await PerfilUsuario.destroy({id}).fetch();
      return res.status(200).json(perfilUsuario);
    } catch (error){
      return res.status(500).json({error: 'Erro ao deletar usuário'});
    }
  },

  //ler usuario apartir do id
  read: async function (req, res) {
    try {
      let id = req.params.id;
      const perfilUsuario = await PerfilUsuario.findOne({ id });
      if (!perfilUsuario) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
      }
      return res.status(200).json(perfilUsuario);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao buscar usuário' });
    }
  }
};



