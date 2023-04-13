import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcomme To <br/>
        Shubhankar's Portfolio
      </SectionTitle>
      <SectionText>
      I'm a Front-Developer Developer & UI Designer, constanly working and learning new technologies to stay with the trend. I'm open to Freelance or Job Opportunities.
      </SectionText>
      <Button onClick={()=> window.location='https://drive.google.com/file/d/1XWvqoQq7KZkTQjwamMXKbvVgH8TtEfAZ/view?usp=share_link'}>Download Resume</Button>
    </LeftSection>
  </Section>
);

export default Hero;