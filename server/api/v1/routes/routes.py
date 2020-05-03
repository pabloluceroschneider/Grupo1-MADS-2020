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
        rows = list(filter(lambda x: x[0]==1,data))
        id, ubicacion, habitaciones, fechaPublicacion, lat, longitud, amenities, value, imagenes = rows[0]
        obj = Propiedad(id, ubicacion, habitaciones, fechaPublicacion, lat, longitud, [], []).tojson()
        for register in rows:
            amenities = {"descripcion":register[6],"valor":register[7]}
            imagen = register[8]
            if amenities not in obj["amenities"]:
                obj['amenities'].append(amenities)
            if imagen not in obj["imagenes"]:
                obj['imagenes'].append(imagen)
            # obj['imagenes'].append(imagen)


        # for register in data:
        #     id, ubicacion, habitaciones, fechaPublicacion, lat, longitud, amenities, value, imagenes = register
        #     obj = Propiedad(id, ubicacion, habitaciones, fechaPublicacion, lat, longitud, amenities, value, imagenes).tojson()
        #     response.append(obj)

        # for i in response:
        #     print(i['amenities'])

        return jsonify(obj)

    # @app.route('/bizarra')
    # def getBizarra():
    #     cur = mysql.connection.cursor()
    #     cur.execute('SELECT * FROM PROPIEDADES')
    #     data = cur.fetchall()
    #     reg = []
    #     for register in data:
    #         id, ubicacion, habitaciones, fechaPublicacion, lat, longitud, usuario = register
    #         json = { 
    #             "id" : id, 
    #             "ubicacion" : ubicacion,
    #             "habitaciones":  habitaciones,
    #             "fechaPublicacion" : fechaPublicacion,
    #             "lat": lat,
    #             "longitud": longitud,
    #             "amenities": [],
    #             "imagenes": [],
    #         }
    #         cur = mysql.connection.cursor()
    #         cur.execute('SELECT * FROM PROPIEDADESXAMENITIES WHERE IDPROPIEDADES = 1')
    #         data = cur.fetchall()
    #         print(data)

    #         reg.append(json)
    #     return jsonify(reg)