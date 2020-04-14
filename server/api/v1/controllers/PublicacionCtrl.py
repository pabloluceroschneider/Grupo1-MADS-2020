from flask import Flask, jsonify
import json

class Publicacion:
    def __init__(self, id, location, roomApartment, price, owner, datePublished):
        self.id : int = id
        self.location : str = location
        self.roomApartment : str = roomApartment
        self.price : float = price
        self.owner : str = owner
        self.datePublished : str = datePublished
    
    def tojson(self):
        json = { 
            "id" : self.id, 
            "location" : self.location,
            "roomApartment":  self.roomApartment,
            "price" : self.price,
            "owner": self.owner,
            "datePublished": self.datePublished
        } 
        return json

def get(mysql):
        cur = mysql.connection.cursor()
        cur.execute('CALL LISTAR_PUBLICACIONES')
        data = cur.fetchall()
        response = []
        for register in data:
            id, location, roomApartment, price, owner, datePublished = register
            obj = Publicacion(id, location, roomApartment, price, owner, datePublished).tojson()
            response.append(obj)
        return jsonify({ "data" : response })