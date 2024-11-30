const Evento = require('../models/evento');

class EventoService {
    static async crearEvento(data) {
        try {
            const evento = await Evento.create(data);
            return evento;
        } catch (error) {
            console.error("Error al crear el evento", error);
            return { error: "Evento no creado" };
        }
    }

    static async obtenerEventos() {
        try {
            const eventos = await Evento.findAll();
            return eventos;
        } catch (error) {
            console.error("Error al obtener eventos", error);
            return { error: "Error al obtener eventos" };
        }
    }

    static async obtenerEventoPorId(id) {
        try {
            const evento = await Evento.findByPk(id);
            if (!evento) {
                return { error: "Evento no encontrado" };
            }
            return evento;
        } catch (error) {
            console.error("Error al obtener el evento por ID", error);
            return { error: "Error al obtener evento" };
        }
    }

    static async actualizarEvento(id, data) {
        try {
            const [updatedRows] = await Evento.update(data, { where: { id } });
            if (updatedRows === 0) {
                return { error: "Evento no encontrado para actualizar" };
            }
            return { success: true, data };
        } catch (error) {
            console.error("Error al actualizar el evento", error);
            return { error: "Error al actualizar evento" };
        }
    }

    static async eliminarEvento(id) {
        try {
            const deletedRows = await Evento.destroy({ where: { id } });
            if (deletedRows === 0) {
                return { error: "Evento no encontrado para eliminar" };
            }
            return { success: true };
        } catch (error) {
            console.error("Error al eliminar el evento", error);
            return { error: "Error al eliminar evento" };
        }
    }
}

module.exports = EventoService;
