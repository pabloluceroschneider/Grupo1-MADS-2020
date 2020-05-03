from flask import jsonify
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
    def __init__(self, id, ubicacion, habitaciones, fechaPublicacion, lat, longitud, amenities, value, imagenes):
        self.id = id
        self.ubicacion = ubicacion
        self.habitaciones = habitaciones
        self.fechaPublicacion = fechaPublicacion
        self.lat = lat
        self.longitud = longitud
        self.amenities = amenities
        self.value = value
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
            "value": self.value,
            "imagenes": self.amenities
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
        for register in data:
            id, ubicacion, habitaciones, fechaPublicacion, lat, longitud, amenities, value, imagenes = register
            obj = Propiedad(id, ubicacion, habitaciones, fechaPublicacion, lat, longitud, amenities, value, imagenes).tojson()
            response.append(obj)
        return jsonify(response)
