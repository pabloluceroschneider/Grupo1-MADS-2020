from flask import Flask, jsonify
import json

class Publicacion:
    def __init__(self, data):
        self.id = data[0]
        self.location = data[1]
        self.roomApartment = data[2]
        self.price = data[3]
        self.owner = data[4]
        self.datePublished = data[5]
    
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
    

def routes(app, mysql):    
    #INDEX
    @app.route('/')
    def ping():
        return "INDEX"

    @app.route('/hello')
    def hello():
        cur = mysql.connection.cursor()
        cur.execute('CALL LISTAR_PUBLICACIONES')
        data = cur.fetchall()
        response = []
        for register in data:
            obj = Publicacion(register).tojson()
            response.append(obj)
        return jsonify({ "data" : response })
