import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';

import { api } from '../../services/api/api';
import { Badge, Box, Flex, Text, Image, SimpleGrid, Button } from '@chakra-ui/react';

import router from 'next/router';
import SmallWithSocial from '../../Components/Footer/Footer';
import Nav from '../../Components/Navbar/Navbar';

const Dashboard = () => {

  type Courses = {
    id: string;
    titulo: string;
    descricao: string;
    image: string;
  }

  const [courses, setCourses] = useState<Courses[]>([]);

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

  console.log(courses);
  
  return (
    <>
    <Nav />
    <Box w="100%" h="100vh" bg="gray.100" p="4" justifyContent="center" alignItems="center">
      <SimpleGrid 
        columns={[1,2,3]} 
        spacing={1} 
        justifyContent="center"
      >
        {courses.map((course) => (  
          <Box
            key={course.id}
            w="70%"
            h='auto'
            bg="white"
            borderRadius="10"
            p="4"
            justifyContent="center"
            alignItems="center"
            boxShadow="md"
          >
            <Image 
              src='https://i.imgur.com/7bKkaa7.jpg'
              borderRadius="md"
              h="150px"
              w="100%"
              alt={course.titulo} 
            />
            <Flex mt={5} justify='center'>
              <Badge mr={4} rounded="full" px="2" fontSize="0.8em" bg="#FEA800">
                Básico
              </Badge>
              <Badge rounded="full" px="2" fontSize="0.8em" bg="#FEA800">
                10 aulas
              </Badge>
            </Flex>
            <Text fontSize="xl" fontWeight="bold" mt="4">{course.titulo}</Text>
            <Text fontSize="md" mt="4">{course.descricao}</Text>
            <Flex mt={5} justify='flex-end'>
              <Button 
                mt="4"
                onClick={() => router.push(`/curso/${course.id}`)}
                bg='#19786A'
                color='white'
                _hover={{
                  bg: '#FEA800',
                  color: 'white'
                }}
              >
                Acessar
              </Button>
            </Flex>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
    <SmallWithSocial />
    </>
  )

};


export default Dashboard;

