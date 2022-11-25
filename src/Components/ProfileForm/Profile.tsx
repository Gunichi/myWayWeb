import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Input,
  HStack,
  useToast,
  AvatarBadge,
  transition,
} from '@chakra-ui/react';
import { Modal } from '@mantine/core';
import { parseCookies } from 'nookies';
import { useEffect, useRef, useState } from 'react';
import {
  MdEdit
} from 'react-icons/md';
import { api } from '../../services/api/api';
import SmallWithSocial from '../Footer/Footer';

type ProfileProps = {
  name: string;
  email: string;
  image: string;
  username: string;
  birthdate: string;
  profilePic: string;
};

export default function SocialProfileWithImage() {


  const toast = useToast();
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps);
  const [editModal, setEditModal] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const [newAvatarPreview, setNewAvatarPreview] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {

    const { 'nextauth.token': token } = parseCookies()

    api.get(`/accounts/me/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setProfile(response.data)
    }).catch((error) => {
      console.log(error)
    })

  }, [])

  const handleEditProfile = () => {
    setEditModal(true)
  }

  const handleUpdateProfile = () => {

    const { 'nextauth.token': token } = parseCookies()

    api.put(`/accounts/edit/`, {
      name: name,
      email: email,
      username: username,
      birthdate: birthdate,
      profilePic: profilePic
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      },
    }).then((response) => {
      toast(
        {
          title: 'Perfil atualizado com sucesso!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        }
      )
    }).catch((error) => {
      console.log(error)
    })
  }


  console.log(profile)


  return (
    <>
      <Center py={6} height="100vh">
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              name={profile.name}
              size={'xl'}
              src={
                profile.profilePic
              }
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>

          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {profile.name}
              </Heading>
              <Text color={'gray.500'}>@{profile.username}</Text>
              <Text color={'gray.500'}>{profile.birthdate}</Text>
            </Stack>

            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#19786A', 'gray.900')}
              color={'white'}
              rounded={'md'}
              onClick={() => handleEditProfile()}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Editar perfil
            </Button>
          </Box>
        </Box>
      </Center>

      <Modal
        opened={editModal}
        onClose={() => setEditModal(false)}
        size="lg"
      >    
        <Flex justify={'center'} mt={-12}>
          <Avatar                 
            boxSize="5rem"
            name={profile.name}
            onClick={() => {
              inputRef.current?.click();
            }}
          >
            <AvatarBadge boxSize="2rem" bg="#19786A" color="white">
              <MdEdit />
              <input
                type="file"
                hidden 
                ref={inputRef}
              />
            </AvatarBadge>
          </Avatar>
        </Flex>
        <Box p={6}>
          <HStack spacing={5} align={'center'} mb={5}>
            <Input 
              placeholder="Nome" 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </HStack>
          <HStack spacing={5} align={'center'} mb={5}>
            <Input
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />

            <Input
              placeholder="Data de nascimento"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
              
          </HStack>
        </Box>
        <Button
          w={'full'}
          mt={8}
          bg='linear-gradient(90deg, #FFF 0%, #19786A 50%, #FFF 100%)'
          color={'white'}
          rounded={'md'}
          onClick={() => handleUpdateProfile()}
          _hover={{
            transform: 'translateY(-2px)',
            bg: 'linear-gradient(90deg, #FFF 0%, #FEA800 50%, #FFF 100%)',
            transition: 'all 0.10s ease-in-out'
          }}
          

        >
          Salvar 
        </Button>
      </Modal>
      <SmallWithSocial />
    </>
  );
}