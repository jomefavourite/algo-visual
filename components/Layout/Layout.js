// import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import Navigation from "./Navigation";

export default function Layout({ children, options, pageTitle }) {
  return (
    <>
      <Toaster position='top-center' reverseOrder={false} />
      <Navigation pageTitle={pageTitle} options={options} />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
