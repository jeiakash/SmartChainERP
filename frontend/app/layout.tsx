import { ThemeProvider } from "@/components/contexts/ThemeProvider"
import type { Metadata } from "next"
import "@/styles/global.css"
import { Navbar } from "@/components/navbar"

export const metadata: Metadata = {
  title: "Smartchain ERP Software",
  description: "Starting something new!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen">
            <Navbar />
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
