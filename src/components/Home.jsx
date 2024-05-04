import naira from "../assets/images/Group 14.svg";
import frame from "../assets/images/Frame 5.svg";
import percentage from "../assets/images/Group 41.svg";
import plate from "../assets/images/Group 15.svg";
import savings from "../assets/images/Group 16.svg";
import { Box, Container, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar'
import Footer from "./Footer";

const Home = () => {
  return (
    <>
    <Container
    mt='15px'
    maxW='6xl'
    background={'#FCFCFC'}
    >
        <Navbar />
        
        <Container 
        mt={'30px'}
        mb={'30px'}
        >
            <Text
            className='circular'
            color={'#001233'}
            // fontFamily={'circular'}
            fontSize={'28px'}
            lineHeight={'36px'}
            fontWeight={'700'}
            >Budget</Text>
        </Container>

        <Container>
        <Flex>
          <Image src={naira} mr={'5px'} />
          <Text
          color={'#707480'}
          fontSize={'14px'}
          fontWeight={'400'}
          lineHeight={'20.3px'}
          >Monthly Budget</Text>
        </Flex>
        </Container>

        <Container
        mt='30px'
        mb='30px'
        background="#FFFFFF"
        boxShadow="0px 5px 10px 2px rgba(0, 0, 0, 0.1)" 
        borderRadius="10px"
        >
      <Flex>
        <Text
        fontWeight={700}
        fontSize="28px"
        lineHeight={'36px'}
        color="#001233"
        p={'6px'}
        ml={'14px'}>₦120,000</Text>
      </Flex>
    </Container>


     <Container>
    <Flex justifyContent={'space-between'}>
      <Flex gap={'14px'}>
      <Text
      fontWeight={400}
        fontSize="16px"
        lineHeight={'#30.5px'}
        color="#707480">Last Month</Text>
      <Text
      fontWeight={500}
      fontSize="16px"
      lineHeight={'#30.5px'}
      color="#0466C8"
      borderBottom="3px solid #0466C8" 
      // borderBottomWidth={}
      pb="1"
      >This</Text>
       <Text
        fontWeight={500}
        fontSize="16px"
        lineHeight={'#30.5px'}
        color="#0466C8"
        // left={'5px'}
       >Month</Text>
      </Flex>

      <Box>
        <Image src={frame} />
      </Box>
    </Flex>
      </Container>

       <Flex 
      //  mt={'30px'}
       justifyContent={'center'}
       alignItems={'center'}
       flexDirection={{base: 'column', md: 'row'}}
       gap={{ md: '10'}}
       mt={{ base: "30px"}}
       >
        <Box >
        <Image src={percentage} />
        </Box>

        <Box
        mt={{ base: "30px"}}
        >
          <Text
          fontWeight={400}
          fontSize="14px"
          lineHeight={'#20.5px'}
          color={'#707480'}
          >Amount spent so far</Text>
          <Flex>
          <p className="pnumb">₦50,000</p><p className="pnumb2">/₦120,000</p>
          </Flex>
        </Box>
     
      </Flex>


      <Container
      mt={'30px'}
      >
        <Text
        fontWeight={500}
        fontSize="21px"
        lineHeight={'#24px'}
        color={'#001233'}
        >Category Breakdown</Text>

        <Flex justifyContent={'space-between'}
        mt={'30px'}
        >
          <Flex gap={'10px'}>
           <Image src={plate} />
           <Box>
            <Text
            fontWeight={500}
            fontSize="14px"
            lineHeight={'#24px'}
            color={'#001233'}
            >Food and Drink</Text>
            <Text
            fontWeight={400}
            fontSize="14px"
            lineHeight={'#20.3px'}
            color={'#707480'}
            >40%</Text>
           </Box>
           </Flex>

        <Flex>
          <p className="pnumb3">₦20,000</p><p className="pnumb4">/₦42,000</p>
          </Flex>
        </Flex>
        <Flex justifyContent={'space-between'}
        mt={'30px'}
        >
          <Flex gap={'10px'}>
           <Image src={savings} />
           <Box>
            <Text
            fontWeight={500}
            fontSize="14px"
            lineHeight={'#24px'}
            color={'#001233'}
            >Savings</Text>
            <Text
            fontWeight={400}
            fontSize="14px"
            lineHeight={'#20.3px'}
            color={'#707480'}
            >20%</Text>
           </Box>
           </Flex>

        <Flex>
          <p className="pnumb3">₦10,000</p><p className="pnumb4">/₦24,000</p>
          </Flex>
        </Flex>
      </Container>
    </Container>


   <Footer />
   </>
  )
}

export default Home;