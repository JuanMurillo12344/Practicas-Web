WebSocket
URL de conexión WebSocket: ws://localhost:3000

📡 Eventos por entidad
Accesorios
Acción	Evento enviado
Crear	accesorioCreado
Listar	getAccesorios
Actualizar	accesorioActualizado
Eliminar	accesorioEliminado

Historial de Mantenimiento
Acción	Evento enviado
Crear	historialCreado
Listar	getHistoriales 
Actualizar	historialActualizado
Eliminar	historialEliminado

Multas
Acción	Evento enviado
Crear	multaCreada
Listar	getMultas
Actualizar	multaActualizada
Eliminar	multaEliminada
nstrucciones para probar WebSockets en Postman
Abrir Postman y crear una nueva "WebSocket Request".

Escribir la URL: ws://localhost:3000

Conectarse.

Enviar mensajes como el siguiente:

Crear accesorio:
{
"event": "createAccesorio",
"data": {
"nombre": "GPS",
"descripcion": "Ubicación remota",
"disponible": true
}
}

Actualizar accesorio:
{
"event": "updateAccesorio",
"data": {
"id": 1,
"dto": {
"descripcion": "GPS actualizado"
}
}
}

Eliminar accesorio:
{
"event": "deleteAccesorio",
"data": 1
}

Repetir lo mismo para eventos:

createHistorial, getHistoriales, updateHistorial, deleteHistorial

createMulta, getMultas, updateMulta, deleteMulta
""",
}

Crear archivos y carpetas
for folder in folders:
(project_root / folder).mkdir(parents=True, exist_ok=True)
for path, content in files.items():
full_path = project_root / path
full_path.parent.mkdir(parents=True, exist_ok=True)
full_path.write_text(content.strip())

IMAGENES 
![1](<imagen/Captura de pantalla 2025-07-13 214104.png>)
![2](<imagen/Captura de pantalla 2025-07-13 214021.png>)
![3](<imagen/Captura de pantalla 2025-07-13 213955.png>)
![4](<imagen/Captura de pantalla 2025-07-13 213902.png>)
![5](<imagen/Captura de pantalla 2025-07-13 213215.png>)
![6](<imagen/Captura de pantalla 2025-07-13 213132.png>)