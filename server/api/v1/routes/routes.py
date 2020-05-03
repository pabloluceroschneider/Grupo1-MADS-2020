from flask import jsonify
import json
from controllers import PublicacionCtrl

class Amenities:
    def __init__(self, descripcion, valor):
        self.descripcion = descripcion
        self.valor = valor
    
    def tojson(self):
        json = { 
            "id" : self.id, 
            "ubicacion" : self.ubicacion,
        } 
        return json


class Propiedad:
    def __init__(self, id, ubicacion, habitaciones, fechaPublicacion, lat, longitud, amenities, imagenes):
        self.id = id
        self.ubicacion = ubicacion
        self.habitaciones = habitaciones
        self.fechaPublicacion = fechaPublicacion
        self.lat = lat
        self.longitud = longitud
        self.amenities = amenities
        self.imagenes = imagenes

    
    def tojson(self):
        json = { 
            "id" : self.id, 
            "ubicacion" : self.ubicacion,
            "habitaciones":  self.habitaciones,
            "fechaPublicacion" : self.fechaPublicacion,
            "lat": self.lat,
            "longitud": self.longitud,
            "amenities": self.amenities,
            "imagenes": self.imagenes
        } 
        return json

def routes(app, mysql):    
    #INDEX
    @app.route('/')
    def ping():
        return "INDEX"
    
    @app.route('/propiedades')
    def getPropiedades():
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
                obj = Propiedad(id, ubicacion, habitaciones, fechaPublicacion, lat, longitud, [], []).tojson()
                for register in rows:
                    amenities = {"descripcion":register[6],"valor":register[7]}
                    imagen = register[8]
                    if amenities not in obj["amenities"]:
                        obj['amenities'].append(amenities)
                    if imagen not in obj["imagenes"]:
                        obj['imagenes'].append(imagen)
                response.append(obj)
        return jsonify(response)