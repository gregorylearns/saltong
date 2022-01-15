import { BoxProps, useColorMode } from '@chakra-ui/react';
import { useCallback, useMemo } from 'react';

import LetterStatus from '../types/LetterStatus';

const useLetterStatusColor = (): {
  getStyle: (status?: LetterStatus) => Partial<BoxProps>;
} => {
  const { colorMode } = useColorMode();
  const isDarkMode = useMemo(() => colorMode === 'dark', [colorMode]);

  const getStyle = useCallback(
    (status: LetterStatus) => {
      let bprops = {
        bg: isDarkMode ? 'gray.600' : 'gray.100',
        color: isDarkMode ? 'gray.200' : 'gray.900',
      };

      switch (status) {
        case LetterStatus.wrong:
          bprops = {
            ...bprops,
            bg: isDarkMode ? 'gray.700' : 'gray.400',
            color: 'white',
          };
          break;
        case LetterStatus.correct:
          bprops = {
            ...bprops,
            bg: isDarkMode ? 'green.600' : 'green.400',
            color: 'white',
          };
          break;
        case LetterStatus.wrongSpot:
          bprops = {
            ...bprops,
            bg: isDarkMode ? 'orange.600' : 'orange.400',
            color: 'white',
          };
          break;
      }

      return bprops;
    },
    [isDarkMode]
  );

  return {
    getStyle,
  };
};

export default useLetterStatusColor;
