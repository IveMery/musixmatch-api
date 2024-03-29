// const cors_anywhere = "https://cors-anywhere.herokuapp.com/";
// const base_url = "https://api.musixmatch.com/ws/1.1/";
// const chart_tracks_get = "chart.tracks.get?chart_name=top&page=1&page_size=10&f_has_lyrics=1";
// const track_search = "track.search?q_track=";
// const track_search_params="&page=1&page_size=10&f_has_lyrics=1&s_track_rating=desc";
// const tracks_lyrics_get="track.lyrics.get?commontrack_id=";
// const track_get="track.get?commontrack_id=";
// const api_key = "&537f9fc0aa5d60fdeaffcf7270e8a557";

// export const chartTracksGet = () => `${ cors_anywhere }${base_url}${ chart_tracks_get }${ api_key }`;
// export const trackSearch = q_track => `${ cors_anywhere }${base_url}${ track_search }${ q_track  }${ track_search_params }${ api_key }`;
// export const trackLyricsGet = commontrack_id => `${ cors_anywhere }${base_url}${ tracks_lyrics_get }${ commontrack_id }${ api_key }`;
// export const trackGet = commontrack_id => `${ cors_anywhere }${ base_url }${ track_get }${ commontrack_id }${ api_key }`;


const cors_anywhere = "https://cors-anywhere.herokuapp.com/";
const base_url = "https://api.musixmatch.com/ws/1.1/";
const chart_tracks_get = "chart.tracks.get?chart_name=top&page=1&page_size=10&f_has_lyrics=1";
const track_search = "track.search?q_track=";
const track_search_params="&page=1&page_size=10&f_has_lyrics=1&s_track_rating=desc";
const tracks_lyrics_get="track.lyrics.get?commontrack_id=";
const track_get="track.get?commontrack_id=";
const api_key="&apikey=537f9fc0aa5d60fdeaffcf7270e8a557";

export const chartTracksGet = () => `${ cors_anywhere }${base_url}${ chart_tracks_get }${ api_key }`;
export const trackSearch = q_track => `${ cors_anywhere }${base_url}${ track_search }${ q_track  }${ track_search_params }${ api_key }`;
export const trackLyricsGet = commontrack_id => `${ cors_anywhere }${base_url}${ tracks_lyrics_get }${ commontrack_id }${ api_key }`;
export const trackGet = commontrack_id => `${ cors_anywhere }${ base_url }${ track_get }${ commontrack_id }${ api_key }`;