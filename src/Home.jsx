import React, { useEffect, useState, useCallback } from 'react';
import { redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { Container, Box, Flex, useColorModeValue } from '@chakra-ui/react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles'; // if you are going to use `loadFull`, install the "tsparticles" package too.
// import { loadSlim } from 'tsparticles-slim'; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
import { Hero } from './components/Hero/Intro.jsx';
import { AboutMe } from './components/AboutMe/AboutMe.jsx';
import { Skills } from './components/SkillBars/progress.jsx';
import { Projects } from './components/MyWork/projects.jsx';
import { Timeline } from './components/Timeline.jsx';
import { Navbar } from './components/Navbar/Navbar.jsx';
import { Loading } from './Loading.jsx';

const Back = () => {
  const particlesInit = useCallback(async engine => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    await container;
  }, []);
  return (
    <Box position={'relative'}>
      <Box
        bg={useColorModeValue('whiteAlpha.700', 'blackAlpha.600')}
        w="100%"
        minH={['calc(100vh)', 'calc(100vh)']}
        position={'absolute'}
        zIndex={3}
      ></Box>
      <Container
        backgroundColor="white"
        maxHeight="100vh"
        display="flex"
        flexDirection="column"
        fontSize="calc(10px + 2vmin)"
        color="black"
        textAlign="center"
        alignItems="center"
        justifyContent="center"
        position={'absolute'}
      >
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: useColorModeValue('#fff', '#000'),
              },
            },
            fpsLimit: 120,
            interactivity: {
              detect_on: 'window',
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'grab',
                },
                resize: true,
              },
              modes: {
                grab: {
                  distance: 150,
                  line_linked: {
                    opacity: 1,
                  },
                },
                bubble: {
                  distance: 400,
                  size: 40,
                  duration: 2,
                  opacity: 8,
                  speed: 1,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
              },
            },
            particles: {
              color: {
                value: useColorModeValue('#000', '#fff'),
              },
              links: {
                color: useColorModeValue('#000', '#fff'),
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 1,
                straight: false,
                bounce: true,
                attract: {
                  enable: false,
                  rotateX: 600,
                  rotateY: 1200,
                },
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 130,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
                stroke: {
                  width: 3,
                  color: '#fff',
                },
                polygon: {
                  nb_sides: 5,
                },
                image: {
                  src: 'git.svg',
                  width: 100,
                  height: 100,
                },
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
          init={particlesInit}
          loaded={particlesLoaded}
        />
      </Container>
    </Box>
  );
};
export const Home = () => {
  return [
    <Container maxW="100vw" px={0}>
      <Loading />
      <Navbar />
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home | Avani Sharma</title>
        <link rel="canonical" href="http://avani.dev/home" />
        <meta
          name="description"
          content="Avani Sharma - Machine Learning Engineer | Software Engineer"
        />
      </Helmet>
      <Back />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Timeline />
    </Container>,
  ];
};
