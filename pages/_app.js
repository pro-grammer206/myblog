import "../styles/globals.css";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <main>
        <Component {...pageProps} />
      </main>
      <footer>
        <p>Made by vipin {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}

export default MyApp;
