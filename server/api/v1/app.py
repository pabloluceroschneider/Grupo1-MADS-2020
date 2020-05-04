import sys
sys.path.insert(1, './common')
sys.path.insert(2, './routes')
sys.path.insert(3, './controllers')
sys.path.insert(4, './models')
from flask import Flask
from flask_mysqldb import MySQL
from flask_cors import CORS
from routes import routes
from common import env
PORT = 5000
DEBUG = True

# Inicializa el servidor
app = Flask(__name__)
CORS(app)
app = env.config(app)


mysql = MySQL(app)

# Instancia las rutas
routes(app, mysql)

if (__name__) == '__main__':
    # Ejecuta servidor
    app.run(debug=DEBUG,port=PORT)