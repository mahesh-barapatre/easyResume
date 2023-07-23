import { Button, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
        <VStack h={'85vh'} bg={'blue.50'}>
        <Text color='blue.400' fontSize={'4cm'}>404</Text>
        <Text fontWeight={'bold'} fontSize={'1.3cm'}>Page not found!</Text>
        <Text >Opps!The page you are looking for does not exists.</Text>
        <Link to={'/'}>
        <Button boxShadow={"2px 2px 2px blue"} colorScheme='twitter' marginTop={'1cm'}>BACK TO HOME</Button>
        </Link>
        </VStack>
  )
}

export default Error
