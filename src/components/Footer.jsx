import { HStack, Text } from '@chakra-ui/react'
import React from 'react'

function Footer() {
  return (
    <HStack h={'5vh'} justifyContent={'flex-end'} padding={4} position={'fixed'} w={'100%'} bottom={0} bg={'blue.200'}>
       <Text fontFamily={'mono'}>
        -made by Mahesh Barapatre
        </Text> 
    </HStack>
  )
}

export default Footer
