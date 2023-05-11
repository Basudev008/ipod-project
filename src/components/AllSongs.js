function AllSongs() {
  return (
    <div className="fullScreen">
      All Songs
      <br />
      <audio
        src="http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg"
        controls
      />
      <audio
        src="http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a"
        controls
      />
      <audio
        src="http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/theme_01.mp3"
        controls
      />
    </div>
  );
}

export default AllSongs;
