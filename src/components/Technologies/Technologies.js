import React from 'react';
import { DiAngularSimple, DiFirebase, DiReact, DiUbuntu, DiUikit, DiUnitySmall, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I work with a range technology in web devekopment world.
      From Front-End to Design
    </SectionText>
    <List>
    <ListItem>
        <DiUikit size="3rem" />
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>         
        <ListParagraph>
          Experince with <br />
          Photoshop, Figma & AdobeXD
        </ListParagraph>
        </ListContainer>
      </ListItem>

      {/* <ListItem>
        <DiAngularSimple size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>         
        <ListParagraph>
          Experince with <br />
          Angular
        </ListParagraph>
        </ListContainer>
      </ListItem> */}

      <ListItem>
        <DiAngularSimple size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>         
        <ListParagraph>
          Experince with <br />
          Angular
        </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
