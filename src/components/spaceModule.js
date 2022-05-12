import * as React from "react"
import * as spaceModule from "./spaceModule.module.scss"
import * as cls from "../pages/common.module.scss"

const SpaceModule = (props) => {
  switch(props.size){
    case 'xl':
      return (
        <div className={spaceModule.spaceModule_xl}></div>
      )
    case 'l':
      return (
        <div className={spaceModule.spaceModule_l}></div>
      )
    case 'm':
      return (
        <div className={spaceModule.spaceModule_m}></div>
      )
    case 's':
      return (
        <div className={spaceModule.spaceModule_s}></div>
      )
    case 'xs':
      return (
        <div className={spaceModule.spaceModule_xs}></div>
      )
  }
}

export default SpaceModule 

