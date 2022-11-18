import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { Modal } from '@mantine/core';
import { AiFillCheckCircle } from 'react-icons/ai';
import router from 'next/router';

export default function RegisterForm() {

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [opened, setOpened] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  const handleCreateAccount = () => {
    axios.post('http://localhost:8000/accounts/register/', {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        withCredentials: true,
      },
      name,
      username,
      email,
      password,
    }).then((response) => {
      if (response.status === 201 || response.status === 200) {
        setOpened(true);
      }
    }).catch((error) => {
      console.log(error);
    });
  }



  return (
    <>
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Crie sua conta
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              para aproveitar todos os cursos ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>Nome</FormLabel>
                    <Input 
                      type="text" 
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      focusBorderColor='#FEA800'
                    />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Username</FormLabel>
                    <Input 
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      focusBorderColor='#FEA800'
                    />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  focusBorderColor='#FEA800'
                />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Senha</FormLabel>
                <InputGroup>
                  <Input 
                    type={showPassword ? 'text' : 'password'} 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    focusBorderColor='#FEA800'
                  />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  onClick={handleCreateAccount}
                  bg={'#FEA800'}
                  color={'white'}
                  _hover={{
                    bg: '#ad6f03',
                  }}>
                  Criar conta
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Já tem um cadastro? <Link color={'#FEA800'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>

      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Cadastro realizado com sucesso!"
      >
        <Box 
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <AiFillCheckCircle size={100} color="#FEA800" />
        </Box>
        <Text size={'20'} align="center" pt={4} color='#FEA800' fontWeight={'500'}>
          Oba, sua conta foi criada com sucesso!
        </Text>
        <Text size={'20'} align="center" pt={0} color='#FEA800' fontWeight={'400'}>
          Agora você pode aproveitar todos os cursos da plataforma.
        </Text>

        <Box textAlign="right">
          <Button
            onClick={() => router.push('/login')}
            colorScheme="yellow"
            variant="outline"
            mr={3}
          >
            Clique aqui para fazer login
          </Button>
        </Box>
      </Modal>
    </>
  );
}