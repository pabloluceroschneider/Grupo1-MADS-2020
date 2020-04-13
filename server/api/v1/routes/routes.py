from flask import Flask, jsonify

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
        return jsonify({"data":data})
