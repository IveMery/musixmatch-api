import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SongsContextProvider from "./contexts/SongsContext";
import LyricsContextProvider from "./contexts/LyricsContext";
import Header from "./component/Common/Header";
import Songs from "./component/Songs";
import Lyrics from "./component/Lyrics";
import NotFound from "./component/NotFound/NotFound";
import "./assets/css/style.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route exact path="/">
        <SongsContextProvider>
          <Songs />
        </SongsContextProvider>
      </Route>
      <Route path="/lyrics/track/:commontrack_id">
        <LyricsContextProvider>
          <Lyrics />
        </LyricsContextProvider>
      </Route>
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;