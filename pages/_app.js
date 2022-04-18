import "../styles/globals.css";
// import { Provider } from "react-redux";
import { wrapper } from "../redux/store";

function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout( <Component {...pageProps}/>);
}


export default wrapper.withRedux(MyApp);