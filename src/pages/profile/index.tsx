import React, { useEffect } from 'react'

import { Flex, Box, Heading, Text, Button, Link, Stack } from '@chakra-ui/react'
import axios from 'axios';
import router from 'next/router';

const Profile = () => {


              

  useEffect(() => {
      axios.get('http://150.230.73.121:8000/accounts/me/', {
        headers: {          
          withCredentials: true,
        },
    })
      .then((response) => {
        console.log(response);
      }
      
      )}
  )

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