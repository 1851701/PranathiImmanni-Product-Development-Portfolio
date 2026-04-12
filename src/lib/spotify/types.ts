export type ListeningTrack = {
  status: "now_playing" | "recently_played";
  trackName: string;
  artistName: string;
  albumName: string;
  albumImageUrl: string;
  spotifyUrl: string;
};
