import "./globals.css";
import type { Metadata } from "next";
import "@mantine/core/styles.css";
import "@mantine/carousel/styles.css";
import { MantineProvider, ColorSchemeScript, createTheme } from "@mantine/core";
import Providers from "./utils/providers";
import theme from "./theme";

export const metadata: Metadata = {
  title: "Pokelist",
  description: "A list of Pokemon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme} defaultColorScheme={"light"}>
          <Providers>{children}</Providers>
        </MantineProvider>
      </body>
    </html>
  );
}
