import { Input, VStack } from '@chakra-ui/react'
import React from 'react'

function CustomInput({name,id}) {
  return (
    <VStack alignItems={'flex-start'}>
        <label htmlFor={id}>{name}</label>
        <Input bg='blue.50' id={id}/>
    </VStack>
  )
}

export default CustomInput
