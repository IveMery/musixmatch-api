import React from "react";
import "./assets/css/style.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SongsContextProvider from "./contexts/SongsContexProvider";
import LyricsContextProvider from "./contexts/LyricsContextProvider";
import Header from "./component/Common/Header";
import Songs from "./component/Songs";
import Lyrics from "./component/Lyrics";
import NotFound from "./component/NotFound/NotFound";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <SongsContextProvider>
              <Songs />
            </SongsContextProvider>
          </Route>
          <Route path="/lyrics/track:commontrack_id">
            <LyricsContextProvider>
              <Lyrics />
            </LyricsContextProvider>
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
