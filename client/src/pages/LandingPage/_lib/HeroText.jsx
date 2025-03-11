import React from "react";
import MainSpan from "./MainSpan";
import Paragraph from "./Paragraph";
import NavButton from "./Header/NavButton";

function HeroText(props, width = 19){
    return (
        <div className="hero-text">
          <span>
            {props.heading}
            <span>
              <br />
              {props.subheading && props.subheading}
            </span>
          </span>
          {/* <MainSpan title={props.heading}/>
          {props.subheading && <MainSpan title={props.subheading}/>} */}
          <Paragraph para={props.para} />
          <NavButton className={props.btnCls} name={props.btnHead} image={props.btnImg} width={props.width} height={20}/>

        </div>
    );
}

export default HeroText;