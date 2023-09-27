import './Navbar.css';
import {
  Link,
  Box,
  Image,
  Text,
  Flex,
  Spacer,
  Button,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../ColorModeSwitcher.js';
import Main from './nav';

export const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  return (
    <Box zIndex={10} position={'fixed'} maxH={'90px'} w="100%">
      <Main />
      <Button
        type="button"
        variant={'ghost'}
        className="mobile-nav-toggle d-lg-none"
        display={['none', 'none']}
      >
        <i className="icofont-navigation-menu"></i>
      </Button>
      <Box id="header" className="fixed-top" w="100%">
        <Box
          className="container-fluid  navbur"
          bg={useColorModeValue('primary.200', 'primary.900')}
        >
          <div className="navi">
            <Flex className="col-xl-12 d-flex align-items-center lefty">
              <Text
                as="h5"
                className="ld-flex mr-auto devman"
                color={useColorModeValue('black', '#ff5652')}
              >
                {/* <Image src="as-logo.png"></Image> */}
                Avani.dev <Text className="blink">_</Text>
              </Text>
              <Spacer />
              <Box
                as="nav"
                bg={['primary.200', 'transparent']}
                className="nav-menu  mainMenu"
              >
                <ul>
                  <li
                    className="active"
                    data-aos="fade-down"
                    data-aos-duration="300"
                  >
                    <Box
                      as="a"
                      color={useColorModeValue('gray.700', 'gray.50')}
                      href="#home"
                    >
                      Home
                    </Box>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="600">
                    <Box
                      as="a"
                      color={useColorModeValue('gray.700', 'gray.50')}
                      href="#about"
                    >
                      About
                    </Box>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="1200">
                    <Box
                      as="a"
                      color={useColorModeValue('gray.700', 'gray.50')}
                      href="#skills"
                    >
                      Skills
                    </Box>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="900">
                    <Box
                      as="a"
                      color={useColorModeValue('gray.700', 'gray.50')}
                      href="#projects"
                    >
                      Project
                    </Box>
                  </li>
                  <li data-aos="fade-down" data-aos-duration="1500">
                    <Box
                      as="a"
                      color={useColorModeValue('gray.700', 'gray.50')}
                      href="#work"
                    >
                      My Work
                    </Box>
                  </li>
                  {/* <li data-aos="fade-down" data-aos-duration="1800">
                    <a href="#contact">Contact</a>
                  </li> */}
                </ul>
              </Box>
              <div className="nav-social">
                <i className="fa fa-github"></i>
              </div>
              <div className="left-btns">
                {/* Color Switch Toggle Button */}
                <Box
                  class=" "
                  id="theme-button2"
                  onClick={toggleColorMode}
                  bg={useColorModeValue('white', 'transparent')}
                >
                  <input
                    id="toggle"
                    class="toggle"
                    type="checkbox"
                    checked
                  ></input>
                </Box>
                <Link
                  href="Avani_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  display={['none', 'block']}
                >
                  <Button
                    variant={'solid'}
                    colorScheme="secondary"
                    fontSize={'13px'}
                    height="50px"
                    borderRadius={'md'}
                    width={32}
                  >
                    View Resume
                  </Button>
                </Link>
                <Box className=" " id="theme-button">
                  <Link class="menuBtn" ml={10}>
                    <span class="lines"></span>
                  </Link>
                </Box>
              </div>
            </Flex>
          </div>
        </Box>
      </Box>
    </Box>
  );
};
