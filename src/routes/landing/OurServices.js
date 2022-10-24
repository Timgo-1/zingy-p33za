import React from "react";
import art1 from "../../assets/images/services/img1.png";
import art2 from "../../assets/images/services/img2.png";
import art3 from "../../assets/images/services/img3.png";

export default class OurServices extends React.Component {
  MouseEnter() {
    const ServiceImgGroup = document.querySelectorAll(".service-img");
    ServiceImgGroup.forEach((ServiceImg) => {
      ServiceImg.addEventListener("mouseenter", function () {
        ServiceImg.classList.add("active-img");
      });
    });
  }
  MouseLeave() {
    const ServiceImgGroup = document.querySelectorAll(".service-img");
    ServiceImgGroup.forEach((ServiceImg) => {
      ServiceImg.addEventListener("mouseleave", function () {
        ServiceImg.classList.remove("active-img");
      });
    });
  }
  render() {
    return (
      <article className="section-3 flex-container flex-column txt-center">
        <h2 className="pop-font">Our Services</h2>
        <p className="pop-font section-description">
          Zingy P33za provides services across all states. We provide various
          foods and drinks, you choose! What makes us special is our teams of
          professionals with extensive knowledge of all cuisine that we have to
          offer. Zingy P33za holds the market of the pizza industry and
          continuously offers more than pizza!
        </p>
        <section className="services-grid  flex-container flex-column">
          <div className="service-list flex-container flex-column">
            <img
              className="service-img"
              onMouseEnter={this.MouseEnter}
              onMouseLeave={this.MouseLeave}
              src={art1}
              alt=""
            />
            <div>
              <h3 className="pop-font">Organic Food</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                consequat nibh qua. Pellentesque ac leo at elit consequat
                aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vivamus consequat nibh qua.
              </p>
            </div>
          </div>
          <div className="service-list flex-container flex-column">
            <img
              className="service-img"
              onMouseEnter={this.MouseEnter}
              onMouseLeave={this.MouseLeave}
              src={art2}
              alt=""
            />
            <div>
              <h3 className="pop-font">Express Delivery</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                consequat nibh qua. Pellentesque ac leo at elit consequat
                aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vivamus consequat nibh qua.
              </p>
            </div>
          </div>
          <div className="service-list flex-container flex-column">
            <img
              className="service-img"
              onMouseEnter={this.MouseEnter}
              onMouseLeave={this.MouseLeave}
              src={art3}
              alt=""
            />
            <div>
              <h3 className="pop-font">Unforgetable Taste</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                consequat nibh qua. Pellentesque ac leo at elit consequat
                aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Vivamus consequat nibh qua.
              </p>
            </div>
          </div>
        </section>
      </article>
    );
  }
}
