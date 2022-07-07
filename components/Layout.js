// import { PageContainer } from "../lib/RMT_Common_Components/commonComponents/Containers";
import { PageContainer } from "../components/Containers";
// import Footer from "../lib/RMT_Common_Components/commonComponents/footer";
// import { Header } from "../lib/RMT_Common_Components/commonComponents/Header";
/**
 * The default layout for all pages.
 */
export const Layout = ({ children }) => {
  return (
    <PageContainer>
      {/* <Header {...header} /> */}
      {children}
      {/* <Footer {...footer} /> */}
    </PageContainer>
  );
};
