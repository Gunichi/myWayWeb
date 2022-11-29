import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';

export default function ForgotPasswordForm(): JSX.Element {

  const router = useRouter();
  
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
          Esqueceu sua senha?
        </Heading>
        <Text
          fontSize={{ base: 'sm', sm: 'md' }}
          color={useColorModeValue('gray.800', 'gray.400')}>
          Você receberá um email com o link para redefinir sua senha.
        </Text>
        <FormControl id="email">
          <Input
            placeholder="email@email.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={'#19786A'}
            color={'white'}
            _hover={{
              bg: '#FEA800',
            }}>
            Solicitar redefinição de senha
          </Button>
          <Flex justify="center">
            <Text fontSize="sm" color={useColorModeValue('gray.600', 'gray.400')}>
              Já tem uma conta?{' '}
              <Link color={'#19786A'} onClick={() => router.push('/login')}>
                Entre aqui
              </Link>
            </Text>
          </Flex>
        </Stack>
      </Stack>
    </Flex>
  );
}