import './Footer.css';
import Main from './main.js';
import { useEffect, useState } from 'react';
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
  theme,
  Stack,
  HStack,
  Center,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import { data } from '../../data.js';
import { EmailIcon, PhoneIcon, ChevronUpIcon } from '@chakra-ui/icons';
import { ICONS_MAP } from '../Hero/Intro.jsx';
import Gradient from 'rgt';

const ContactButton = ({ type, contact }) => {
  return (
    <Box position={'relative'} role="group">
      <Center
        bg={useColorModeValue('secondary.400', 'secondary.600')}
        minW={[48, 56]}
        minH={[28, 48]}
        borderTopLeftRadius={'3xl'}
        borderBottomRightRadius={'3xl'}
        position={'absolute'}
        top={5}
        left={5}
        zIndex={1}
        transition={'all 0.5s'}
        _groupHover={{
          transform: 'translate(3px, 3px)',
        }}
      ></Center>
      <Center
        bg={useColorModeValue('secondary.700', 'secondary.300')}
        minW={[48, 56]}
        minH={[28, 48]}
        borderTopLeftRadius={'3xl'}
        borderBottomRightRadius={'3xl'}
        zIndex={4}
        transition={'all 0.5s'}
        _groupHover={{
          transform: 'translate(-3px, -3px)',
        }}
        position={'relative'}
        _hover={{
          cursor: 'pointer',
        }}
      >
        <Stack align={'center'}>
          <Icon
            as={type === 'email' ? EmailIcon : PhoneIcon}
            boxSize={8}
            color={useColorModeValue('primary.200', 'primary.700')}
          ></Icon>
          <Text mt={4} color={'background'}>
            {contact}
          </Text>
        </Stack>
      </Center>
    </Box>
  );
};
export const Footer = () => {
  const { socials, email, phone } = data;
  const contacts = [
    {
      type: 'email',
      contact: email,
    },
    {
      type: 'phone',
      contact: phone,
    },
  ];
  return (
    <Box
      position={'relative'}
      zIndex={4}
      w="100%"
      bg={useColorModeValue('secondary.300', 'secondary.800')}
      px={[4, 10]}
      py={[4, 8]}
    >
      <Main />
      <section>
        <div className="my-footer">
          <div class="progress-wrap">
            <Icon
              as={ChevronUpIcon}
              position={'absolute'}
              boxSize={8}
              top={1.5}
              color="white"
              zIndex={2}
              right={1.5}
            />
            <svg width="100%" height="100%" viewBox="-1 -1 102 102">
              <path
                d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
                id="scroll-to-top"
              />
              <p>eee</p>
            </svg>
          </div>

          <Flex
            align={'center'}
            justify={'center'}
            mb={10}
            maxW="6xl"
            mx={[0, 'auto']}
            direction={['column', 'row']}
          >
            <Stack w={['100%', '50%']} align={['center', 'flex-start']}>
              <Heading
                as="h2"
                fontSize={'5xl'}
                color={'white'}
                fontFamily={'Abril Fatface'}
                fontWeight={900}
              >
                Get in Touch
              </Heading>
              <Heading
                as="h3"
                fontSize={'md'}
                color="white"
                fontWeight={500}
                lineHeight={'1.5rem'}
                textAlign={['center', 'left']}
              >
                Did you know that 99% of people who don't get in touch with me
                end up regretting it? Be that 1%. Let's chat!
              </Heading>
              <HStack gap={0} mt={4}>
                {socials.map(data => (
                  <Link
                    href={data.profile}
                    className="icon-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    maxH="24px"
                    role="group"
                  >
                    <Flex
                      key={data.site}
                      borderRadius={'md'}
                      align={'center'}
                      justify={'center'}
                      p={1}
                      minW={10}
                      minH={10}
                      bg="primary.300"
                      color="white"
                      transition={'all 0.25s'}
                      _groupHover={{
                        color: 'gray.600',
                        bg: 'primary.200',
                      }}
                    >
                      <Icon as={ICONS_MAP[data.site]} boxSize={6}></Icon>
                    </Flex>
                  </Link>
                ))}
              </HStack>
            </Stack>
            <Spacer />
            <HStack gap={[8, 14]} flexDir={['column', 'row']} mt={[10, 0]}>
              {contacts.map(contact => (
                <ContactButton {...contact} />
              ))}
            </HStack>
          </Flex>
          <Text
            color="white"
            w="100%"
            display="inline-flex"
            py={0}
            fontWeight="600"
            justifyContent={['left', 'center']}
            fontFamily="'Roboto', sans-serif"
            fontSize="1rem"
          >
            <Text mr={1} display={['none', 'block']}>
              © {new Date().getFullYear()} All rights reserved |
            </Text>
            <Text mr={1}>Made with</Text>

            <Gradient
              dir="left-to-right"
              from={theme.colors.orange[200]}
              to={theme.colors.green[400]}
              style={{ paddingRight: '2px' }}
            >
              passion
            </Gradient>
            <Text ml={1}>by {data.name}</Text>
          </Text>
        </div>
      </section>
    </Box>
  );
};
