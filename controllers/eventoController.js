const EventoService = require('../service/eventoService');

class EventoController{

static async crearEvento (req, res) {
  try {
    const evento = await EventoService.crearEvento(req.body);
    res.json(evento);
  } catch (error) {
    res.json({ error: error.message });
  }
};


static async obtenerEvento  (req, res)  {
  try {
    const evento = await EventoService.obtenerEvento();
    res.json(evento);
  } catch (error) {
    res.json({ error: error.message });
  }
};


static async obtenerEventoPorId(req, res) {
  try {
    const evento = await EventoService.obtenerEventoPorId(req.params.id);
    if (!evento) {
      return res.json({ error: 'evento no encontrado' });
    }
    res.json(evento);
  } catch (error) {
    res.json({ error: error.message });
  }
};


static async actualizarEvento  (req, res) {
  try {
    const evento = await EventoService.actualizarEvento(req.params.id, req.body);
    if (evento[0] === 0) {
      return res.json({ error: 'evento no encontrado' });
    }
    res.json({ message: 'evento actualizado correctamente' });
  } catch (error) {
    res.json({ error: error.message });
  }
};


static async eliminarEvento (req, res){
  try {
    const result = await EventoService.eliminarEvento(req.params.id);
    if (result === 0) {
      return res.json({ error: 'evento no encontrado' });
    }
    res.json({ message: 'evento eliminado correctamente' });
  } catch (error) {
    res.json({ error: error.message });
  }
};
}

module.exports = EventoController;