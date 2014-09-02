exports.fieldValidator = function (doc) {
  var requireFields = require("lib/helpers").require;

  var doctypes = {
    "nota_progreso" : ["acuerdos", "fecha", "resumen", "tipo_entrevista", "idCaso", "user", "type"]
  }

  Object.keys(doctypes).forEach(function (type) {
    if (doc.type === type) {
      requireFields(doc, doctypes[type]);
    }
  });
}
