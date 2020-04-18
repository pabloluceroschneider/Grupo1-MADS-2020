from flask import jsonify
from models import Publicacion

def get(mysql):
        cur = mysql.connection.cursor()
        cur.execute('CALL LISTAR_PUBLICACIONES')
        data = cur.fetchall()
        response = []
        for register in data:
            id, location, roomApartment, price, owner, datePublished = register
            obj = Publicacion.Publicacion(id, location, roomApartment, price, owner, datePublished).tojson()
            response.append(obj)
        return jsonify({ "data" : response })