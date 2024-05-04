import React from 'react'
import screenbar from "../assets/images/Combined Shape.svg";
import wifi from "../assets/images/Wi-Fi.svg";
import battery from "../assets/images/Battery.svg";
import { Box, Container, Flex, Image, Text } from '@chakra-ui/react';


const Navbar = () => {
  return (
     <Flex 
  
    justifyContent={'space-between'}>
        <Box><Text
         color={'#001233'}
        fontWeight={'600'}
         >9:41</Text></Box>
        <Flex gap={2}>
         <Image src={screenbar}/>
         <Image src={wifi}/>
         <Image src={battery}/>
        </Flex>
    </Flex>
  )
}

export default Navbar