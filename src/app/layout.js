import "./globals.css";
import TanstackQueryProvider from "@/components/partials/provider/TanstackQueryProvider";
import { Toaster } from "react-hot-toast";
import { ModalProvider } from "@/components/partials/container/ModalContext";


export const metadata = {
  title: "Torino",
  description: "leave this part to us",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <ModalProvider>
      <body>
        <TanstackQueryProvider>{children}</TanstackQueryProvider>
        <Toaster />
      </body>
      </ModalProvider>
    </html>
  );
}
