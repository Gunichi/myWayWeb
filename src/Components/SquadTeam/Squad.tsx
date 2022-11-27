import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  SimpleGrid,
  Flex,
} from '@chakra-ui/react';
import SmallWithSocial from '../Footer/Footer';
import Nav from '../Navbar/Navbar';
import Sidebar from '../Sidebar';

export default function SocialProfileSimple() {
  return (
    <Flex w="100%" h="170vh">
      <Sidebar />
      <Box w="100%" h="100%" maxW={1480} mb='20' justify="center" align="center">

      <Text
        textAlign={'center'}
        bgGradient='linear(to-l, #19786A, #FEA800)'
        bgClip='text'
        fontSize='6xl'
        fontWeight='extrabold'
      >
        Nosso time
      </Text>
      <Flex align={'center'} justify={'center'} py={10} >


      <SimpleGrid columns={[1,2,3]} spacing={10} bg="white" h="80vh">
        <Center py={6} rounded="lg">
          <Box
            maxW={'320px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}>
            <Avatar
              size={'xl'}
              src={
                'https://i.imgur.com/qpnkIoO.png'
              }
              mb={4}
              pos={'relative'}
              _after={{
                content: '""',
                w: 4,
                h: 4,
                bg: 'green.300',
                border: '2px solid white',
                rounded: 'full',
                pos: 'absolute',
                bottom: 0,
                right: 3,
              }}
            />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              Gunichi
            </Heading>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
              @gunichi
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              Criação de ideias e aplicações de tecnologia para o mundo.
            </Text>

            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={'#19786A'}
                color={'white'}
                fontWeight={'500'}>
                DEV
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={'#FEA800'}
                color={'white'}
                fontWeight={'500'}>
                UI
              </Badge>
              <Badge
                px={2}
                py={1}
                bg='#FF6CDD'
                color={'white'}
                fontWeight={'500'}>
                UX
              </Badge>
            </Stack>

            <Stack mt={8} direction={'row'} spacing={4}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'#19786A'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(25 120 106 / 48%), 0 10px 10px -5px rgb(28 84 76 / 43%)'
                }
                _hover={{
                  bg: '#FEA800',
                }}
                _focus={{
                  bg: '#FEA800',
                }}>
                Seguir
              </Button>
            </Stack>
          </Box>
        </Center>
        <Center py={6} rounded="lg">
          <Box
            maxW={'320px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}>
            <Avatar
              size={'xl'}
              src={
                'https://i.imgur.com/qpnkIoO.png'
              }
              mb={4}
              pos={'relative'}
              _after={{
                content: '""',
                w: 4,
                h: 4,
                bg: 'green.300',
                border: '2px solid white',
                rounded: 'full',
                pos: 'absolute',
                bottom: 0,
                right: 3,
              }}
            />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              Gunichi
            </Heading>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
              @gunichi
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              Criação de ideias e aplicações de tecnologia para o mundo.
            </Text>

            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={'#19786A'}
                color={'white'}
                fontWeight={'500'}>
                DEV
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={'#FEA800'}
                color={'white'}
                fontWeight={'500'}>
                UI
              </Badge>
              <Badge
                px={2}
                py={1}
                bg='#FF6CDD'
                color={'white'}
                fontWeight={'500'}>
                UX
              </Badge>
            </Stack>

            <Stack mt={8} direction={'row'} spacing={4}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'#19786A'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(25 120 106 / 48%), 0 10px 10px -5px rgb(28 84 76 / 43%)'
                }
                _hover={{
                  bg: '#FEA800',
                }}
                _focus={{
                  bg: '#FEA800',
                }}>
                Seguir
              </Button>
            </Stack>
          </Box>
        </Center>
        <Center py={6} rounded="lg">
          <Box
            maxW={'320px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}>
            <Avatar
              size={'xl'}
              src={
                'https://i.imgur.com/qpnkIoO.png'
              }
              mb={4}
              pos={'relative'}
              _after={{
                content: '""',
                w: 4,
                h: 4,
                bg: 'green.300',
                border: '2px solid white',
                rounded: 'full',
                pos: 'absolute',
                bottom: 0,
                right: 3,
              }}
            />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              Gunichi
            </Heading>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
              @gunichi
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              Criação de ideias e aplicações de tecnologia para o mundo.
            </Text>

            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={'#19786A'}
                color={'white'}
                fontWeight={'500'}>
                DEV
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={'#FEA800'}
                color={'white'}
                fontWeight={'500'}>
                UI
              </Badge>
              <Badge
                px={2}
                py={1}
                bg='#FF6CDD'
                color={'white'}
                fontWeight={'500'}>
                UX
              </Badge>
            </Stack>

            <Stack mt={8} direction={'row'} spacing={4}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'#19786A'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(25 120 106 / 48%), 0 10px 10px -5px rgb(28 84 76 / 43%)'
                }
                _hover={{
                  bg: '#FEA800',
                }}
                _focus={{
                  bg: '#FEA800',
                }}>
                Seguir
              </Button>
            </Stack>
          </Box>
        </Center>
        <Center py={6} rounded="lg">
          <Box
            maxW={'320px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}>
            <Avatar
              size={'xl'}
              src={
                'https://i.imgur.com/qpnkIoO.png'
              }
              mb={4}
              pos={'relative'}
              _after={{
                content: '""',
                w: 4,
                h: 4,
                bg: 'green.300',
                border: '2px solid white',
                rounded: 'full',
                pos: 'absolute',
                bottom: 0,
                right: 3,
              }}
            />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              Gunichi
            </Heading>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
              @gunichi
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              Criação de ideias e aplicações de tecnologia para o mundo.
            </Text>

            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={'#19786A'}
                color={'white'}
                fontWeight={'500'}>
                DEV
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={'#FEA800'}
                color={'white'}
                fontWeight={'500'}>
                UI
              </Badge>
              <Badge
                px={2}
                py={1}
                bg='#FF6CDD'
                color={'white'}
                fontWeight={'500'}>
                UX
              </Badge>
            </Stack>

            <Stack mt={8} direction={'row'} spacing={4}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'#19786A'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(25 120 106 / 48%), 0 10px 10px -5px rgb(28 84 76 / 43%)'
                }
                _hover={{
                  bg: '#FEA800',
                }}
                _focus={{
                  bg: '#FEA800',
                }}>
                Seguir
              </Button>
            </Stack>
          </Box>
        </Center>
        <Center py={6} rounded="lg">
          <Box
            maxW={'320px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}>
            <Avatar
              size={'xl'}
              src={
                'https://i.imgur.com/qpnkIoO.png'
              }
              mb={4}
              pos={'relative'}
              _after={{
                content: '""',
                w: 4,
                h: 4,
                bg: 'green.300',
                border: '2px solid white',
                rounded: 'full',
                pos: 'absolute',
                bottom: 0,
                right: 3,
              }}
            />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              Gunichi
            </Heading>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
              @gunichi
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              Criação de ideias e aplicações de tecnologia para o mundo.
            </Text>

            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={'#19786A'}
                color={'white'}
                fontWeight={'500'}>
                DEV
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={'#FEA800'}
                color={'white'}
                fontWeight={'500'}>
                UI
              </Badge>
              <Badge
                px={2}
                py={1}
                bg='#FF6CDD'
                color={'white'}
                fontWeight={'500'}>
                UX
              </Badge>
            </Stack>

            <Stack mt={8} direction={'row'} spacing={4}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'#19786A'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(25 120 106 / 48%), 0 10px 10px -5px rgb(28 84 76 / 43%)'
                }
                _hover={{
                  bg: '#FEA800',
                }}
                _focus={{
                  bg: '#FEA800',
                }}>
                Seguir
              </Button>
            </Stack>
          </Box>
        </Center>
        <Center py={6} rounded="lg">
          <Box
            maxW={'320px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}>
            <Avatar
              size={'xl'}
              src={
                'https://i.imgur.com/qpnkIoO.png'
              }
              mb={4}
              pos={'relative'}
              _after={{
                content: '""',
                w: 4,
                h: 4,
                bg: 'green.300',
                border: '2px solid white',
                rounded: 'full',
                pos: 'absolute',
                bottom: 0,
                right: 3,
              }}
            />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
              Gunichi
            </Heading>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
              @gunichi
            </Text>
            <Text
              textAlign={'center'}
              color={useColorModeValue('gray.700', 'gray.400')}
              px={3}>
              Criação de ideias e aplicações de tecnologia para o mundo.
            </Text>

            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
              <Badge
                px={2}
                py={1}
                bg={'#19786A'}
                color={'white'}
                fontWeight={'500'}>
                DEV
              </Badge>
              <Badge
                px={2}
                py={1}
                bg={'#FEA800'}
                color={'white'}
                fontWeight={'500'}>
                UI
              </Badge>
              <Badge
                px={2}
                py={1}
                bg='#FF6CDD'
                color={'white'}
                fontWeight={'500'}>
                UX
              </Badge>
            </Stack>

            <Stack mt={8} direction={'row'} spacing={4}>
              <Button
                flex={1}
                fontSize={'sm'}
                rounded={'full'}
                bg={'#19786A'}
                color={'white'}
                boxShadow={
                  '0px 1px 25px -5px rgb(25 120 106 / 48%), 0 10px 10px -5px rgb(28 84 76 / 43%)'
                }
                _hover={{
                  bg: '#FEA800',
                }}
                _focus={{
                  bg: '#FEA800',
                }}>
                Seguir
              </Button>
            </Stack>
          </Box>
        </Center>
      </SimpleGrid>
      </Flex>
      </Box>

    </Flex>
    
  );
}