import React, { use, useEffect, useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react';


import { useToast } from '@chakra-ui/react';
import { api } from '../../services/api/api';
import { parseCookies } from 'nookies';
import Sidebar from '../Sidebar';

const Form1 = () => {

  type Curso = {
    titulo: string;
    descricao: string;
  }

  const [curso, setCurso] = useState<Curso>({
    titulo: '',
    descricao: '',
  });

  const handlePost = () => {

    const { 'nextauth.token': token } = parseCookies();

    api.post('/cursos/curso/', {
      titulo: curso.titulo,
      descricao: curso.descricao,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  

  return (
    <>
      <Heading 
        w="100%" 
        textAlign={'left'} 
        fontWeight="bold" 
        fontSize='3xl' 
        color='#FEA800' 
        mb="2%"
        _hover={{
          textDecoration: 'underline',
          textDecorationColor: '#19786A',
        }}
      >
        Novo curso
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Título do curso
          </FormLabel>
          <Input 
            focusBorderColor="#19786A"
            id="titulo" 
            placeholder="Título do curso"
            value={curso.titulo}
            onChange={(e) => setCurso({...curso, titulo: e.target.value})}
          />
        </FormControl>    
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Descrição do curso
        </FormLabel>
        <Input 
          focusBorderColor="#19786A"
          id="description" 
          type="description" 
          placeholder="Descrição do curso"
          value={curso.descricao}
          onChange={(e) => setCurso({...curso, descricao: e.target.value})}
        />
      </FormControl>
      <Button
        mt="5"
        onClick={handlePost}
        variant="solid"
        bg="#FEA800"
        w="100%"
        mr="5%"
        color="white"
        _hover={{
          bg: '#19786A',
        }}
        >
          Cadastrar curso
        </Button>
    </>
  );
};

const Form2 = () => {

  type Cursos = {
    id: string;
    titulo: string;
    descricao: string;
  }

  const [cursos, setCursos] = useState<Cursos[]>([]);

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies();

    api.get('/cursos/curso/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setCursos(response.data)
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  const [selectValue, setSelectValue] = useState(1);

  const handleSelect = (e: any) => {
    setSelectValue(e.target.value);
  }

  console.log(selectValue);

  type Modulo = {
    titulo: string;
  }

  const [modulo, setModulo] = useState<Modulo>({
    titulo: '',
  });

  const handlePost = () => {

    const { 'nextauth.token': token } = parseCookies();

    api.post(`/cursos/curso/${selectValue}/addmodulo/`, {
      titulo: modulo.titulo,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }

  
  return (
    <>
      <Heading 
        w="100%" 
        textAlign={'left'} 
        fontWeight="bold" 
        fontSize='3xl' 
        color='#FEA800' 
        mb="2%"
        _hover={{
          textDecoration: 'underline',
          textDecorationColor: '#19786A',
        }}
      >
        Novo módulo
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]}>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          Selecione um curso
        </FormLabel>
        <Select 
          focusBorderColor="#19786A"
          id="curso"
          placeholder="Selecione um curso"
          value={selectValue}
          onChange={handleSelect}
        >
          {cursos.map((curso) => (
            <option key={curso.id} value={curso.id}>{curso.titulo}</option>
          ))}
        </Select>

      </FormControl>

      <FormControl as={GridItem} colSpan={6}>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Título do módulo
        </FormLabel>
        <Input
          focusBorderColor="#19786A"
          id="titulo"
          type="text"
          placeholder="Título do módulo"	
          value={modulo.titulo}
          onChange={(e) => setModulo({...modulo, titulo: e.target.value})}
        />
      </FormControl>
      <Button
        mt="5"
        onClick={handlePost}
        variant="solid"
        bg="#FEA800"
        w="100%"
        mr="5%"
        color="white"
        _hover={{
          bg: '#19786A',
        }}
      >
        Cadastrar curso
      </Button>
    </>
  );
};

const Form3 = () => {

  type Cursos = {
    id: string;
    titulo: string;
    descricao: string;
  }

  const [cursos, setCursos] = useState<Cursos[]>([]);

  useEffect(() => {
    const { 'nextauth.token': token } = parseCookies();

    api.get('/cursos/curso/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setCursos(response.data)
    }).catch((error) => {
      console.log(error);
    })
  }, []);

  const [selectValue, setSelectValue] = useState(1);

  const [modulos, setModulos] = useState([]);

  useEffect(() => {

    const { 'nextauth.token': token } = parseCookies();

    api.get(`/cursos/curso/${selectValue}`, {


      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setModulos(response.data.modulos)
    }).catch((error) => {
      console.log(error);
    })
  }, [selectValue]);

  const [selectValue2, setSelectValue2] = useState(1);


  type Video = {
    titulo: string;
    linkVideo: string;
  }

  const [video, setVideo] = useState<Video>({
    titulo: '',
    linkVideo: '',
  });

  const handlePost = () => {

    const { 'nextauth.token': token } = parseCookies();

    api.post(`/cursos/curso/${selectValue}/${selectValue2}/addvideo`, {
      titulo: video.titulo,
      linkVideo: video.linkVideo,
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      console.log(response.data);
    }).catch((error) => {
      console.log(error);
    })
  }


  return (
    <>
      <Heading 
        w="100%" 
        textAlign={'left'} 
        fontWeight="bold" 
        fontSize='3xl' 
        color='#FEA800' 
        mb="2%"
        _hover={{
          textDecoration: 'underline',
          textDecorationColor: '#19786A',
        }}
      >
        Enviar vídeo
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
        <FormControl as={GridItem} colSpan={[3, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"            
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Selecione um curso
          </FormLabel>
          <Select 
            focusBorderColor="#19786A"
            id="curso"
            placeholder="Selecione um curso"
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}
          >
            {cursos.map((curso) => (
              <option key={curso.id} value={curso.id}>{curso.titulo}</option>
            ))}
          </Select>

          <FormLabel
            mt="2%"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
          >
            Selecione um módulo
          </FormLabel>
          <Select
            focusBorderColor="#19786A"
            id="country"
            placeholder="Selecione um módulo"
            value={selectValue2}
            onChange={(e) => setSelectValue2(e.target.value)}
          >
            {modulos.map((modulo) => (
              <option key={modulo.id} value={modulo.id}>{modulo.titulo}</option>
            ))}

          </Select>

        </FormControl>

        <FormControl id="email" mt={1}>
        <FormLabel
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
        >
          Título do vídeo
        </FormLabel>
        <Input 
          focusBorderColor="#19786A"
          type="text"
          placeholder="Título do vídeo"
          value={video.titulo}
          onChange={(e) => setVideo({...video, titulo: e.target.value})}
        />
        <FormLabel
          mt="2%"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
        }}>
          URL do vídeo
        </FormLabel>
        <Input 
          focusBorderColor="#19786A"
          type="text"
          placeholder="URL do vídeo"
          value={video.linkVideo}
          onChange={(e) => setVideo({...video, linkVideo: e.target.value})}
        />
        <Button
          mt="5"
          onClick={handlePost}
          variant="solid"
          bg="#FEA800"            
          w="100%"
          mr="5%"
          color="white"
          _hover={{
            bg: '#19786A',
          }}
        >
          Criar video
        </Button>
      </FormControl>
    </SimpleGrid>
    </>
  );
};


export default function MultiStep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);

  const { isOpen: isEditOpen , onOpen: onEditOpen, onClose: onEditClose } = useDisclosure()
  const { isOpen: isCreateOpen , onOpen: onCreateOpen, onClose: onCreateClose } = useDisclosure()


  useEffect(() => {
    if (step === 1) {
      onEditOpen();
      setProgress(33.33);
    }
  }, [step]);

  useEffect(() => {
    if (step === 2) {
      onCreateOpen();
      setProgress(66.66);
    }
  }, [step]);

  return (
    <>
       <Modal isOpen={isEditOpen} onClose={onEditClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Deseja cadastrar um novo curso?</ModalHeader>
          <ModalBody>
            Caso você não tenha nenhum curso cadastrado, clique em <b>SIM</b>, caso queira apenas cadastrar um novo módulo , clique em <b>NÃO</b>.
          </ModalBody>

          <ModalFooter>
            <Button 
              bg="#FEA800"
              mr={3} 
              onClick={onEditClose}
              color="white"
              _hover={{
                bg: '#19786A',
              }}
            >
              Sim
            </Button>
            <Button 
              variant='solid'
              bg="#19786A"
              color="white"
              _hover={{
                bg: '#FEA800',
              }}
              onClick={() => {
                setStep(2);
                onEditClose();
              }}
            >
              Não
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <Modal isOpen={isCreateOpen} onClose={onCreateClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Deseja cadastrar um novo módulo?</ModalHeader>
          <ModalBody>
            Caso você não tenha nenhum módulo cadastrado, clique em <b>SIM</b>, caso queira apenas inserir um vídeo em um módulo já existente, clique em <b>NÃO</b>.
          </ModalBody>

          <ModalFooter>
            <Button 
              bg="#FEA800"
              color="white"
              _hover={{
                bg: '#19786A',
              }}
              mr={3} 
              onClick={onCreateClose}
            >
              Sim
            </Button>
            <Button 
              variant='solid'
              bg="#19786A"
              color="white"
              _hover={{
                bg: '#FEA800',
              }}
              onClick={() => {
                setStep(3);
                onCreateClose();
              }}
            >
              Não
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Box 
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          colorScheme="teal"
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>

        
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="flex-end">
            <Flex>      
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                variant="solid"
                bg={step === 1 ? 'transparent': '#19786A'}
                color='white'
                _hover={{
                  bg: step === 1 ? 'transparent': '#FEA800',
                }}
                w="7rem"
                mr="5%">
                {step === 1 ? '' : step === 2 ? 'Voltar' : 'Voltar'}
              </Button>     
              <Button
                w='100%'
                isDisabled={step === 3}
                color='white'
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                _hover={{
                  bg: '#FEA800',
                }}
                bg='#19786A'
                variant="outline">
                {step === 1 ? 'Pular' : step === 2 ? 'Pular' : 'Tudo pronto :)'}
              </Button>
            </Flex>
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}