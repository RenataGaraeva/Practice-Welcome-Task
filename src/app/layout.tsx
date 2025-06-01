import { ProviderStore } from "@/app/provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ProviderStore>{children}</ProviderStore>
      </body>
    </html>
  );
}
