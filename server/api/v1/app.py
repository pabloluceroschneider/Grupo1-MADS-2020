import sys
sys.path.insert(1, './routes')
from flask import Flask, jsonify
from routes import routes
PORT = 5000
DEBUG = True

# Inicializa el servidor
app = Flask(__name__)

# Instancia las rutas
routes(app)

if (__name__) == '__main__':
    # Ejecuta servidor
    app.run(debug=DEBUG,port=PORT)