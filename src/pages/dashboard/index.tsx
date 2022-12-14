import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';

import { api } from '../../services/api/api';
import { 
  Badge, 
  Box, 
  Flex, 
  Text, 
  Image, 
  SimpleGrid,
  Button, 
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Stack, } from '@chakra-ui/react';

import router from 'next/router';
import SmallWithSocial from '../../Components/Footer/Footer';
import Nav from '../../Components/Navbar/Navbar';
import { FiMoreHorizontal } from 'react-icons/fi';

const Dashboard = () => {

  type Courses = {
    id: string;
    titulo: string;
    descricao: string;
    image: string;
  }

  type ProfileProps = {
    id: string;
    name: string;
    email: string;
    image: string;
  }

  const [courses, setCourses] = useState<Courses[]>([]);
  const [profile, setProfile] = useState<ProfileProps>({} as ProfileProps);

  useEffect(() => {

    const { 'nextauth.token': token } = parseCookies();
    
    api.get('/cursos/curso/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setCourses(response.data)
    }).catch((error) => {
      console.log(error);
    })

  }, []);

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



  console.log(courses);
  
  return (
    <>
    <Nav />
    <Flex w="100%" h="170vh">
      
        <Box w="100%" h="100%" maxW={1480} bg="#F6F6F6" mb='20'>
          <Text fontSize="3xl" fontWeight="bold" color="#000000" ml="10" mt="10">Olá, {profile.name} ✌️</Text>
          <Box maxW={1480} bgGradient='linear(to-l, #7928CA, #FF0080)' m={10} borderRadius='md'>
            <Stack spacing={2} p={5}>
              <Text fontSize="xl" fontWeight="bold" color="#FFF">Todo conteúdo financeiro em um só lugar!</Text>
              <Text fontSize="xl" fontWeight="bold" color="#FFF" ml="10" mt="5">Todo conhecimento a mais é válido</Text>
            </Stack>
          </Box>
          <Text fontSize="3xl" fontWeight="bold" color="#000000" ml="10" mt="10">Cursos</Text>
          <SimpleGrid columns={3} spacing={10} p="6" maxW={1480} mx="auto" mt="6">
            {courses.map(course => (
              <Box key={course.id} maxW={1480} h='fit-content' bg="white" borderRadius="md" p="4">
                <Box bgGradient={`linear(to-r, #FF0080, #FF8C00)`} w="100%" h="10" borderRadius="md" ></Box>
                <Badge borderRadius="full" px="2" bg="#FEA800" color="WHITE" mt="2" ml="2">
                  10 vídeos
                </Badge>
                <Badge borderRadius="full" px="2" ml='2' bg='#19786A' color={'white'} mt="2">
                  Fácil
                </Badge>
                <Text fontSize="xl" fontWeight="bold" color="#000000" ml="2" mt="2">{course.titulo}</Text>
                <Accordion 
                  allowMultiple
                  mt="2"
                  ml="-2"
                >
                  <AccordionItem 
                    border='none'
                    _hover={{
                      bg: 'none'
                    }}

                  >
                    <h2>
                      <AccordionButton
                        _hover={{
                          bg: 'none'
                        }}
                      >
                        <AccordionIcon />
                        <Flex flex='1' textAlign='right' justify="flex-end">
                          <FiMoreHorizontal size={20} />
                        </Flex>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                      {course.descricao}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Button
                  w='100%'
                  mt='2'
                  bg='#FEA800'
                  color='white'
                  _hover={{
                    bg: '#19786A'
                  }}
                  onClick={() => router.push(`/curso/${course.id}`)}
                >
                  Acessar
                </Button>
              </Box>
            ))}
          </SimpleGrid>
        </Box>
    </Flex>
    <SmallWithSocial />
    </>
  )

};


export default Dashboard;

