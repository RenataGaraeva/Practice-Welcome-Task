import "./globals.css";
import {ProviderStore} from "@/app/provider/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <ProviderStore>
        {children}
        </ProviderStore>
      </body>
    </html>
  );
}
