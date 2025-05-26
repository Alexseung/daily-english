import './globals.css';
import Header from '@/components/Header';

export const metadata = {
  title: 'daily english',
  description: '매일 하나의 영어 표현을 외워보세요',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
