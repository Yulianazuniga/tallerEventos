const UsuarioService = require('../services/usuarioService');
class UsuarioController{
static async crearUsuario (req, res) {
  try {
    const usuario = await UsuarioService.crearUsuario(req.body);
    res.json(usuario);
  } catch (error) {
    res.json({ error: error.message });
  }
};

static async obtenerUsuarios (req, res) {
  try {
    const usuario = await UsuarioService.obtenerUsuarios();
    res.json(usuario);
  } catch (error) {
    res.json({ error: error.message });
  }
};


static async obtenerUsuarioPorId (req, res) {
  try {
    const usuario = await UsuarioService.obtenerUsuarioPorId(req.params.id);
    if (!usuario) {
      return res.json({ error: 'Usuario no encontrado' });
    }
    res.json(usuario);
  } catch (error) {
    res.json({ error: error.message });
  }
};


static async actualizarUsuario (req, res){
  try {
    const usuario = await UsuarioService.actualizarUsuario(req.params.id, req.body);
    if (usuario[0] === 0) {
      return res.json({ error: 'Usuario no encontrado' });
    }
    res.json({ message: 'Usuario actualizado correctamente' });
  } catch (error) {
    res.json({ error: error.message });
  }
};


static async eliminarUsuario (req, res){
  try {
    const result = await UsuarioService.eliminarUsuario(req.params.id);
    if (result === 0) {
      return res.json({ error: 'Usuario no encontrado' });
    }
    res.json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    res.json({ error: error.message });
  }
};
}

module.exports = UsuarioController;