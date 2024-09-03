interface ArtistData {
  totalSongs: number;
  artist: string;
  totalAlbums: number;
}

interface AlbumData {
  totalSongs: number;
  album: string;
}

interface GenreData {
  totalSongs: number;
  genre: string;
}

export interface StatsData {
  totalSongs: number;
  totalArtists: number;
  totalAlbums: number;
  totalGenres: number;
  songsAndAlbumsByArtist: ArtistData[];
  songsInEachAlbum: AlbumData[];
  songsInEachGenre: GenreData[];
}
