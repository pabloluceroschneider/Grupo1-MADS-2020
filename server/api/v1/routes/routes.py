from flask import Flask, jsonify

def routes(app):    
    #INDEX
    @app.route('/')
    def ping():
        return "INDEX"

    @app.route('/hello')
    def hello():
        return jsonify([{"data":"hello ever"}])
