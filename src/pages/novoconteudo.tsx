import { parseCookies } from 'nookies'
import React, { useEffect, useState } from 'react'
import SmallWithSocial from '../Components/Footer/Footer'
import MultiStep from '../Components/Form/Form'
import Nav from '../Components/Navbar/Navbar'
import Error from '../Components/NotAllowed/NotAllowed'
import { api } from '../services/api/api'

const NovoConteudo = () => {

  const [isTeacher, setIsTeacher] = useState(false)

  useEffect(() => {

    const { 'nextauth.token': token } = parseCookies()

    console.log(token)

    api.get(`/accounts/me/`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      setIsTeacher(response.data.teacher)
    }).catch((error) => {
      console.log(error)
    })

  }, [])

  if (!isTeacher) {
    return (
      <>
        <Nav />
        <Error />
        <SmallWithSocial />
      </>
    )
  } else {
    return (
      <>
        <Nav />
        <MultiStep />
        <SmallWithSocial />
      </>
    )
  }
  
}

export default NovoConteudo