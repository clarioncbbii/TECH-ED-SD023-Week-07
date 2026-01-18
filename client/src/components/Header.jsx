import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <header>
        <div>
          <img className="logo" src="./assets/logo.png" alt="Chop&Nyam logo" />
        </div>
        <h1>RECIPES</h1>
        {/* POTENTIALLY SPLIT THIS OUT INTO ITS OWN COMPONENT */}
        <section className="nav">
          <nav>
            <Link to={"/"}>HOME</Link>
            <Link to={"/all-recipes"}>ALL RECIPES</Link>
            <Link to={"/add-recipe"}>ADD A NEW RECIPE</Link>
          </nav>
        </section>
      </header>
    </>
  );
}
