import { Box, Flex, Heading, Text } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

export default function Error() {
  return (
    <Box textAlign="center" py={10} px={6} height='80vh'>
      <Box display="inline-block">
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          bg={'red.500'}
          rounded={'50px'}
          w={'55px'}
          h={'55px'}
          textAlign="center">
          <CloseIcon boxSize={'20px'} color={'white'} />
        </Flex>
      </Box>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Heading as="h2" size="xl" mt={6} mb={2}>
          Ops :( 
        </Heading>
        <Text color={'gray.500'}>
          Parece que você não tem permissão para acessar essa página.
        </Text>
      </Flex>
    </Box>
  );
}