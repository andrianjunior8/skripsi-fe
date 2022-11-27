import "../styles/globals.css";
import Navbar from "../components/Navbar";
("../components/Navbar");
function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className="bg-[#222222] min-w-screen min-h-screen">
        <Navbar />
        <div className="py-20">
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}

export default MyApp;
