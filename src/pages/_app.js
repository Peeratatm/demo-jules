import "@/styles/globals.css";
import Navbar from '../components/Navbar.jsx'; // Path based on typical Next.js structure

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
