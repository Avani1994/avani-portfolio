import { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  Icon,
  Heading,
  Link,
  Stack,
  Container,
  Progress,
  SimpleGrid,
  Card,
} from '@chakra-ui/react';
import {
  FaPython,
  FaTable,
  FaTachometerAlt,
  FaBook,
  FaChartLine,
  FaChartBar,
  FaEye,
  FaImage,
  FaFileAlt,
  FaHtml5,
  FaBalanceScale,
} from 'react-icons/fa';

const LOGOS = {
  'Scikit-Learn': <Image src={'scikit-learn.png'} h={14} />,
  Spacy: <Image src={'spacy.png'} h={14} />,
  MLflow: <Image src={'mlflow.png'} h={14} />,
  Huggingface: <Image src={'huggingface.png'} h={14} />,
  NLTK: <Image src={'nltk.png'} h={14} />,
  Matplotlib: <Image src={'matplotlib.png'} h={14} />,
  Seaborn: <Image src={'seaborn.png'} h={14} />,
  PIL: <Image src={'pillow.png'} h={14} />,
  Beautifulsoup: <Image src={'beautifulsoup.webp'} h={14} />,
  Textblob: <Image src={'textblob.webp'} h={14} />,
  TAlib: <Image src={'talib.png'} h={14} />,
};
const libraryToIcon = {
  Python: 'devicon-python-plain colored',
  NumPy: 'devicon-numpy-original',
  Pandas: 'devicon-pandas-original colored',
  Pytorch: 'devicon-pytorch-original colored',
  OpenCV: 'devicon-opencv-plain colored',
};

const libraryQuotes = {
  NumPy: 'Makes arrays more fun than a bowl of cereal.',
  Pandas: 'Lets you play with data like a panda plays with bamboo.',
  Spacy: 'Helps you make sense of language like a pro.',
  'Scikit-Learn': 'Makes machine learning as easy as baking a cake.',
  MLflow:
    'Helps you keep your machine learning experiments organized like a pro.',
  Pytorch: 'Lets you build neural networks like a boss.',
  Huggingface:
    'Helps you train and deploy state-of-the-art natural language processing models like a pro.',
  NLTK: 'Makes natural language processing as easy as ABC.',
  Matplotlib:
    'Lets you create beautiful visualizations like a Picasso of data.',
  Seaborn: 'Makes data visualization as easy as a day at the beach.',
  OpenCV: 'Lets you see the world through the eyes of a computer.',
  PIL: 'Lets you manipulate images like a magician.',
  Beautifulsoup: 'Lets you scrape the web like a spider.',
  Textblob: 'Makes natural language processing as easy as pie.',
  TAlib: 'Helps you analyze financial data like a Wall Street pro.',
};

export const FlippingCard = ({ library, light }) => {
  return (
    <Box
      borderRadius="lg"
      backgroundColor="transparent"
      width="250px"
      height="150px"
      style={{
        perspective: '1000px' /* Remove this if you don't want the 3D effect */,
      }}
      role="group"
    >
      <Box
        position="relative"
        width="100%"
        height="100%"
        textAlign="center"
        transition="transform 0.8s"
        style={{
          transformStyle: 'preserve-3d',
        }}
        _groupHover={{
          transform: 'rotateY(180deg)',
        }}
      >
        <Card
          position="absolute"
          width="100%"
          height="100%"
          style={{
            backfaceVisibility: 'hidden',
            _webkitBackfaceVisibility: 'hidden' /* Safari */,
          }}
          color={light ? 'black' : 'gray.100'}
          py={4}
          shadow={'lg'}
          minW={60}
        >
          <Flex direction={'column'} align={'center'}>
            {/* <Icon
          as={libraryToIcon[library]}
          boxSize={10}
          mb={4}
          color="secondary.400"
        ></Icon> */}
            <Flex mb={4}>
              {libraryToIcon[library] ? (
                <i class={libraryToIcon[library]} style={{ fontSize: 50 }}></i>
              ) : (
                LOGOS[library]
              )}
            </Flex>
            <Text
              fontSize={'1rem'}
              textTransform={'uppercase'}
              letterSpacing={1.3}
            >
              {library}
            </Text>
          </Flex>
        </Card>
        <Card
          position="absolute"
          width="100%"
          height="100%"
          style={{
            backfaceVisibility: 'hidden',
            _webkitBackfaceVisibility: 'hidden' /* Safari */,
          }}
          bg={light ? 'dodgerblue' : 'blue.700'}
          py={4}
          shadow={'lg'}
          minW={60}
          transform="rotateY(180deg)"
          align={'center'}
          justify={'center'}
          p={4}
        >
          <Text color="white" fontSize="xl">
            {libraryQuotes[library]}
          </Text>
        </Card>
      </Box>
    </Box>
  );
};
