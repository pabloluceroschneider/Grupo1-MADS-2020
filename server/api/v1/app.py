import sys
sys.path.insert(1, './routes')
sys.path.insert(1, './controllers')
from flask import Flask, jsonify
from flask_mysqldb import MySQL
from routes import routes
PORT = 5000
DEBUG = True

# Inicializa el servidor
app = Flask(__name__)
app.config['MYSQL_HOST']        = 'localhost'
app.config['MYSQL_USER']        = 'root'
app.config['MYSQL_PASSWORD']    = 'gD*1d+dvl'
app.config['MYSQL_DB']          = 'mads'

mysql = MySQL(app)

# Instancia las rutas
routes(app, mysql)

if (__name__) == '__main__':
    # Ejecuta servidor
    app.run(debug=DEBUG,port=PORT)