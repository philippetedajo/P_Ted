import React, { useState } from "react"
import "../styles/styles.scss"
import "../styles/components.scss"
import "../static/fonts/fonts.scss"
import { Home, Me, Contact } from "../sections"

const Index = () => {
  return (
    <>
      <Home />
      <Me />
      <Contact />
    </>
  )
}

export default Index
