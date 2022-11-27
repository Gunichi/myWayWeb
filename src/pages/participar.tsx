import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import JoinOurTeam from '../Components/BeAMember/BeAMember'
import Nav from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar'

const Participar = () => {
  return (
    <>
      <Flex w="100%" h="170vh">
      <Sidebar />
      <Box w="100%" h="100%" maxW={1480} mb='20' justify="center" align="center">
      <JoinOurTeam  />
      </Box>
      </Flex>
    </>
  )
}

export default Participar