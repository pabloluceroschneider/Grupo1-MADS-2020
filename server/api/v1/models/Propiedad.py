class Propiedad:
    def __init__(self, id, ubicacion, habitaciones, fechaPublicacion, lat, longitud, amenities, imagenes):
        self.id = id
        self.ubicacion = ubicacion
        self.habitaciones = habitaciones
        self.fechaPublicacion = fechaPublicacion
        self.lat = lat
        self.longitud = longitud
        self.amenities = amenities
        self.imagenes = imagenes

    
    def tojson(self):
        json = { 
            "id" : self.id, 
            "ubicacion" : self.ubicacion,
            "habitaciones":  self.habitaciones,
            "fechaPublicacion" : self.fechaPublicacion,
            "lat": self.lat,
            "longitud": self.longitud,
            "amenities": self.amenities,
            "imagenes": self.imagenes
        } 
        return json