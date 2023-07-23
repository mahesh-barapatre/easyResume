import { Button, VStack,Text, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    
    <VStack marginBottom={9} alignContent={'center'}>
      <Text fontStyle={'oblique'} fontSize={'1cm'}>easyResume
      Online Resume Builder.</Text>
      <Text fontSize={'.75cm'}>
"Your Path to Success Made Simple."</Text>
      <Text fontWeight={'bold'}>Free to use. Developed by hiring professionals.</Text>
      <Text> 
Resume writing can be stressful, confusing, and time-consuming if you do it all on your own. With our Resume Maker, it is quick, pain-free, and effective.</Text>
      <Image margin={'4% 0'} h={'5cm'} src='https://cdn.pixabay.com/photo/2017/10/31/00/23/portfolio-2903909_1280.png'/>
      <Link to={'/template'}>
      <Button colorScheme='twitter'>Create my Resume Now</Button>
      </Link>
    </VStack>
    
  )
}

export default Home
