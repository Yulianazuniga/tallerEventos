const inscripcionService = require('../service/inscripcionService');

class InscripcionController {
  
  static async crearInscripcion(req, res) {
    const { usuario_id, evento_id } = req.body;
    try {
      const inscripcion = await inscripcionService.inscribirUsuario(usuario_id, evento_id);
      res.status(201).json(inscripcion);
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  }

  
}

module.exports = InscripcionController;
