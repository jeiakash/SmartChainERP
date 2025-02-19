import { ThemeProvider } from "@/components/contexts/ThemeProvider"
import type { Metadata } from "next"
import "@/styles/global.css"

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
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
