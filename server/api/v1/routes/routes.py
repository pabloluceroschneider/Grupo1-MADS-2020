from flask import Flask, jsonify
import json
from controllers import PublicacionCtrl






def routes(app, mysql):    
    #INDEX
    @app.route('/')
    def ping():
        return "INDEX"

    @app.route('/publicaciones')
    def get():
        return PublicacionCtrl.get(mysql)
