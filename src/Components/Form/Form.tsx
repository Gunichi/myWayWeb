import React, { useEffect, useState } from 'react';
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
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
} from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';
import { api } from '../../services/api/api';
import { parseCookies } from 'nookies';

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
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Novo curso
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            Título
          </FormLabel>
          <Input 
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
          id="description" 
          type="description" 
          placeholder="Descrição do curso"
          value={curso.descricao}
          onChange={(e) => setCurso({...curso, descricao: e.target.value})}
        />
      </FormControl>
      <Flex w="100%" justifyContent="flex-end">
        <Flex>
          <Button
            mt="2%"
            onClick={handlePost}
            colorScheme="teal"
            variant="solid"
            w="100%"
            mr="5%"
          >
              Cadastrar curso
          </Button>
        </Flex>
      </Flex>
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
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        User Details
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
          Country / Region
        </FormLabel>
        <Select 
          id="country"
          placeholder="Select option"
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
          Street address
        </FormLabel>
        <Input
          id="titulo"
          type="text"
          placeholder="1234 Main St"
          mt="2%"
          value={modulo.titulo}
          onChange={(e) => setModulo({...modulo, titulo: e.target.value})}
        />
      </FormControl>

      <Flex w="100%" justifyContent="flex-end">
        <Flex>
          <Button
            mt="5%"
            onClick={handlePost}
            colorScheme="teal"
            variant="solid"
            w="100%"
            mr="5%"
          >
              Cadastrar curso
          </Button>
        </Flex>
      </Flex>
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
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Social Handles
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
            Website
          </FormLabel>
          <Select 
            id="country"
            placeholder="Select option"
            value={selectValue}
            onChange={(e) => setSelectValue(e.target.value)}

          >
            {cursos.map((curso) => (
              <option key={curso.id} value={curso.id}>{curso.titulo}</option>
            ))}
          </Select>

          <Select
            id="country"
            placeholder="Select option"
            value={selectValue2}
            onChange={(e) => setSelectValue2(e.target.value)}
            
            >
            {modulos.map((modulo) => (
              <option key={modulo.id} value={modulo.id}>{modulo.titulo}</option>
            ))}

            </Select>

        </FormControl>

        <FormControl id="email" mt={1}>
          <Input 
            type="text"
            placeholder="Email"
            value={video.titulo}
            onChange={(e) => setVideo({...video, titulo: e.target.value})}
          />
          <Input 
            type="text"
            placeholder="Email"
            value={video.linkVideo}
            onChange={(e) => setVideo({...video, linkVideo: e.target.value})}
          />
          <Button mt="2%" colorScheme="blue" onClick={handlePost}>
            Criar video
          </Button>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            About
          </FormLabel>
          <Textarea
            placeholder="you@example.com"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
          />
          <FormHelperText>
            Brief description for your profile. URLs are hyperlinked.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

const Form4 = () => {

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
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        User Details
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
          Country / Region
        </FormLabel>
        <Select 
          id="country"
          placeholder="Select option"
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
          Street address
        </FormLabel>
        <Input
          id="titulo"
          type="text"
          placeholder="1234 Main St"
          mt="2%"
          value={modulo.titulo}
          onChange={(e) => setModulo({...modulo, titulo: e.target.value})}
        />
      </FormControl>

      <Flex w="100%" justifyContent="flex-end">
        <Flex>
          <Button
            mt="5%"
            onClick={handlePost}
            colorScheme="teal"
            variant="solid"
            w="100%"
            mr="5%"
          >
              Cadastrar curso
          </Button>
        </Flex>
      </Flex>
    </>
  );
};

export default function MultiStep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  return (
    <>
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
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : step === 3 ? <Form3 /> : <Form4 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="flex-end">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                mr="5%">
                Voltar
              </Button>
              <Button
                w='100%'
                isDisabled={step === 4}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 4) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline">
                {step === 1 ? 'Já tenho um curso cadastrado' : 'Já tenho um modulo cadastrado'}
              </Button>
            </Flex>
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}