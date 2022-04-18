// import Footer from "./Footer";
import Navigation from "./Navigation";

export default function Layout({ children, options }) {
  return (
    <>
      <Navigation options={options} />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}
