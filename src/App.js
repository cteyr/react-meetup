import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import { MeetupsProvider } from "./context/MeetupsProvider";

function App() {
  return (
    <div data-test="app">
      <BrowserRouter>
        <MeetupsProvider>
          <MainNavigation setPage={<AllMeetupsPage />} />
          <Layout>
            <Routes>
              <Route index element={<AllMeetupsPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/meetups" element={<AllMeetupsPage />} />
              <Route path="/meetups/add" element={<NewMeetupsPage />} />
            </Routes>
          </Layout>
        </MeetupsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
