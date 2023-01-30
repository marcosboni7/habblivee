import './globals.css'

import Header from 'components/common/Header';
import Footer from 'components/common/Footer';

const Layout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="pt-br">
      <head />
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;