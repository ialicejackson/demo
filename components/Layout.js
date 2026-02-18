
import Header from "./Header";// Import your header component
import Footer from './Footer'; // Import your footer component

function Layout({ children}) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer/>
      {/* <CookieConsentBanner /> */}
    </>
  );
}

export default Layout;
