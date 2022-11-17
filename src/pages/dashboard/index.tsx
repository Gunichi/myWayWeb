import { Button, Link } from '@chakra-ui/react';
import axios from 'axios';
import * as React from 'react';
import Nav from '../../Components/Navbar/Navbar';

const Dashboard = () => {
  
  return (
    <>
    
      <Nav />
      <h1>Dashboard</h1>
      <Link href="/profile">

      Profile</Link>
    </>
  )
};

export default Dashboard;