


import React from "react"
import "./styles.css"
import imgStart from "../../assets/imgStart.svg"
import logo from "../../assets/logo.svg"
import ButtonPrimary from "../../components/Buttons/ButtonPrimary"


const LandingPage = ({setLogin}) => {
  return (
    <main className="mainStart flex gap-3rem">
      <section className="intro flex column gap-2rem">
        <figure>
          <img src={logo} alt="NuKenzie" />
        </figure>
        <h1 className="colorWhite title-1">Centralize o controle das suas finanças</h1>
        <p className="colorWhite text-1">de forma rápida e segura</p>
        <ButtonPrimary content="Iniciar" onClick={ () => setLogin(true) }/>

      </section>

      <img className= "bgImg" src={imgStart} alt="" />

    </main>
  )
}

export default LandingPage