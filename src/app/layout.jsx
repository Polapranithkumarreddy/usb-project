
import "./globals.css";


export const metadata = {
  title: "USB-PROJECT",
  description: "This is Usb-Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className=''
      >
        {children}
      </body>
    </html>
  );
}
