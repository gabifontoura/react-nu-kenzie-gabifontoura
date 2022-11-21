import React from "react"
import "../../App.css"
import "./styles.css"

import logoSecondary from "../../assets/logoSecondary.svg"
import ButtonDefault from "../Buttons/ButtonDefault"

const Header = ({setLogin}) => {
  return (
    <div className="header flex between">
      <img src={logoSecondary} alt="NuKenzie" />
      <ButtonDefault className="btnDefault" content="Início" onClick={()=> setLogin(false) }/>
      
    </div>
  )
}

export default Header