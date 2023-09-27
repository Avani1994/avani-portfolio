import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { IoSchoolSharp } from 'react-icons/io5';
import { FaBirthdayCake } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css';
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
  theme,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Center,
  useColorModeValue,
  useColorMode,
} from '@chakra-ui/react';
import { data } from '../data.js';

export const Timeline = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const light = colorMode === 'light';
  const { work, education } = data;
  const bgEven = light ? '#2196F3' : '#9B2C2C';
  const bgOdd = light ? theme.colors.white : '#2C5282';
  const fgEven = theme.colors.white;
  const lineColor = light ? 'white' : '#FEB2B2';
  const fgOdd = light ? '#2196F3' : '#FFF5F5';
  return (
    <Box
      as="section"
      id="work"
      size={'full'}
      bg={useColorModeValue('primary.100', 'primary.800')}
      zIndex={3}
      position={'relative'}
      py={[10, 10]}
      px={[2, 20]}
    >
      <Flex direction={'column'} align={'center'}>
        <Flex className="progress-title" align={'center'} direction={'column'}>
          <Heading
            as="h2"
            color={useColorModeValue('secondary.500', 'secondary.300')}
            mb={4}
            textTransform={'uppercase'}
            fontSize={'1rem'}
            letterSpacing={2}
            textAlign={'center'}
          >
            {work.subtitle}
          </Heading>
          <Heading
            as="h3"
            fontSize={'2rem'}
            lineHeight={'40px'}
            textTransform={'uppercase'}
            fontWeight={900}
            w={'lg'}
            textAlign={'center'}
            mb={[4, 0]}
          >
            {work.title}
          </Heading>
        </Flex>
        <VerticalTimeline layout="1-column-left" lineColor={lineColor}>
          {work.workExperience.map((exp, index) => {
            const bg = index % 2 === 0 ? bgEven : bgOdd;
            const fg = index % 2 === 0 ? fgEven : fgOdd;
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: bg,
                  color: fg,
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${bg}`,
                }}
                date={`${exp.startDate} - ${exp.endDate}`}
                iconStyle={{
                  background: bg,
                  color: fg,
                }}
                icon={
                  <Center w={10} h={10} position="relative">
                    <Image
                      src={exp.icon}
                      boxSize={6}
                      display={['block', 'none']}
                    />
                    <Flex
                      position="absolute"
                      boxSize={6}
                      display={['none', 'flex']}
                    >
                      <Icon as={MdWork} />
                    </Flex>
                  </Center>
                }
              >
                <Image
                  src={exp.icon}
                  boxSize={[16]}
                  position={'absolute'}
                  right={8}
                  display={['none', 'block']}
                ></Image>
                <Heading
                  as="h3"
                  className="vertical-timeline-element-title"
                  fontSize={'1.2rem'}
                  color={fg}
                  pb={2}
                >
                  {exp.position}
                </Heading>
                <Heading
                  as="h4"
                  className="vertical-timeline-element-subtitle"
                  fontSize={'md'}
                >
                  {exp.company} | {exp.location}
                </Heading>
                <UnorderedList mt={4}>
                  {exp.description.map(item => (
                    <ListItem
                      my={1}
                      color={fg}
                      whiteSpace={'pre-wrap'}
                      dangerouslySetInnerHTML={{
                        __html: `${item}`,
                      }}
                    ></ListItem>
                  ))}
                </UnorderedList>
              </VerticalTimelineElement>
            );
          })}

          {education.schools.map((school, index) => {
            const bg = index % 2 === 1 ? bgEven : bgOdd;
            const fg = index % 2 === 1 ? fgEven : fgOdd;
            return (
              <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{
                  background: bg,
                  color: fg,
                }}
                contentArrowStyle={{
                  borderRight: `7px solid ${bg}`,
                }}
                date={`${school.startDate} - ${school.endDate}`}
                iconStyle={{
                  background: bg,
                  color: fg,
                }}
                icon={
                  <Center w={10} h={10} position="relative">
                    <Image
                      src={school.icon}
                      boxSize={6}
                      display={['block', 'none']}
                    />
                    <Flex
                      position="absolute"
                      boxSize={6}
                      display={['none', 'flex']}
                    >
                      <Icon as={IoSchoolSharp} />
                    </Flex>
                  </Center>
                }
              >
                <Image
                  src={school.icon}
                  boxSize={16}
                  position={'absolute'}
                  right={8}
                  display={['none', 'block']}
                ></Image>
                <Heading
                  as="h3"
                  className="vertical-timeline-element-title"
                  fontSize={'1.2rem'}
                  color={fg}
                  pb={2}
                >
                  {school.name}
                </Heading>
                <Heading
                  as="h4"
                  className="vertical-timeline-element-subtitle"
                  fontSize={'md'}
                >
                  {school.degree} in {school.major}
                </Heading>
                <Heading
                  as="h4"
                  className="vertical-timeline-element-subtitle"
                  fontSize={'0.8rem'}
                  textTransform={'uppercase'}
                  pt={3}
                >
                  Grade: {school.gpa}
                </Heading>
                <Text
                  my={1}
                  color={fg}
                  whiteSpace={'pre-wrap'}
                  dangerouslySetInnerHTML={{
                    __html: `${school.description}`,
                  }}
                ></Text>
              </VerticalTimelineElement>
            );
          })}
          {/* <VerticalTimelineElement
            iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
            icon={<FaBirthdayCake />}
          /> */}
        </VerticalTimeline>
      </Flex>
    </Box>
  );
};
