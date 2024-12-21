import React, { ReactNode } from "react";
import StreamVideoProvider from "@/providers/StreamClientProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
}
