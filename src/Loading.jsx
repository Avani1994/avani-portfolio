import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import ReactGA from 'react-ga';
import { Helmet } from 'react-helmet';
import PuffLoader from 'react-spinners/PuffLoader';
import { Container, Box } from '@chakra-ui/react';
import Zoom from 'react-reveal/Zoom';

export const Loading = () => {
  // ReactGA.initialize("UA-154721739-1");
  // ReactGA.pageview('avani.dev - Loading Screen');
  const navigate = useNavigate();
  const [exit, setExit] = useState(false);
  useEffect(() => {
    setTimeout(() => setExit(true), 3000);
  }, []);
  return (
    <Box
      backgroundColor="white"
      position={'fixed'}
      w="100vw"
      zIndex={100}
      visibility={exit ? 'hidden' : 'visible'}
      transition={'visibility 0.8s'}
      h={!exit ? '100vh' : '0'}
    >
      <Helmet>
        <meta charSet="utf-8" />
        <title>Motasim Foad</title>
        <link rel="canonical" href="https://avani.dev/" />
        <meta
          name="description"
          content="Avani Sharma - Machine Learning Engineer | Software Engineer"
        />
      </Helmet>
      <Zoom opposite when={!exit}>
        <Container
          backgroundImage="url('as-logo.png')"
          backgroundPosition=" center"
          backgroundRepeat=" no-repeat"
          backgroundSize="contain"
          minHeight=" 100vh"
          display=" flex"
          flexDirection=" column"
          fontSize=" calc(10px + 2vmin)"
          color=" black"
          textAlign=" center"
          alignItems=" center"
          justifyContent="center"
        >
          <PuffLoader size={'40vw'} color={'#000'} loading={true} />
        </Container>
      </Zoom>
    </Box>
  );
};
