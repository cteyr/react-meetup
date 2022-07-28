import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div data-test="app">
      <MainNavigation setPage={<AllMeetupsPage />} />
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
