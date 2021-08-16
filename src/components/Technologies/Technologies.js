import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      The path of the righteous man is beset on all sides by the iniquities of
      the selfish and the tyranny of evil men.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Samuel L Jackson</ListTitle>
          <ListParagraph>
            Experience with <br />
            Quentin Tarantino @ Pulp Fiction
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Samuel L Jackson</ListTitle>
          <ListParagraph>
            Experience with <br />
            Quentin Tarantino @ Django Unchained
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiZend size="3rem" />
        <ListContainer>
          <ListTitle>Samuel L Jackson</ListTitle>
          <ListParagraph>
            Experience with <br />
            Quentin Tarantino @ The Hateful Eight
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
