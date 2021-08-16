import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portofolio
      </SectionTitle>

      <SectionText>
        Now that there is the Tec-9, a crappy spray gun from South Miami. This
        gun is advertised as the most popular gun in American crime.
      </SectionText>
      <Button onClick={() => (window.location = "https://slipsum.com/")}>
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
