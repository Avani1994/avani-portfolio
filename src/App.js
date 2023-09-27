import React from 'react';
import 'animate.css/animate.min.css';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
} from '@chakra-ui/react';
import { theme } from './chakra.service.js';

import { Home } from './Home.jsx';
import { Footer } from './components/Footer/Footer.js';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/home',
    element: <Home />,
  },
]);

function App() {
  return (
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
