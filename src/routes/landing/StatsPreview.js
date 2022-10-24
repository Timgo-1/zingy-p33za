import React from "react";
import art1 from "../../assets/images/statpreviews/img1.png";
import art2 from "../../assets/images/statpreviews/img2.png";
import art3 from "../../assets/images/statpreviews/img3.png";
import art4 from "../../assets/images/statpreviews/img4.png";

export default class StatsPreview extends React.Component {
  MouseEnter() {
    const ServiceImgGroup = document.querySelectorAll(".hightlight-img");
    ServiceImgGroup.forEach((ServiceImg) => {
      ServiceImg.addEventListener("mouseenter", function () {
        ServiceImg.classList.add("active-img");
      });
    });
  }
  MouseLeave() {
    const ServiceImgGroup = document.querySelectorAll(".hightlight-img");
    ServiceImgGroup.forEach((ServiceImg) => {
      ServiceImg.addEventListener("mouseleave", function () {
        ServiceImg.classList.remove("active-img");
      });
    });
  }
  render() {
    return (
      <article className="section-7 flex-container flex-column txt-center">
        <section className="highlights flex-container flex-column">
          {/* Highlight 1 */}
          <div className="highligh-container">
            <img
              className="hightlight-img"
              onMouseEnter={this.MouseEnter}
              onMouseLeave={this.MouseLeave}
              src={art1}
              alt=""
            />
            <div>
              <h3>60+</h3>
              <p className="pop-font txt-white">Pizza Branches</p>
            </div>
          </div>
          {/* Highlight 2 */}
          <div className="highligh-container">
            <img
              className="hightlight-img"
              onMouseEnter={this.MouseEnter}
              onMouseLeave={this.MouseLeave}
              src={art2}
              alt=""
            />
            <div>
              <h3>320+</h3>
              <p className="pop-font txt-white">Number of Awards</p>
            </div>
          </div>
          {/* Highlight 3 */}
          <div className="highligh-container">
            <img
              className="hightlight-img"
              onMouseEnter={this.MouseEnter}
              onMouseLeave={this.MouseLeave}
              src={art3}
              alt=""
            />
            <div>
              <h3>12,900+</h3>
              <p className="pop-font txt-white">Happy Customers</p>
            </div>
          </div>
          {/* Highlight 4 */}
          <div className="highlight-container">
            <img
              className="hightlight-img"
              onMouseEnter={this.MouseEnter}
              onMouseLeave={this.MouseLeave}
              src={art4}
              alt=""
            />
            <div>
              <h3>600+</h3>
              <p className="pop-font txt-white">Staff</p>
            </div>
          </div>
        </section>
      </article>
    );
  }
}
