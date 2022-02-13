import React from "react";
import styled from "styled-components";
import tw from "tailwind.macro";
import { Parallax } from "react-spring/renderprops-addons.cjs";

// Components
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

// Elements
import Inner from "../elements/Inner";
import { Title, BigTitle, Subtitle } from "../elements/Titles";

// Views
import Hero from "../views/Hero";
import Projects from "../views/Projects";
import About from "../views/About";
import Contact from "../views/Contact";

import avatar from "../images/avatar.jpg";

const ProjectsWrapper = styled.div`
  ${tw`flex flex-wrap justify-between mt-8`};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`;

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`;

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`;

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`;

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`;

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`;

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Adriel Klein.
        </BigTitle>
        <Subtitle>
          I'm an engineer eager to add value to the world by bringing clever
          software visions to life.
        </Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Portfolio</Title>
        <ProjectsWrapper>
        <ProjectCard
            title="Dev Blog"
            link="https://adrielklein.github.io/"
            bg="linear-gradient(to right, #3BA723 0%, #D3D00C 100%)"
          >
            Personal reflections and lessons learned throughout my years of
            software development.
          </ProjectCard>
          <ProjectCard
            title="Laughter Engine"
            link="http://www.laughter-engine.com/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            App that finds good jokes based on user ratings.
          </ProjectCard>
          <ProjectCard
            title="Adventure Blog"
            link="https://adrielklein.github.io/adventures"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Personal Blog about cycling adventures
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Adriel Klein" />
          <AboutSub>
            I first started programming during an introductory computer science
            course in college. A few weeks in the course, while sitting in my
            dorm room I had a moment where I knew I would build a career through 
            writing code.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Since then, I've built apps for marketers, ad traders, and medical professionals
          to name a few. I've spend the bulk of my career in
          agile software development teams focused on building user interfaces
          with React. I take pride in writing code that reads like poetry. I do
          my best to avoid code duplication, use proper abstractions, and design
          UI components in such a way that maximizes maintainability.
        </AboutDesc>
        <AboutDesc>
          Aside from coding itself, I spend the bulk of my time coordinating
          with other people. Whether it's coming up with a plan of how to
          structure an API, or gaining user feedback, I find building strong,
          collaborative teams is key to building great software.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            <ul>
              <li>
                <a href="mailto:adrielmklein@gmail.com">Send me a message</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/adriel-klein-9388bb55/">
                  LinkedIn
                </a>{" "}
                & <a href="https://github.com/adrielklein/">Github</a>
              </li>
              <li>
                Check out my{" "}
                <a href={"https://gitconnected.com/adrielklein/resume"}>
                  resume
                </a>
              </li>
            </ul>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Gatsby Starter Portfolio Cara.{" "}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">
            Github Repository
          </a>
          . Made by <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
);

export default Index;
