import React, { useEffect, useRef } from "react"
import { gsap, Power3 } from "gsap"
import { Container } from "../components"
import "../styles/styles.scss"
import "../styles/home.css"
import arrow_down from "../images/down-chevron.png"

const IndexPage = () => {
  /* Home REF ==== */
  const title = useRef(null)
  const description = useRef(null)
  const sl1 = useRef(null)
  const sl2 = useRef(null)
  const sl3 = useRef(null)
  const separator = useRef(null)
  const scroller = useRef(null)

  /* Timeline  === */
  useEffect(() => {
    gsap.from(
      [
        title.current,
        description.current,
        sl1.current,
        sl2.current,
        sl3.current,
      ],
      {
        duration: 1.6,
        ease: Power3.easeOut,
        y: 164,
        autoAlpha: 0,
        stagger: 0.4,
      }
    )

    gsap.from(scroller.current, {
      duration: 1,
      y: -220,
    })
  }, [title, description, sl1, sl2, sl3, separator, scroller])

  return (
    <Container viewHeight="100vh">
      <div
        className="home d-flex justify-content-center align-items-center"
        id="home"
      >
        <div className="profil">
          <div className="w-user">
            <div className="user-profil" ref={title}>
              Philippe Tedajo
            </div>
          </div>
          <div className="w-description">
            <div className="description-profil" ref={description}>
              Web developer
            </div>
          </div>

          {/*<div className="separator-bar" ref={separator} />*/}

          <div className="w-slogan">
            <div className="slogan" ref={sl1}>
              Bulding universe
            </div>
          </div>

          <div className="w-slogan">
            <div className="slogan" ref={sl2}>
              one pixel at a
            </div>
          </div>

          <div className="w-slogan">
            <div className="slogan" ref={sl3}>
              time
            </div>
          </div>
        </div>
      </div>
      <div className="arrow-down">
        <img
          style={{ height: "28px" }}
          src={arrow_down}
          alt="arrow-down"
          ref={scroller}
        />
      </div>
    </Container>
  )
}

export default IndexPage