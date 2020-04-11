from flask import Flask, jsonify
app = Flask(__name__)

@app.route('/')
def index():
    return 'Index Page'

@app.route('/hello')
def hello():
    return jsonify([{"data":"hello world"}])

if (__name__) == '__main__':
    app.run(debug=True,port=4000)