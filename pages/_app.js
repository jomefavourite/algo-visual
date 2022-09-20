import "../styles/globals.css";
// import { Provider } from "react-redux";
// import { ThemeProvider } from "theme-ui";
// import { wrapper } from "../redux/store";
// import theme from "../theme";

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  // return (
  //   <ThemeProvider theme={theme}>
  //     {getLayout(<Component {...pageProps} />)}
  //   </ThemeProvider>
  // );
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
