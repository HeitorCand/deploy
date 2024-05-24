module.exports = {
  // Action para criar um novo projeto
  create: async function (req, res) {
    try {
      const newProjeto = await Projeto.create(req.body).fetch();
      return res.status(201).json(newProjeto);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // Action para obter todos os projetos
  find: async function (req, res) {
    try {
      const projetos = await Projeto.find(
        { where: { idCriador: { '!=': -1 } } }
      );
      return res.status(200).json(projetos);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // Action para obter um projeto por ID
  findOne: async function (req, res) {
    try {
      const projeto = await Projeto.findOne({ id: req.params.id });
      if (!projeto) {
        return res.status(404).json({ error: 'Projeto não encontrado' });
      }
      return res.status(200).json(projeto);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // Action para atualizar um projeto
  update: async function (req, res) {
    try {
      const updatedProjeto = await Projeto.updateOne({ id: req.params.id }).set(req.body);
      if (!updatedProjeto) {
        return res.status(404).json({ error: 'Projeto não encontrado' });
      }
      return res.status(200).json(updatedProjeto);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // Action para deletar um projeto
  delete: async function (req, res) {
    try {
      const deletedProjeto = await Projeto.destroyOne({ id: req.params.id });
      if (!deletedProjeto) {
        return res.status(404).json({ error: 'Projeto não encontrado' });
      }
      return res.status(200).json(deletedProjeto);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },

  // Lista todas as acoes que tiver o idCriador igual ao id do usuario
  findMyProjects: async function (req, res) {
    try {
      const projetos = await Projeto.find({ idCriador: req.params.id });
      return res.status(200).json(projetos);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
};
