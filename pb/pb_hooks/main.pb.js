/* =========================================================================================================
REGISTROS DE AUDITORIA CON HOOKS
https://pocketbase.io/docs/js-event-hooks/
https://pocketbase.io/docs/js-records/

REGISTRAMOS EN LA BASE DE DATOS UNA COPIA DE LOS REGISTROS QUE SE CREAN, ACTUALIZAN O ELIMINAN
INTERCEPTANDO LAS PETICIONES AL BACKEND Y CREANDO UN NUEVO REGISTRO EN LA COLECCION AUDIT CON LOS DATOS
*/

// ESTE CODIGO SE EJECUTA LUEGO DE QUE SE CREA UN REGISTRO EN CUALQUIER COLECCION
onRecordAfterCreateRequest((e) => {
  try {
    const collection = $app.dao().findCollectionByNameOrId("audit");
    const record = new Record(collection, {
      id_objeto: e.record.id,
      json: JSON.stringify(e.record),
      user: e.httpContext.get("authRecord").get("id"),
      accion: "crear",
      collection: e.collection.name,
    });
    $app.dao().saveRecord(record);
  } catch (err) {
    const collection = $app.dao().findCollectionByNameOrId("audit");
    const adminRecord = e.httpContext.get("admin");
    const record = new Record(collection, {
      id_objeto: e.record.id,
      json: JSON.stringify(e.record),
      user: adminRecord.id,
      accion: "crear",
      collection: e.collection.name,
    });
    console.log("Se ha creado un registro de auditoria desde el catch");
    console.log(JSON.stringify(record));
    $app.dao().saveRecord(record);
  }
});

// ESTE CODIGO SE EJECUTA ANTES DE QUE SE ACTUALICE UN REGISTRO EN CUALQUIER COLECCION
// Y GUARDA EL ESTADO ANTERIOR DEL REGISTRO
onRecordBeforeUpdateRequest((e) => {
  try {
    const before = $app.dao().findRecordById(e.collection.name, e.record.id);
    const collection = $app.dao().findCollectionByNameOrId("audit");
    const record = new Record(collection, {
      id_objeto: e.record.id,
      json: JSON.stringify(e.record),
      json2: JSON.stringify(before),
      user: e.httpContext.get("authRecord").get("id"),
      accion: "actualizar",
      collection: e.collection.name,
    });
    $app.dao().saveRecord(record);
  } catch (err) {
    const collection = $app.dao().findCollectionByNameOrId("audit");
    const record = new Record(collection, {
      id_objeto: e.record.id,
      json: JSON.stringify(e.record),
      accion: "actualizar",
      collection: e.collection.name,
    });
    $app.dao().saveRecord(record);
  }
});

// LO MISMO PERO ANTES DE ELIMINAR UN REGISTRO
// onRecordBeforeDeleteRequest((e) => {
//     try {
//         const collection = $app.dao().findCollectionByNameOrId("audit")
//         const record = new Record(collection, {
//             "id_objeto": e.record.id,
//             "json": JSON.stringify(e.record),
//             "user": e.httpContext.get("authRecord").get("id"),
//             "accion": "eliminar",
//             "collection": e.collection.name
//         })
//         $app.dao().saveRecord(record)
//     }
//     catch (err) {
//         const collection = $app.dao().findCollectionByNameOrId("audit")
//         const record = new Record(collection, {
//             "id_objeto": e.record.id,
//             "json": JSON.stringify(e.record),
//             "accion": "eliminar",
//             "collection": e.collection.name
//         })
//         $app.dao().saveRecord(record)
//     }
// }
// )
// =========================================================================================================

/* =========================================================================================================
ENDPOINTS PERSONALIZADOS
https://pocketbase.io/docs/js-routing/#reading-query-parameters

EN ESTE CASO NOS SIRVEN PARA QUE UN CORREO ELECTRONICO PUEDA ENVIAR
UNA NOTIFICACION POR UNA SIMPLE URL AL SERVIDOR  */

//CREAMOS UN ENDPOINT GET CON EL PARAMETRO "PAQUETE" Y "CLIENTE" EN LA RUTA /NOTIFICACION
// EJ: http://127.0.0.1:8090/notificacion/?cliente=estoSeriaElIdDelCliente&paquete=estoSeriaElIdDelPaquete
routerAdd("GET", "/notificacion/", (c) => {
  try {
    //EXTRAEMOS LOS PARAMETROS DE LA URL
    const paquete = c.queryParam("paquete");
    const cliente = c.queryParam("cliente");

    //CREAMOS UN OBJETO DE TIPO NOTIFICACION Y LO GUARDAMOS EN LA BASE DE DATOS
    //PRIMERO BUSCAMOS LA COLECCION "NOTIFICACIONES"
    const coleccionNotificaciones = $app
      .dao()
      .findCollectionByNameOrId("notificaciones");

    //CREAMOS UN OBJETO NOTIFICACION DE TIPO RECORD CON LOS PARAMETROS QUE NOS HAN LLEGADO
    const notificacion = new Record(coleccionNotificaciones, {
      title: "Cliente interesado en un paquete",
      content: "Se ha registrado un nuevo paquete para el cliente" + cliente,
      paquete: paquete,
      cliente: cliente,
      isActive: true,
    });

    //GUARDAMOS EL OBJETO NOTIFICACION EN LA COLECCION NOTIFICACIONES DE LA BASE DE DATOS
    $app.dao().saveRecord(notificacion);

    //RENDERIZAMOS EL HTML PARA MOSTRAR EN EL MENSAJE
    const html = $template
      .loadFiles(`${__hooks}/views/emailconfirmation.html`)
      .render();

    //DEVOLVEMOS LA PLANTILLA DE CONFIRMACION CON UN STATUS 200 OK
    return c.html(200, html);
  } catch (err) {
    return c.json(500, { message: "Error: " + err });
  }
});
// =========================================================================================================
