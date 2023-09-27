import './progress.css';
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
  Container,
  Progress,
  SimpleGrid,
  Card,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import $ from 'jquery';
import { data } from '../../data.js';
import {
  SiMlflow,
  SiKeras,
  SiNumpy,
  SiPython,
  SiJavascript,
  SiR,
  SiPostgresql,
} from 'react-icons/si';
import { BsGlobe2 } from 'react-icons/bs';
import { FaLanguage, FaBrain, FaReact } from 'react-icons/fa';
import { TbMathSymbols, TbBrandCpp } from 'react-icons/tb';
import { FlippingCard } from './FlippingCards';
import IconPython from 'react-devicon/python/original';
import Slide from 'react-reveal/Slide';

import IconAmazonwebservices from 'react-devicon/amazonwebservices/original';

const buttonColors = [
  'gray',
  'red',
  'orange',
  'yellow',
  'green',
  'teal',
  // 'blue',
  'cyan',
  'purple',
  'pink',
];

function getRandomButtonColor() {
  const randomIndex = Math.floor(Math.random() * buttonColors.length);
  return buttonColors[randomIndex];
}

const ICONS_MAP = {
  MLFlow: SiMlflow,
  'HTML/CSS': BsGlobe2,
  'Natural Language Processing': FaLanguage,
  'Reinforcement learning': FaBrain,
  'Behind the scene maths': TbMathSymbols,
  React: FaReact,
  Keras: SiKeras,
  Python: SiPython,
  Javascript: SiJavascript,
  'C++': TbBrandCpp,
  R: SiR,
  SQL: SiPostgresql,
};

const SkillBar = ({ skill, level, color, index, light }) => {
  color = color ?? getRandomButtonColor();
  return (
    <Slide right={index % 2 == 1} left={index % 2 == 0}>
      <Flex direction={'column'} minW={['80%', '500px']} py={2}>
        <Flex align={'center'} justify={'space-between'} mb={1}>
          <Text
            textTransform={'uppercase'}
            color={light ? `${color}.700` : `${color}.200`}
            ml={2}
            letterSpacing={1}
            fontWeight={600}
          >
            {skill}
          </Text>
          <Icon
            as={ICONS_MAP[skill]}
            mr={6}
            color={light ? `${color}.400` : `${color}.300`}
          ></Icon>
        </Flex>
        <Progress value={level} colorScheme={color} borderRadius={'lg'} h={3} />
      </Flex>
    </Slide>
  );
};

export const Skills = () => {
  const skills = data.skills;
  const { techs, libraries } = skills;
  const { colorMode, toggleColorMode } = useColorMode();
  const light = colorMode === 'light';
  return (
    <Box
      as="section"
      id="skills"
      size={'full'}
      bg={useColorModeValue('primary.100', 'primary.800')}
      zIndex={3}
      position={'relative'}
      py={[4, 10]}
      px={[4, 20]}
    >
      <Flex
        className="progress-container"
        direction={'column'}
        align={'center'}
      >
        <Flex className="progress-title" align={'center'} direction={'column'}>
          <Heading
            as="h2"
            color={useColorModeValue('secondary.500', 'secondary.300')}
            mb={4}
            textTransform={'uppercase'}
            fontSize={'1rem'}
            letterSpacing={2}
          >
            {skills.title}
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
            {skills.subtitle}
          </Heading>
        </Flex>
        <Flex direction={'column'} justify={'center'}>
          {techs.map(tech => {
            const color = getRandomButtonColor();
            return (
              <Flex direction={'column'} position={'relative'}>
                <Heading
                  as="h2"
                  // textTransform={'uppercase'}
                  letterSpacing={2}
                  fontSize={'1.4rem'}
                  color={light ? 'secondary.800' : 'secondary.200'}
                  // alignSelf={'center'}
                  mt={[4, 8]}
                  mb={[4, 4]}
                  // textDecor={'underline'}
                >
                  {tech.category}:
                </Heading>
                <SimpleGrid columns={[1, 2]} rowGap={4} columnGap={32}>
                  {Object.keys(tech.progress).map((skill, index) => (
                    <SkillBar
                      skill={skill}
                      level={tech.progress[skill] * 10}
                      // color={color}
                      key={`${tech.category}-${index}`}
                      index={index}
                      duration={2}
                      flat
                      light={light}
                    />
                  ))}
                </SimpleGrid>
              </Flex>
            );
          })}
        </Flex>
        <Flex direction={'column'} position={'relative'}>
          <Heading
            as="h2"
            // textTransform={'uppercase'}
            letterSpacing={2}
            fontSize={'1.4rem'}
            color={light ? 'secondary.800' : 'secondary.200'}
            alignSelf={'center'}
            my={8}
            // textDecor={'underline'}
          >
            Libraries:
          </Heading>
          <Flex
            columns={7}
            rowGap={6}
            columnGap={6}
            alignContent={'center'}
            justifyContent={'center'}
            flexWrap={'wrap'}
          >
            {libraries.map(library => (
              <FlippingCard library={library} light={light} />
              // <LibCard library={library} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
