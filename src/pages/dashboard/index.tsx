import { Button, Link } from '@chakra-ui/react';
import axios from 'axios';
import { parseCookies, setCookie } from 'nookies';
import * as React from 'react';
import { api } from '../../services/api/api';

const Dashboard = () => {

  api.get('/accounts/me/', {
    headers: {
      withCredentials: true,
    },
  })

  return (
    <>
    
      <h1>Dashboard</h1>
      <Link href="/profile">

      Profile</Link>
    </>
  )

};


  Dashboard.getInitialProps = async function(ctx) {

    const cookies = parseCookies(ctx);

  setCookie(ctx, "fromGetInitialProps", "value", {
    maxAge: 30 * 24 * 60 * 60,
    path: "/"
  });

  return { cookies };
};


export default Dashboard;