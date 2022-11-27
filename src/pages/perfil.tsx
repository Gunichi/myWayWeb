import { Box, Flex } from '@chakra-ui/react';
import * as React from 'react';
import SmallWithSocial from '../Components/Footer/Footer';
import Nav from '../Components/Navbar/Navbar';
import SocialProfileWithImage from '../Components/ProfileForm/Profile';
import Sidebar from '../Components/Sidebar';

const Profile = () => {
  return (
    <>  
      <Flex w="100%" h="170vh">
      <Sidebar />
      <Box w="100%" h="100%" maxW={1480} mb='20' justify="center" align="center">
      <SocialProfileWithImage />
      </Box>
      </Flex>
      <SmallWithSocial />
    </>
  );
};

export default Profile;