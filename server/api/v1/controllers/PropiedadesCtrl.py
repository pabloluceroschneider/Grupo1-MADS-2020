from flask import jsonify
from models import Propiedad

# http Get
def get(mysql):
        cur = mysql.connection.cursor()
        cur.execute('CALL LISTAR_PROPIEDADES')
        data = cur.fetchall()
        response = []
        arrayId = []
        for row in data:
            rows = list(filter(lambda x: x[0]==row[0],data))
            id, ubicacion, habitaciones, fechaPublicacion, lat, longitud, amenities, value, imagenes, monto, idPrecio, descPre, rol, descRol  = rows[0]
            if id not in arrayId:
                arrayId.append(id)
                usuario = {"rol":row[12],"descripcion":row[13]}
                obj = Propiedad.Propiedad(id, ubicacion, habitaciones, fechaPublicacion, lat, longitud, [], [],[],usuario).tojson()
                for register in rows:
                    amenities = {"descripcion":register[6],"valor":register[7]}
                    imagen = register[8]
                    precios = {"monto": register[9],"idPrecio":register[10],"descripcion":register[11]}

                    if amenities not in obj["amenities"]:
                        obj['amenities'].append(amenities)
                    if imagen not in obj["imagenes"]:
                        obj['imagenes'].append(imagen)
                    if precios not in obj["precios"]:
                         obj['precios'].append(precios)
                response.append(obj)
        return jsonify(response)