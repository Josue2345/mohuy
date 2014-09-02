exports.fieldValidator = function (doc) {
  var requireFields = require("lib/require").require;

  var doctypes = {
    "nota_progreso" : ["acuerdos", "analisis_problema", "fecha", "factores_concurrentes", "factores_criticos", "ponderacion", "resumen", "tipo_entrevista"]
  }

  Object.keys(doctype).forEach(function (type) {
    if (doc.type === type) {
      doctypes[type].forEach(function (fieldList) {
        requireFields(doc, fieldList);
      });
    }
  });
}
