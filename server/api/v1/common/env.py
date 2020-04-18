
def config(app):
    app.config['MYSQL_HOST']        = 'localhost'
    app.config['MYSQL_USER']        = 'root'
    app.config['MYSQL_PASSWORD']    = 'root'
    app.config['MYSQL_DB']          = 'mads'
    return app