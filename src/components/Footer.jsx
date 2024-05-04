import {Container, Flex, Image, Stack, Text } from '@chakra-ui/react'
import homeIcon from '../assets/images/Vector.svg'
import reportIcon from '../assets/images/Vector 2.svg'
import chatIcon from '../assets/images/Group 25.svg'
import budgetIcon from '../assets/images/Vector4.svg'
import profileIcon from '../assets/images/Vector5.svg'
import React from 'react'

const Footer = () => {
  return (
    <Container 
    maxW='8xl'
    >
   <Flex justifyContent={'space-between'} 
   pt={'30px'}
   pb={'30px'}
   
   >
   <Stack direction="column" align="center">
    <Image src={homeIcon} />
    <Text textAlign="center"
    mt={'25px'}
    >Home</Text>
</Stack>
   <Stack direction="column" align="center">
    <Image src={reportIcon} />
    <Text textAlign="center"
    mt={'25px'}
    >Reports</Text>
</Stack>
   <Stack direction="column" align="center">
    <Image src={chatIcon} />
    <Text 
    textAlign="center"
    >Chat</Text>
</Stack>

     <Stack direction="column" align="center">
    <Image src={budgetIcon} />
    <Text textAlign="center"
    mt={'25px'}
    >Budget</Text>
</Stack>

<Stack direction="column" align="center">
    <Image src={profileIcon} />
    <Text textAlign="center"
     mt={'25px'}
    >Profile</Text>
</Stack>
   </Flex>
   </Container>
  )
}

export default Footer;