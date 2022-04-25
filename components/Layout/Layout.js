// import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Layout({ children, options, pageTitle }) {
  return (
    <>
      <Navigation pageTitle={pageTitle} options={options} />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
