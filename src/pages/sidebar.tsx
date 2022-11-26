import { Flex, Text, Badge, Box, Image, SimpleGrid, Button, Stack, Avatar, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, } from '@chakra-ui/react'; 
import { parseCookies } from 'nookies';
import { useEffect, useState } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import Sidebar from "../Components/Sidebar"
import { api } from '../services/api/api';



const sidebar = () => {

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

  return (
    <>
    <Sidebar />
    <Flex
        
      >
          <Text fontSize="3xl" fontWeight="bold" color="#000000" ml="10" mt="10">Olá, {profile.name} ✌️</Text>
          {/*<Box maxW={1480} bgGradient='linear(to-l, #7928CA, #FF0080)' m={10} borderRadius='md'>
            <Stack spacing={2} p={5}>
              <Text fontSize="xl" fontWeight="bold" color="#FFF">A mudança te espera</Text>
              <Text fontSize="xl" fontWeight="bold" color="#FFF" ml="10" mt="5">Aprenda com os melhores cursos</Text>
              <Text fontSize="xl" fontWeight="bold" color="#FFF" ml="10" mt="2">Aprenda com os melhores cursos</Text>
            </Stack>
  </Box>*/}
          <Text fontSize="3xl" fontWeight="bold" color="#000000" ml="10" mt="10">Cursos</Text>
          <SimpleGrid columns={3} spacing={10} p="6" maxW={1480} mx="auto" mt="6">
            {courses.map(course => (
              <Box key={course.id} maxW={1480} h='fit-content' bg="white" borderRadius="md" p="4">
                <Image src={'https://i.imgur.com/qpnkIoO.png'} alt={course.titulo} borderRadius='10' h='150' w='100%' /> 
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
                >
                  Acessar
                </Button>
              </Box>
            ))}
          </SimpleGrid>
      </Flex>
    </>
  )
}

export default sidebar