'use client';
// import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/Redux/store";
import { QueryClientProvider } from "react-query";
import { queryClient } from "../queryClient";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
      </QueryClientProvider>
    </Provider>
  );
}
