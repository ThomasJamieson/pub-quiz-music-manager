from .spotify_routes import bp as spotify_bp

def register_blueprints(app):
    app.register_blueprint(spotify_bp)