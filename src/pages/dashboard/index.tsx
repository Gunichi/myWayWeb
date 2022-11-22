import { useEffect, useState } from 'react';
import { parseCookies } from 'nookies';

import { api } from '../../services/api/api';
import { Badge, Box, Flex, Text, Image, SimpleGrid, Button } from '@chakra-ui/react';

import router from 'next/router';
import SmallWithSocial from '../../Components/Footer/Footer';

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
            h="100%"
            bg="white"
            borderRadius="md"
            p="4"
            justifyContent="center"
            alignItems="center"
            boxShadow="md"
          >
            <Image 
              src='https://i.imgur.com/7bKkaa7.jpg'
              borderRadius="md"
              h="200px"
              w="100%"
              alt={course.titulo} 
            />
            <Text fontSize="xl" fontWeight="bold" mt="4">{course.titulo}</Text>
            <Text fontSize="md" mt="4">{course.descricao}</Text>
            <Button 
              colorScheme="blue" 
              mt="4"
              onClick={() => router.push(`/curso/${course.id}`)}
            >
              Acessar
            </Button>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
    <SmallWithSocial />
    </>
  )

};


export default Dashboard;

