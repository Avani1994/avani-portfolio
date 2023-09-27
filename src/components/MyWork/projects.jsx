import React from 'react';
import {
  Container,
  Box,
  Flex,
  Grid,
  Image,
  chakra,
  Link,
  Icon,
  Text,
  SimpleGrid,
  Heading,
  Tooltip,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { data } from '../../data.js';
import Gradient from 'rgt';
import { FaGithub, FaLaptopCode, FaReact } from 'react-icons/fa';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Zoom from 'react-reveal/Zoom'; // Importing Zoom effect

export const Projects = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const light = colorMode === 'light';
  const {
    projects: { title, subtitle, projects },
  } = data;

  return (
    <Box
      w="100vw"
      bg={useColorModeValue('secondary.400', 'secondary.800')}
      position={'relative'}
      px={[2, 20]}
      py={[8, 16]}
      id="projects"
    >
      <Flex
        className="progress-title"
        align={'center'}
        direction={'column'}
        pt={4}
        pb={[8, 16]}
      >
        <Heading
          as="h2"
          color={'primary.200'}
          mb={4}
          textTransform={'uppercase'}
          fontSize={'1rem'}
          letterSpacing={2}
        >
          {subtitle}
        </Heading>
        <Heading
          as="h3"
          fontSize={'2rem'}
          lineHeight={'40px'}
          textTransform={'uppercase'}
          fontWeight={900}
          w={'lg'}
          textAlign={'center'}
        >
          {title}
        </Heading>
      </Flex>
      <SimpleGrid columns={[1, 3]}>
        {projects.map(project => (
          <Zoom>
            <Flex
              px={5}
              py={6}
              w="full"
              alignItems="center"
              justifyContent="center"
              minH={['unset', '550px']}
            >
              <Box
                mx="auto"
                rounded="lg"
                shadow="md"
                bg="white"
                maxW="xl"
                bg={light ? 'white' : 'primary.900'}
              >
                <Image
                  rounded="lg"
                  w="90%"
                  my={8}
                  mx="auto"
                  h={[44, 64]}
                  fit="cover"
                  src={
                    project.hero ??
                    'https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
                  }
                  alt="Article"
                  transition={'all 0.5s'}
                  _hover={{
                    transform: 'scale(1.03)',
                  }}
                />
                <Box px={6} pb={6}>
                  <Box>
                    <chakra.span
                      fontSize="xs"
                      textTransform="uppercase"
                      fontWeight={800}
                    >
                      <Gradient dir="left-to-right" from="#FA8685" to="#FEB581">
                        {project.tags.join(' | ')}
                      </Gradient>
                    </chakra.span>
                    <Flex mt={2} align={'center'} justify={'space-between'}>
                      <Link
                        display="block"
                        color="gray.800"
                        _dark={{
                          color: 'white',
                        }}
                        fontWeight="bold"
                        fontSize="2xl"
                        _hover={{
                          color: 'gray.600',
                          textDecor: 'underline',
                        }}
                      >
                        {project.title}
                      </Link>
                      <chakra.span
                        mx={1}
                        fontSize="xs"
                        color="gray.600"
                        _dark={{
                          color: 'gray.300',
                        }}
                      >
                        {project.date}
                      </chakra.span>
                    </Flex>
                    <chakra.p
                      mt={2}
                      fontSize="sm"
                      color="gray.600"
                      _dark={{
                        color: 'gray.400',
                      }}
                      noOfLines={5}
                    >
                      {project.description}
                    </chakra.p>
                  </Box>

                  <Box mt={8}>
                    <Flex alignItems="center" justify={'space-between'}>
                      <Tooltip
                        label={
                          project.code ? '' : 'Too precious to make public'
                        }
                      >
                        <Link
                          align={'center'}
                          _hover={{ cursor: 'pointer', opacity: 0.8 }}
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          display={'flex'}
                        >
                          <Icon as={FaGithub}></Icon>
                          <Text
                            textTransform={'uppercase'}
                            letterSpacing={2}
                            fontSize={'0.7rem'}
                            ml={2}
                          >
                            Source Code
                          </Text>
                        </Link>
                      </Tooltip>

                      <Tooltip label={project.url ? '' : 'No demo available'}>
                        <Link
                          align={'center'}
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          display={'flex'}
                        >
                          <Icon as={FaLaptopCode}></Icon>
                          <Text
                            textTransform={'uppercase'}
                            letterSpacing={2}
                            ml={2}
                            fontSize={'0.7rem'}
                          >
                            Live Demo
                          </Text>
                        </Link>
                      </Tooltip>
                    </Flex>
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Zoom>
        ))}
      </SimpleGrid>
    </Box>
  );
};
