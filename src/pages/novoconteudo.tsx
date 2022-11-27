import { Box, Flex } from '@chakra-ui/react'
import { parseCookies } from 'nookies'
import React, { useEffect, useState } from 'react'
import SmallWithSocial from '../Components/Footer/Footer'
import MultiStep from '../Components/Form/Form'
import Nav from '../Components/Navbar/Navbar'
import Error from '../Components/NotAllowed/NotAllowed'
import Sidebar from '../Components/Sidebar'
import { api } from '../services/api/api'

const NovoConteudo = () => {

  const [isTeacher, setIsTeacher] = useState(false)

  useEffect(() => {

    const { 'nextauth.token': token } = parseCookies()

    console.log(token)

    api.get(`/accounts/me/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setIsTeacher(response.data.teacher)
    }).catch((error) => {
      console.log(error)
    })

  }, [])

  if (!isTeacher) {
    return (
      <>
        <Nav />
        <Error />
        <SmallWithSocial />
      </>
    )
  } else {
    return (
      <> <Flex w="100%" h="170vh">
      <Sidebar />
      <Box w="100%" h="100%" maxW={1480} mb='20' justify="center" align="center">
        <Nav />
        <MultiStep />
      </Box>
    </Flex>
    <SmallWithSocial />

      </>
    )
  }
  
}

export default NovoConteudo