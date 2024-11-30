const Usuario = require("../models/usuario");

class UsuarioService {
  static async crearUsuario(data) {
    try {
      const usuario = await Usuario.create(data);
      return usuario;
    } catch (error) {
      console.error("Error al crear el usuario", error);
      return { error: "Error al crear el usuario" };
    }
  }

  static async obtenerUsuarios() {
    try {
      const usuarios = await Usuario.findAll();
      return usuarios;
    } catch (error) {
      console.error("Error al obtener los usuarios", error);
      return { error: "Error al obtener los usuarios" };
    }
  }

  static async obtenerUsuarioPorId(id) {
    try {
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        return { error: "Usuario no encontrado" };
      }
      return usuario;
    } catch (error) {
      console.error("Error al obtener el usuario por ID", error);
      return { error: "Error al obtener el usuario" };
    }
  }

  static async actualizarUsuario(id, data) {
    try {
      const [updatedRows] = await Usuario.update(data, { where: { id } });
      if (updatedRows === 0) {
        return { error: "Usuario no encontrado para actualizar" };
      }
      return { success: true, data };
    } catch (error) {
      console.error("Error al actualizar el usuario", error);
      return { error: "Error al actualizar el usuario" };
    }
  }

  static async eliminarUsuario(id) {
    try {
      const deletedRows = await Usuario.destroy({ where: { id } });
      if (deletedRows === 0) {
        return { error: "Usuario no encontrado para eliminar" };
      }
      return { success: true };
    } catch (error) {
      console.error("Error al eliminar el usuario", error);
      return { error: "Error al eliminar el usuario" };
    }
  }
}

module.exports = UsuarioService;
