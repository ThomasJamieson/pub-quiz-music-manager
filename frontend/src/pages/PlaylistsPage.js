import { useEffect, useState } from "react";

function PlaylistsPage() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/playlists")
      .then((res) => res.json())
      .then((data) => setPlaylists(data));
  }, []);

  return (
    <div>
      <h1>Your Playlists</h1>
      <table style={{border:"1px solid black"}}>
        <tr>
          <th>Song</th>
          <th>Artist</th>
          <th>Start Time</th>
          <th>Duration</th>
        </tr>
      {playlists.map((item, index) => (
        <tr>
          <th>{item.name}</th>
          <th>{item.artist}</th>
          <th>{item.start}</th>
          <th>{item.duration}</th>
        </tr>
      ))}
      </table>
    </div>
  );
}

export default PlaylistsPage;