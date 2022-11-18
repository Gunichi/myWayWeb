import React, { useEffect } from 'react'

import { Flex, Box, Heading, Text, Button, Link, Stack } from '@chakra-ui/react'
import axios from 'axios';
import router from 'next/router';
import { api } from '../../services/api/api';
import { parseCookies } from 'nookies';

const Profile = () => {

  const { 'nextauth.token': token } = parseCookies();


  useEffect(() => {
    if (!token) {
      router.push('/');
    }
  }, [token]);
  

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={'gray.50'}>
      <Box
        rounded={'lg'}
        bg={'white'}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Perfil
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            Aqui você pode editar seu perfil
          </Text>
        </Stack>
      </Box>
    </Flex>
  )
}



export default Profile