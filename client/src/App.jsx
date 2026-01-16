//TODO: Set up a routing system and import relevant components
//*Note: I advise you have a separate component for your root route too ("/")
import "./App.css";
import { Routes, Route } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Recipes from "./components/Recipes";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <>
      <Header />
      <Footer />

      {/* routing system */}
      <Routes>
        {/* static route for all 'add recipe' page */}
        <Route element={<Form />} path={"/add-recipe"} />
        {/* static route for 'all recipes page, w/ a nested dynamic route */}
        <Route element={<Recipes />} path={"/all-recipes"}>
          <Route element={<RecipeDetails />} path={":id"} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

// ================================================================ //

//*Note: In the componenets folder you have the minimum amount of componenets to make your app work, but I really recommend you make the most of the component system (use props!!!)

//Extra: Though it's not a requirement but I think the users would like some conditional rendering to make the UI less cluttered...
