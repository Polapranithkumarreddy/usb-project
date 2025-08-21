
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";

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
        <Navbar />
        {children}
        <footer className=" bg-gray-200 py-6 text-center text-gray-600">
  <p>
    &copy; {new Date().getFullYear()} Supraja Technologies. All rights reserved
  </p>
</footer>
      </body>
      

    </html>
  );
}
