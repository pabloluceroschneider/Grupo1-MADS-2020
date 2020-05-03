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
            id, ubicacion, habitaciones, fechaPublicacion, lat, longitud, amenities, value, imagenes = rows[0]
            if id not in arrayId:
                arrayId.append(id)
                obj = Propiedad.Propiedad(id, ubicacion, habitaciones, fechaPublicacion, lat, longitud, [], []).tojson()
                for register in rows:
                    amenities = {"descripcion":register[6],"valor":register[7]}
                    imagen = register[8]
                    if amenities not in obj["amenities"]:
                        obj['amenities'].append(amenities)
                    if imagen not in obj["imagenes"]:
                        obj['imagenes'].append(imagen)
                response.append(obj)
        return jsonify(response)