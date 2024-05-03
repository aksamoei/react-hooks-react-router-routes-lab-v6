import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
// import Home from "./pages/Home"
// import Directors from "./pages/Directors"
// import Actors from "./pages/Actors"
// import Movie from "./pages/Movie"

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router}/>);
