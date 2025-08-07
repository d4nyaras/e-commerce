import { AuthProvider } from "@/context/AuthContext";
import "../(main)/globals.css";
import { Toaster } from "react-hot-toast";

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className="h-screen bg-gray-50">
        <Toaster position="top-center" reverseOrder={false} />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
