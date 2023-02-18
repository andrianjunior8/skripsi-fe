import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
("../components/Navbar");

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showHeader =
    router.pathname === "/login" || router.pathname === "/signup";

  return (
    <>
      <div className="bg-[#222222] min-w-screen min-h-screen">
        {showHeader ? <></> : <Navbar />}
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
