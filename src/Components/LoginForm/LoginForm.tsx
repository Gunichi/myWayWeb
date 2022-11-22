import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from 'axios';
import router from 'next/router';
import { useEffect, useState } from 'react';
import { api } from '../../services/api/api'
import { parseCookies, setCookie } from 'nookies';


export default function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = () => {
    api.post('/accounts/login/', {
      headers: {
        withCredentials: true,
      },
      user: email,
      password: password,
    })
    .then((response) => {
      if (response.status === 200) {
        setCookie(undefined, 'nextauth.token', response.data.jwt, {
          maxAge: 60 * 60 * 1, // 1 hour
        });
        

        router.push('/dashboard');
      } 
    })
    .catch((error) => {
      console.log(error);
      alert('Usuario o contraseña incorrectos');
    });
  }


  

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Entre na sua conta</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            para curtir todos os cursos disponíveis <Link color={'#FEA800'}>gratuitamente</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input 
                type="email" 
                placeholder="Digite seu email"
                focusBorderColor='teal.700'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input 
                type="password" 
                placeholder="Digite sua senha"
                focusBorderColor='teal.700'
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox colorScheme='teal'>Lembrar de mim</Checkbox>
                <Link color={'teal.400'}>Esqueceu a senha?</Link>
              </Stack>
              <Button
                onClick={handleSubmit}
                bg={'teal.400'}
                color={'white'}
                _hover={{
                  bg: 'teal.500',
                }}>
                Entrar
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}