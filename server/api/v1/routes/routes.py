import flask

def routes(app):    
    #INDEX
    @app.route('/')
    def ping():
        return "INDEX"

