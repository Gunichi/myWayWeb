import React, { useEffect, useState } from 'react'

import { parseCookies } from 'nookies'

import { api } from '../../services/api/api'

import { Box, Flex, Text, Image, SimpleGrid, Button, Accordion, AccordionItem, AccordionButton, AccordionIcon, AccordionPanel, Badge } from '@chakra-ui/react'

import { BsPlayCircle } from 'react-icons/bs'
import  { useRouter } from 'next/router'
import SmallWithSocial from '../../Components/Footer/Footer'
import Nav from '../../Components/Navbar/Navbar'
import ReactPlayer from 'react-player'

type CourseDetails = {
  id: string;
  titulo: string;
  descricao: string;
  image: string;
  modulos: {
    id: string;
    titulo: string;
    categoria: string;
    categoriaNome: string;
    videos : {
      id: string;
      titulo: string;
      linkVideo: string;
      modulo: string;
      thumbnail: string;
    }[]
  }[]
}

const CourseDetails = () => {

  const router = useRouter()
  const id = router.query.slug

  const [course, setCourse] = useState<CourseDetails>({} as CourseDetails)

  useEffect(() => {

    const { 'nextauth.token': token } = parseCookies()

    api.get(`/cursos/curso/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setCourse(response.data)
      console.log(response.data.descricao)
    }).catch((error) => {
      console.log(error)
    })

  }, [])
    

  return (
    <>
      <Nav>    
      </Nav>
      
      <Box w="100%" h="200vh" bg="gray.100" p="4" justifyContent="center" alignItems="center">
        <Box 
          w="100%" 
          bg="white" 
          p="4" 
          justifyContent="center" 
          alignItems="center" 
          boxShadow="md"
          borderRadius="md"
        >
          <Box 
            w="100%"
            bg="white"
            borderRadius="md"
            p="4"
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="2xl" fontWeight="bold" color="#7A5205">{course.titulo}</Text>
            <Text fontSize="md" color="#7A5205">{course.descricao}</Text>
            <Flex mt="4">
              <Badge bg="#FEA800" fontSize="md" borderRadius={'md'} color="#7A5205" mt="2">{course.modulos?.length} Módulos</Badge>
              <Badge bg="#FEA800" fontSize="md" borderRadius={'md'} color="#7A5205" mt="2" ml={2}>Nível Básico</Badge>
            </Flex>
            
          </Box>
          <Box
            w="90%"
            h="100%"
            bg="#FFE5B3"
            borderRadius="md"
            p="4"
            m='4'
            justifyContent="center"
            alignItems="center"
          >
            <Text fontSize="2xl" fontWeight="bold" color="#7A5205">Módulos</Text>
            {course.modulos?.map((modulo) => (
              <Accordion 
                allowToggle
                key={modulo.id}
              >
                <AccordionItem 
                  border="none"
                  borderRadius="md"
                  bg="white"
                  boxShadow="md"
                  mt="4"
                >
                  <h2>
                    <AccordionButton _expanded={{ bg: "#FEA800", color: "gray.900", borderRadius:'5' }}>
                      <Box flex="1" textAlign="left"> 
                        <Flex justifyContent="space-between" alignItems="center">
                          <Text fontSize="md" fontWeight="bold" color="#7A5205"> {modulo.titulo} </Text>
                          <Badge bg="#FEA800" fontSize="md" borderRadius={'md'} color="#7A5205">{modulo.videos?.length} Vídeos</Badge>
                        </Flex>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Accordion allowToggle>
                      {modulo.videos?.map((video) => (
                        <AccordionItem
                          key={video.id}
                          border="none"
                          borderRadius="md"
                          bg="white"
                          boxShadow="md"
                          mt="4"
                        >
                          <h2>
                            <AccordionButton color="#7A5205" _expanded={{ bg: "#19786A", color: "white", borderRadius:'5' }}>
                              <Box flex="1" textAlign="left">
                                <Flex justifyContent="space-between" alignItems="center">
                                  <Text fontSize="md" fontWeight="bold" > {video.titulo} </Text>
                                  <Badge bg="#FEA800" fontSize="md" borderRadius={'md'} color="#7A5205"> {video.id}° Aula</Badge>
                                </Flex>
                              </Box>
                              <AccordionIcon />
                            </AccordionButton>
                          </h2>
                          <AccordionPanel pb={4} height={'100%'}>
                            <Flex justifyContent="space-between" alignItems="center">
                              <Text fontSize="md" fontWeight="bold" color="#7A5205"> Entenda um pouco melhor sobre os Fundos </Text>
                              <Button
                                leftIcon={
                                  <BsPlayCircle 
                                    size={20}
                                    fontWeight="bold"
                                  />
                                }
                                bg="#FEA800"
                                color="#7A5205"
                                _hover={{ bg: "#FEA800", color: "#FFF" }}
                                _active={{ bg: "#FEA800", color: "#7A5205" }}
                                _focus={{ bg: "#FEA800", color: "#7A5205" }}
                                fontSize="md"
                                fontWeight="bold"
                                onClick={() => window.open(video.linkVideo, '_blank')}
                              >
                                Assistir no youtube
                              </Button>
                            </Flex>
                            <Box bg="red" w="100%" h="100%" mt="4">
                              <ReactPlayer url={video.linkVideo} width="100%" height="500px" />
                            </Box>
                            
                          </AccordionPanel>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Box>
      <SmallWithSocial />
    </>
  )

}

export default CourseDetails
    
  