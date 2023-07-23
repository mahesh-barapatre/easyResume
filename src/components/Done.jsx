import { Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Done() {
  return (
    <VStack justifyContent={'center'} h={'85vh'}>
        <Text fontSize={'xxx-large'} color={'blue.300'}>Thank You!</Text>
        <Text>Resume Downloaded Successfully</Text>
        <Link to={'/'}>
        <Image src='https://tips.typeapp.com/assets/ic_action_done.png'/>
        </Link>
    </VStack>
  )
}

export default Done
