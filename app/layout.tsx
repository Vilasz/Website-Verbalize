import './globals.css';  // Import global styles
import Header from './components/Header';  // Importing your components
import Footer from './components/Footer';

export const metadata = {
  title: 'Verbalizæ',
  description: 'Your Gateway to Fluent English',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="App">
          <Header />
          {children}  {/* This is where page-specific content will be rendered */}
          <Footer />
        </div>
      </body>
    </html>
  );
}
