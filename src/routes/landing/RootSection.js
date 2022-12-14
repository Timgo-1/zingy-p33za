import React from "react";
import Header from "./Hero";
import ScrollButton from "../../components/ScrollBtn";
import ContactUsLanding from "./ContactUsLanding";
import WelcomeSection from "./WelcomeSection";
import OurServices from "./OurServices";
import PizzaMenuPreview from "./PizzaMenuPreview";
import MenuPricingPreview from "./MenuPricingPreview";
import Gallery from "./Gallery";
import StatsPreview from "./StatsPreview";
import MenuSlider from "./MenuSlider";
import BlogPreview from "./BlogPreview";
import ContactForm from "./ContactForm";
import Newsletter from "./Newsletter";

class RootSection extends React.Component {
  componentDidUpdate() {
    window.scrollTo(0, 0);
  }
  render() {
    const { ResetLocation } = this.props;
    document.title = "Zingy P33za";
    return (
      <React.Fragment>
        <Header />
        <WelcomeSection />
        <ContactUsLanding />
        <OurServices />
        <PizzaMenuPreview ResetLocation={ResetLocation} />
        <MenuPricingPreview ResetLocation={ResetLocation} />
        <Gallery />
        <StatsPreview />
        <MenuSlider />
        <Newsletter />
        <BlogPreview ResetLocation={ResetLocation} />
        <ContactForm />
        <ScrollButton />
      </React.Fragment>
    );
  }
}
export default RootSection;
