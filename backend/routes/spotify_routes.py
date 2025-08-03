from flask import Blueprint, jsonify

bp = Blueprint("spotify", __name__, url_prefix="/spotify")

@bp.route("/playlists")
def playlists():
    return jsonify({"message": "here's your playlists"})