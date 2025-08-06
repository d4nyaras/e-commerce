import { AuthProvider } from "@/context/AuthContext";
import "../(main)/globals.css";
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body
        className="h-screen bg-gray-50
"
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
