import { Box, Flex, Spacer, Text } from '@chakra-ui/react';

import { HEX_RANK } from '../constants';

interface RankStatusBarProps {
  rank: {
    index: number;
    name: string;
    percentage: number;
  };
  score: number;
}

const RankStatusBar: React.FC<RankStatusBarProps> = ({ rank, score }) => {
  return (
    <Box pos="relative" w="full" maxW={['350px', '500px']} mt={4}>
      <Flex w="full" alignItems="center" zIndex={0} pos="relative">
        {HEX_RANK.map(({ name, percentage }, i) => {
          const isCurrRank = name === rank.name;
          const isPastRank = i < rank.index;
          const size = isCurrRank ? 8 : 3;
          return (
            <>
              <Flex
                w={size}
                h={size}
                bg={isCurrRank || isPastRank ? 'purple.600' : 'gray.600'}
                borderRadius={20}
                key={`${name}-${percentage}`}
                alignItems="center"
                justifyContent="center"
              >
                <Text
                  textAlign="center"
                  fontWeight="bold"
                  fontSize={score > 100 ? 'sm' : 'lg'}
                >
                  {isCurrRank && score}
                </Text>
              </Flex>
              {i < HEX_RANK.length - 1 && <Spacer />}
            </>
          );
        })}
      </Flex>
      <Box
        pos="absolute"
        left={`${rank.index * (100 / HEX_RANK.length)}%`}
        w="fit-content"
      >
        <Text
          textAlign="center"
          ml="-50%"
          mt={1}
          size="lg"
          fontWeight="bold"
          color="purple.300"
        >
          {rank.name.toUpperCase()}
        </Text>
      </Box>
      <Box
        pos="absolute"
        h="2px"
        bg="purple.600"
        w={`${rank.index * (100 / HEX_RANK.length + 1)}%`}
        top="48%"
        zIndex={-1}
      />
      <Box
        pos="absolute"
        h="2px"
        bg="gray.600"
        w="full"
        top="48%"
        zIndex={-2}
      />
    </Box>
  );
};

export default RankStatusBar;
