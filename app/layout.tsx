import "./globals.scss";

import { createClient } from "@/prismicio";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const { data } = await client.getSingle("settings");
  return {
    title: data.metadata_title,
    description: data.metadata_description,
    openGraph: {
      images: [data?.metadata_image_thumbnail?.url || ""],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
