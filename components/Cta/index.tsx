import React from 'react'

function Cta() {
  return (
    <section>
        <div className="container default_padding_main | cta-wrapper">
       
          <div className="bg_primary_800 text_neutral_100 | cta">
          <div className="overlay_circle_sm" />
            <p className="text_neutral_400 fs_heading_lg fw_body">An enterprise template to ramp up your company website</p>
            <form>
              <input type="text" aria-label="email-address" /> 
              <button className="bg_accent_200 fs_btn fw_btn_lg | btn-accent" type="submit">Start now</button>
            </form>
          </div>
        </div>
      </section>
  )
}

export default Cta