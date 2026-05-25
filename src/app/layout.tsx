import './globals.css';
import './global.css';
import Header from './ui/header';
import Nav from './ui/nav';
import Aside from './ui/aside';
import Article from './ui/article';
import Footer from './ui/footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <Nav />
        <Article>
          {children}
        </Article>
        <Aside />
        <Footer />
      </body>
    </html>
  );
}
