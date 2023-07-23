import { HStack, Image } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

function Template() {
  return (
    <HStack justifyContent={'space-evenly'} alignContent={'center'}>
      <Link to={'/builder'}>
      <Image margin={'15vh'} h={'70vh'} src='https://www.my-resume-templates.com/wp-content/uploads/2023/05/professional-resume-template.jpg' />
      </Link>
    </HStack>
  )
}

export default Template
