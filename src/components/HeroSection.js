import * as React from "react"
import { Link } from "gatsby"

const HeroSection = (props) => {
  return (
    <section id={props.fields.scroll_anchor_id} className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 col-md-10">
            <div className="hero-content">
              <h1>{props.fields.headline}</h1>
              <p>{props.fields.subheadline}</p>

              <Link to={props.fields.button_url} target="_blank" className="main-btn btn-hover">{props.fields.button_label}</Link>
              <a to="https://buttercms.com/join/" target="_blank">Need an account?</a>
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="hero-image text-center text-lg-end">
              <img src={props.fields.image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

  export default HeroSection;
