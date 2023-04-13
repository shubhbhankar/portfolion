import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, Span, NavLink, SocialIcons, } from './HeaderStyles';
import { IoLogoInstagram, IoLogoLinkedin } from 'react-icons/io';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display:"flex",alignItems:"center",color:'white',marginBottom:"20px"}}>
          <DiCssdeck size="3rem"/><Span>portfolio</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href='#Projects'>
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#Tech'>
          <NavLink>Technology</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#About'>
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/shubhbhankar'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/shubhankar-lokhande-50a042199/'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
    </Div3>
    </Container>
);

export default Header;
