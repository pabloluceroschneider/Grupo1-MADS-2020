import sys
sys.path.insert(1, './routes')
from flask import Flask, jsonify
from routes import routes
app = Flask(__name__)
PORT = 5000

routes(app)

if (__name__) == '__main__':
    app.run(debug=True,port=PORT)