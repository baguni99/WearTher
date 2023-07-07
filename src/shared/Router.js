import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import PostPage from "../pages/Posts";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Posts" element={<PostPage />} />
        
      </Routes>
    </Router>
  );
};

export default AppRouter;