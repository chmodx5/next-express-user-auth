import { PageContainer } from "../components";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PageContainer>
      <Component {...pageProps} />
    </PageContainer>
  );
}

export default MyApp;
