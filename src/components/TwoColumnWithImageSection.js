import * as React from "react"
import { Link } from "gatsby"

const TwoColumnWithImageSection = (props) => {
  return (
    <section id={props.fields.scroll_anchor_id} className="cta-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 order-last order-lg-first">
            <div className={`cta-image ${props.fields.image_position}-image`}>
              <img src={props.fields.image} alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="cta-content-wrapper">
              <div className="section-title">
                <h2 className="mb-20">{props.fields.headline}</h2>
                <p dangerouslySetInnerHTML={{ __html: props.fields.subheadline }}></p>
                <a href={props.fields.button_url} className="main-btn btn-hover border-btn mt-30">{props.fields.button_label}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

  export default TwoColumnWithImageSection;
