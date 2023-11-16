"use client"

import Header from "@/components/ui/header"
import Footer from "@/components/ui/footer"

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />

      <main className="grow">{children}</main>

      <Footer />
    </>
  )
}
