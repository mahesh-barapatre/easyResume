import { HStack, Text } from '@chakra-ui/react'
import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
      <HStack id='header' position={'absolute'} top={0} w={'100%'} justifyContent={'space-between'} padding={2} h={'10vh'} bg={'blue.200'}>
            <Text fontFamily={'invert'} fontWeight={'bold'} fontStyle={'italic'} fontSize={'1cm'} >easyResume</Text>       
            <HStack justifyContent={'space-between'}>
              <Link to={'/template'}>
                <Text border={'2px'} fontFamily={'cursive'} fontSize={'.5cm'} >TEMPLATE</Text>
              </Link>
              <Link to={'/'}>
                <Text border={'2px'} fontFamily={'cursive'} fontSize={'.5cm'} >HOME</Text>
              </Link>
            </HStack>
      </HStack>
  )
}

export default Header
