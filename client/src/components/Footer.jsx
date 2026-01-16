import { Link } from "react-router";

export default function Footer() {
  return (
    <>
      <footer>
        <section className="Freepik">
          <Link
            to={
              "https://www.flaticon.com/free-icon/recipe-book_823214?term=recipe+book&page=1&position=39&origin=search&related_id=823214"
            }
            aria-label="Recipe book icon"
          >
            favicon by freepik - flaticon
          </Link>
        </section>

        <section className="socials">
          <Link
            aria-label="Facebook logo"
            className="fa fa-facebook"
            to={"https://www.facebook.com"}
          ></Link>

          <Link
            aria-label="Instagram logo"
            className="fa fa-instagram"
            to={"https://www.instagram.com"}
          ></Link>
        </section>

        <Link
          aria-label="Twitter logo"
          className="fa fa-twitter"
          to={"https://www.twitter.com"}
        ></Link>

        <section className="creator">
          <Link to={"https://github.com/clarioncbbii"}>
            designed and built by clarioncbbii
          </Link>
        </section>
      </footer>
    </>
  );
}
