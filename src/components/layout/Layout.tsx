import { type JSX, type ReactNode } from "react";
import { Navbar, Footer } from ".";
import ScrollToTop from "../ui/ScrollToTop";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">{children}</main>
      <ScrollToTop />

      <Footer />
    </div>
  );
};

export default Layout;
