from flask import jsonify
import json
from controllers import PropiedadesCtrl

def routes(app, mysql):    
    #INDEX
    @app.route('/')
    def ping():
        return "INDEX"
    
    @app.route('/propiedades')
    def getPropiedades():
        return PropiedadesCtrl.get(mysql)
