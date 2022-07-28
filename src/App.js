import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import {
  ALL_MEETUP_PAGE,
  FAVORITES_PAGE,
  NEW_MEETUP_PAGE,
} from "./utils/constants";

import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  const [page, setPage] = useState(ALL_MEETUP_PAGE);

  return (
    <div data-test="app">
      <MainNavigation setPage={setPage} />
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route index element={<AllMeetupsPage />} />
            <Route path="/meetups_favorites" element={<FavoritesPage />} />
            <Route path="/all_meetups" element={<AllMeetupsPage />} />
            <Route path="/add_meetups" element={<NewMeetupsPage />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
