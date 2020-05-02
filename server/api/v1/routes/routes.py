from flask import jsonify
from controllers import PublicacionCtrl

def routes(app, mysql):    
    #INDEX
    @app.route('/')
    def ping():
        return "INDEX"

    @app.route('/publicaciones')
    def get():
        return PublicacionCtrl.get(mysql)
    
    @app.route('/propiedades')
    def getPropiedades():
        cur = mysql.connection.cursor()
        cur.execute('CALL LISTAR_PROPIEDADES')
        data = cur.fetchall()
        return jsonify(data)
