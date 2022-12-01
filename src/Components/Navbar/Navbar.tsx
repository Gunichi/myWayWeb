import { ReactNode, useEffect, useState } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  Image
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/router';
import { FiLogOut } from 'react-icons/fi';
import { api } from '../../services/api/api';
import { parseCookies } from 'nookies';

const Links = ['Dashboard', 'Team', 'RoadMap'];

type ProfileProps = {
  name: string;
  email: string;
  image: string;
  username: string;
  birthdate: string;
  profilePic: string;
};

const NavLink = ({ children }: { children: ReactNode }) => (
  
  
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: '#FEA800',
      color: 'white'
    }}    
    href={
      children === 'Dashboard'
        ? '/dashboard'
        : children === 'Profile'
        ? '/perfil'
        : '/team'
    }>
    {children}
  </Link>
);

export default function Nav(
  { children }: { children: ReactNode }
) {

  const [isTeacher, setIsTeacher] = useState(false);
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  useEffect(() => {

    const { 'nextauth.token': token } = parseCookies()

    api.get(`/accounts/me/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setIsTeacher(response.data.teacher)
      setProfile(response.data)
    }).catch((error) => {
      console.log(error)
    })

  }, [])

  console.log(isTeacher)

  const router = useRouter();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={'whiteAlpha.100'} px={4} >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Image src='https://i.imgur.com/KiNsn8w.png' alt='logo' width={100} mt={4}/>
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}
            >
              <Button 
                bg={router.pathname === '/dashboard' ? '#FEA800' : 'white'}
                color={router.pathname === '/dashboard' ? 'white' : '#FEA800'}
                _hover={{
                  bg: '#19786A',
                  color: 'white'                
                }}
                onClick={() => router.push('/dashboard')}
              >
                Dashboard
              </Button>
              <Button 
                bg={router.pathname === '/team' ? '#FEA800' : 'white'}
                color={router.pathname === '/team' ? 'white' : '#FEA800'}
                _hover={{
                  bg: '#19786A',
                  color: 'white'
                }}
                onClick={() => router.push('/team')}
              >
                Team
              </Button>
              {isTeacher ? 
                <Button 
                  bg={router.pathname === '/novoconteudo' ? '#FEA800' : 'white'}
                  color={router.pathname === '/novoconteudo' ? 'white' : '#FEA800'}
                  _hover={{
                    bg: '#19786A',
                    color: 'white',
                  }}
                  onClick={() => router.push('/novoconteudo')}
                >
                  Postar conteúdo
                </Button>
              : null}
              
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Button
              variant={'solid'}
              bg={'#19786A'}
              color={'white'}
              size={'sm'}
              mr={4}
              _hover={{
                bg: '#FEA800',
                color: 'white',
              }}
              onClick={handleLogout}
              leftIcon={<FiLogOut />}>
              Sair
            </Button>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  name={profile.name}
                  src={
                    ''
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={() => {
                    router.push('/perfil')
                  }}
                  _hover={{
                    bg: '#19786A',
                    color: 'white'
                  }}
                >
                  Editar perfil
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    router.push('/participar')
                  }}
                  _hover={{
                    bg: '#19786A',
                    color: 'white'
                  }}
                >
                  Ser professor
                </MenuItem>
                <MenuDivider />
                <MenuItem
                  _hover={{
                    bg: '#FEA800',
                    color: 'white'
                  }}
                  onClick={() => { router.push('/suporte') }}
                >
                  Suporte
                </MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>   
      <Box>
        {children}
      </Box>
    </>
  );
}