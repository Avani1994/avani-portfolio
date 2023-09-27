import { useEffect, useState } from 'react';
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
  useColorMode,
} from '@chakra-ui/react';
import Gradient from 'rgt';
import './Intro.css';
import { data } from '../../data.js';
import { AiOutlineSend } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaInstagram, FaMediumM } from 'react-icons/fa';

export const ICONS_MAP = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
  medium: FaMediumM,
};

export const Hero = () => {
  document.title = data.name;
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      zIndex={4}
      position={'relative'}
      minH={'calc(100vh)'}
      // maxH="100vh"
      px={[2, 16]}
      py="auto"
    >
      <section className=" intro-page" id="home">
        {/* <div className="decorations">
          <div className="decor-dot2">
            <img src={''} alt="" />
          </div>

          <div className="parcol"></div>
        </div> */}
        <Flex
          className="small-intro"
          direction={'column'}
          align={'center'}
          justify={'center'}
          minH={'calc(100vh)'}
        >
          <Flex className="intro-row">
            <div className="col-lg-5  col-md-6 col-sm-12 intro-left">
              <div className="intro-name">
                <Heading
                  as="h3"
                  data-aos="fade-down"
                  data-aos-duration="1500"
                  fontSize={'lg'}
                  fontWeight={900}
                  fontFamily={
                    '"SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace'
                  }
                  mb={4}
                  color={'secondary.500'}
                  letterSpacing={'1px'}
                  textTransform={'uppercase'}
                >
                  <Gradient dir="left-to-right" from="#FA8685" to="#FEB581">
                    {data.jobTitle}
                  </Gradient>
                </Heading>
                <Heading
                  as="h3"
                  className="name"
                  data-aos="fade-down"
                  data-aos-duration="1600"
                >
                  Hey! I Am
                </Heading>
                <h3
                  className="job text-animate"
                  data-aos="fade-down"
                  data-aos-duration="1700"
                >
                  <Gradient dir="left-to-right" from="#FA8685" to="#FEB581">
                    {data.name}
                  </Gradient>
                </h3>
                <Text
                  data-aos="fade-down"
                  data-aos-duration="1800"
                  fontSize="1.1rem"
                  fontWeight="500"
                  mb="20px"
                  fontFamily="'Rubik', sans-serif"
                  maxW={['100%', '90%']}
                >
                  {data.shortIntro}
                </Text>
              </div>
              <div data-aos="fade-up" data-aos-duration="1900">
                <a href={`mailto:${data.email}`}>
                  <Button
                    colorScheme={'secondary'}
                    rounded={'full'}
                    px={12}
                    py={8}
                    alignItems={'center'}
                    textTransform={'uppercase'}
                  >
                    Hire me <Icon as={AiOutlineSend} ml={4} boxSize={3}></Icon>
                  </Button>
                </a>
              </div>
              <Box
                class="intro-contact"
                data-aos="fade-up"
                data-aos-duration="1800"
                ml={[0, 4]}
                mt={10}
              >
                <Text fontSize={'md'} color={'black'} fontWeight={500}>
                  Follow Me:
                </Text>
                <Stack
                  direction={'row'}
                  align={'center'}
                  mt={2}
                  justify={['center', 'left']}
                >
                  {data.socials.map(data => (
                    <Link
                      href={data.profile}
                      className="icon-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      maxH="24px"
                      _hover={{
                        borderColor: 'white',
                      }}
                      role="group"
                    >
                      <Flex
                        key={data.site}
                        borderRadius={'full'}
                        borderWidth={2}
                        borderColor={
                          colorMode === 'light'
                            ? 'secondary.300'
                            : 'secondary.100'
                        }
                        align={'center'}
                        justify={'center'}
                        p={1}
                        minW={12}
                        minH={12}
                        color={
                          colorMode === 'light' ? 'primary.500' : 'primary.300'
                        }
                        transition={'all 0.25s'}
                        _groupHover={{
                          borderColor:
                            colorMode === 'light'
                              ? 'secondary.400'
                              : 'secondary.600',
                          color:
                            colorMode === 'light'
                              ? 'primary.600'
                              : 'primary.300',
                          bg:
                            colorMode === 'light' ? 'red.50' : 'secondary.400',
                        }}
                      >
                        <Icon as={ICONS_MAP[data.site]} boxSize={6}></Icon>
                      </Flex>
                    </Link>
                  ))}
                </Stack>
              </Box>
            </div>
            <Box
              className="col-lg-7 col-md-6 col-sm-12 left-img "
              data-aos="fade-down-left"
              display={['none', 'block']}
            >
              <div className="ff">
                {/* <img
                      className="intro-img"
                      src="https://drive.google.com/uc?id=1iyVyaGyw5HniEugxd1-qZ54rpFpn2UTc"
                      alt=""
                    /> */}
                {/* <Image src={'/hero.png'}></Image> */}
                <img className="intro-img" src={'/hero.png'} alt="" />
              </div>
            </Box>
          </Flex>
        </Flex>
      </section>
    </Box>
  );
};
