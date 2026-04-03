import './globals.css';

export const metadata = {
  title: 'Produktu Katalogs — CSR',
  description: 'Klienta puses renderēšana — Next.js PTL',
};

export default function RootLayout({ children }) {
  return (
    <html lang="lv">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: `
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', function() {
              navigator.serviceWorker.register('/sw.js');
            });
          }
        `}} />
        {children}
      </body>
    </html>
  );
}
