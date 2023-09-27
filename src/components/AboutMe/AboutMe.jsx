import './AboutMe.css';
import { useEffect, useState } from 'react';
import { data } from '../../data.js';

import {
  Box,
  Image,
  Flex,
  Icon,
  Button,
  Heading,
  Text,
  Link,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { ExternalLinkIcon, AddIcon, WarningIcon } from '@chakra-ui/icons';

export const AboutMe = () => {
  const about = data.about;
  return (
    <Box
      position={'relative'}
      bg={useColorModeValue('secondary.300', 'secondary.800')}
    >
      <main id="about">
        <div className="aboutMe-container">
          <div className="about-decor">
            <div className="about-dots">
              <img src={'images/decoration/dots-1.png'} alt="" />
            </div>
            <div className="about-shady">
              <img src={'images/decoration/dots.png'} alt="" />
            </div>
          </div>
          <Flex className="abouMe-row" px={[4, 10]} gap={20} align={'center'}>
            <Image src={`/why-me.png`} maxW="50%" display={['none', 'block']} />
            <div
              className=" col-lg-6 col-md-7  col-sm-12 about_myinfo"
              data-aos="fade-up-left"
            >
              <Box
                className="title"
                fontFamily={'poppins'}
                position={'relative'}
              >
                <div className="about-rect">
                  <img src={'images/decoration/Rectangle-7.png'} alt="" />
                </div>
                <Heading
                  as="h2"
                  color={useColorModeValue('primary.200', 'primary.200')}
                  mb={2}
                >
                  {about.title}
                </Heading>
                <Heading
                  as="h3"
                  fontSize={'2rem'}
                  lineHeight={'40px'}
                  textTransform={'uppercase'}
                  fontWeight={900}
                  w={'lg'}
                  mb={8}
                >
                  {about.subtitle}
                </Heading>
              </Box>
              <div className="about-description">
                <div id="foo" unselectable="on" class="unselectable">
                  <Box
                    whiteSpace={'pre-wrap'}
                    dangerouslySetInnerHTML={{
                      __html: `${about.description}`,
                    }}
                  />
                </div>
              </div>

              <div className="itscv">
                <a
                  href="Avani_Resume.pdf"
                  download="RESUME.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    rightIcon={<ExternalLinkIcon />}
                    colorScheme="primary"
                    my={10}
                    py={8}
                    px={8}
                    textTransform={'uppercase'}
                    letterSpacing={1}
                    fontSize={'0.85em'}
                  >
                    Download CV
                  </Button>
                </a>
              </div>
            </div>
          </Flex>
        </div>
      </main>
    </Box>
  );
};
