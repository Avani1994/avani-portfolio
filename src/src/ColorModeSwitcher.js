import React from 'react';
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  Checkbox,
  Box,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export const ColorModeSwitcher = props => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Checkbox
      className="toggle"
      id="toggle"
      aria-label={`Switch to ${text} mode`}
      color="current"
      onClick={toggleColorMode}
      {...props}
      // borderRadius="lg"
      icon={<Box display="none"></Box>}
    />
  );
};
