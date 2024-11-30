const Inscripcion = require("../models/inscripcionModel");
const Usuario = require("../models/usuarioModel");
const Evento = require("../models/eventoModel");

class InscripcionService {
  static async inscribirUsuario(usuarioId, eventoId) {
    try {
      const usuario = await Usuario.findByPk(usuarioId);
      if (!usuario) {
        return { error: "El usuario no existe." };
      }

      const evento = await Evento.findByPk(eventoId);
      if (!evento) {
        return { error: "El evento no existe." };
      }

      const inscripcionExistente = await Inscripcion.findOne({
        where: { usuario_id: usuarioId, evento_id: eventoId },
      });
      if (inscripcionExistente) {
        return { error: "El usuario ya está inscrito en este evento." };
      }

      const inscripciones = await Inscripcion.count({
        where: { evento_id: eventoId },
      });
      if (inscripciones >= evento.capacidad_maxima) {
        return { error: "El evento está completo." };
      }

      const inscripcion = await Inscripcion.create({
        usuario_id: usuarioId,
        evento_id: eventoId,
      });

      return inscripcion;
    } catch (error) {
      console.error("Error al inscribir al usuario", error);
      return { error: "Error al inscribir al usuario" };
    }
  }
}

module.exports = InscripcionService;
