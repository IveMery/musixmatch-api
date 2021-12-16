import React, { createContext, useEffect, useState } from "react";
import { chartTracksGet, trackSearch } from "../constants";

export const SongsContext = createContext(); // create context para hacer el provider

const SongsContextProvider = ({ children }) => {
  const [doneFetch, setDoneFetch] = useState();
  const [currentQTrack, setCurrentQTrack] = useState("");
  const [text, setText] = useState("Top songs");
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    getTopTrack();
  }, []);

  const getTopTrack = () => {
    fetch(chartTracksGet())
      .then((response) => response.json())
      .then((data) => {
        const { track_list } = data.message.body;
        setTracks(track_list);
        setDoneFetch(true);
        console.log(tracks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTracks = (q) => {
    fetch(trackSearch(q))
      .then((res) => res.json())
      .then((data) => {
        const { track_list } = data.message.body;
        setDoneFetch(true);
        setTracks(track_list);
        setText(track_list.length ? " Results" : "No results");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const validateQTrack = (
    e,
    q_track = document.querySelector("#q_track").value.toLowerCase().trim()
  ) => {
    if (e.type === "keypress" && e.key !== "Enter") return;
    const words = q_track.match(/\w+/g);
    q_track = words && words.join(" ");
    if (q_track && q_track !== currentQTrack) {
      setCurrentQTrack(q_track);
      setDoneFetch(false);
      getTracks(q_track);
    }
  };

  return (
    <SongsContext.Provider
      value={{
        doneFetch,
        text,
        tracks,
        validateQTrack,
      }}
    >
      {children}
    </SongsContext.Provider>
  );
};

export default SongsContextProvider;
