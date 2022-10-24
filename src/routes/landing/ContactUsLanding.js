import React from "react";

export default class ContactUsLanding extends React.Component {
  render() {
    return (
      <article className="section-1">
        <section className="company-details flex-container flex-row txt-white">
          <div>
            <h2>+353 (091) 934 8284</h2>
            <p>Contact us if you have any questions</p>
          </div>
          <div>
            <h2>106 Belfield Park Stillorgan</h2>
            <p>County Cork, Dublin</p>
          </div>
          <div>
            <h2>Open Monday-Friday</h2>
            <p>8:00am - 9:00pm</p>
          </div>
        </section>
      </article>
    );
  }
}
