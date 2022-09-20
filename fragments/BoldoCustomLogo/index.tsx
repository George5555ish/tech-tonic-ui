import React from "react"; 

interface LogoProps {
  textColor: string;
  logoColor: string;
  href?: string;
}
function BoldoCustomLogo({ href, textColor, logoColor }: LogoProps) {
  return (
    <a href={href ? href : "#"} className="logo flex-item">
      <div>
        <div className="logo-child" style={{backgroundColor: logoColor}} />
        <div className="logo-child logo_extended"  style={{backgroundColor: logoColor}}/>
      </div>
      <p className="logo_text fs_logo_lg fw_nav_lg" style={{color: textColor}}>Boldo</p>
    </a>
  );
}

export default BoldoCustomLogo;
