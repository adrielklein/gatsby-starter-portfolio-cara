import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Parallax } from 'react-spring/renderprops-addons.cjs'

// Components
import Layout from '../components/Layout'
import ProjectCard from '../components/ProjectCard'

// Elements
import Inner from '../elements/Inner'
import { Title, BigTitle, Subtitle } from '../elements/Titles'

// Views
import Hero from '../views/Hero'
import Projects from '../views/Projects'
import About from '../views/About'
import Contact from '../views/Contact'

import avatar from '../images/avatar.png'

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
`

const AboutHero = styled.div`
  ${tw`flex flex-col lg:flex-row items-center mt-8`};
`

const Avatar = styled.img`
  ${tw`rounded-full w-32 xl:w-48 shadow-lg h-auto`};
`

const AboutSub = styled.span`
  ${tw`text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl`};
`

const AboutDesc = styled.p`
  ${tw`text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify`};
`

const ContactText = styled.p`
  ${tw`text-grey-light font-sans text-xl md:text-2xl lg:text-3xl`};
`

const Footer = styled.footer`
  ${tw`text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg`};
`

const Index = () => (
  <>
    <Layout />
    <Parallax pages={5}>
      <Hero offset={0}>
        <BigTitle>
          Hello, <br /> I'm Adriel Klein.
        </BigTitle>
        <Subtitle>I'm an engineer eager to add value to the world by bringing clever software visions to life.</Subtitle>
      </Hero>
      <Projects offset={1}>
        <Title>Projects</Title>
        <ProjectsWrapper>
          <ProjectCard
            title="Laughter Engine"
            link="http://www.laughter-engine.com/"
            bg="linear-gradient(to right, #D4145A 0%, #FBB03B 100%)"
          >
            App that finds good jokes based on user ratings.
          </ProjectCard>
          <ProjectCard
            title="Scrabble Word Finder"
            link="http://scrabble-word-finder.herokuapp.com/"
            bg="linear-gradient(to right, #662D8C 0%, #ED1E79 100%)"
          >
            Give your scrabble letters to Scrabble Word Finder and it will find all the words you can form with them.
          </ProjectCard>
          <ProjectCard
            title="Poker Tournament"
            link="http://poker-tournament.herokuapp.com"
            bg="linear-gradient(to right, #009245 0%, #FCEE21 100%)"
          >
            Dummy poker tournament showcases an app with complete CRUD operations.
          </ProjectCard>
          <ProjectCard
            title="Marci McDonald"
            link="http://marci-mcdonald.com/"
            bg="linear-gradient(to right, #D585FF 0%, #00FFEE 100%)"
          >
            A wordpress website I built for Marci Mcdonald, an instructor who teaches yoga, aerial yoga, and gyrotonic.
          </ProjectCard>
        </ProjectsWrapper>
      </Projects>
      <About offset={3}>
        <Title>About</Title>
        <AboutHero>
          <Avatar src={avatar} alt="Adriel Klein" />
          <AboutSub>
            I've always liked creating things with computers and finding engaging projects to work on.
          </AboutSub>
        </AboutHero>
        <AboutDesc>
          Most recently I've been building apps to help marketers engage with prospective customers and provide marketing departments insight into the success of their marking campaigns. In previous jobs I've built apps to help accountants build custom financial reports to monitor the health of hedge funds.
          I enjoy working in Agile environments on teams with breadths of skills and backgrounds. At the end of the day I think its all about the people. I love hearing customer feedback and adapting products to best fit the user.
        </AboutDesc>
      </About>
      <Contact offset={4}>
        <Inner>
          <Title>Get in touch</Title>
          <ContactText>
            <a href="mailto:adrielmklein@gmail.com">Send me a message</a> or find me on other platforms:{' '}
            <a href="https://www.linkedin.com/in/adriel-klein-9388bb55/">LinkedIn</a> &{' '}
            <a href="https://github.com/adrielklein/">Github</a>
          </ContactText>
        </Inner>
        <Footer>
          &copy; 2019 by Gatsby Starter Portfolio Cara.{' '}
          <a href="https://github.com/LekoArts/gatsby-starter-portfolio-cara">Github Repository</a>. Made by{' '}
          <a href="https://www.lekoarts.de">LekoArts</a>.
        </Footer>
      </Contact>
    </Parallax>
  </>
)

export default Index
