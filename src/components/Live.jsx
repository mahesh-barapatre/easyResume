import { Avatar, Button, HStack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { Phone, Map, Mail } from 'react-feather'
import { Link } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'

function Live(props) {
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: ()=> componentRef.current,
        documentTitle:'Resume',
        
    })

    const [image,setImage]=useState(null)

    useEffect(()=>{
            if (props.file){
                const reader = new FileReader()
                reader.onload=()=>{
                    setImage(reader.result)
                }
                reader.readAsDataURL(props.file)
                        
                    }
        
    },[props.file])
    

    const exp = [
        {
            name:`${props.data.cop0}`,
            position:`${props.data.pos0}`,
            start:`${props.data.st0}`,
            end:`${props.data.end0}`,
            detail:`${props.data.des0}`
        },
        {
            name:`${props.data.cop1}`,
            position:`${props.data.pos1}`,
            start:`${props.data.st1}`,
            end:`${props.data.end1}`,
            detail:`${props.data.des1}`
        },
        {
            name:`${props.data.cop2}`,
            position:`${props.data.pos2}`,
            start:`${props.data.st2}`,
            end:`${props.data.end2}`,
            detail:`${props.data.des2}`
        },
       
    ]
    const edu = [
        {
            course:`${props.data.de0}`,
            location:`${props.data.add0}`,
            start:`${props.data.edust0}`,
            end:`${props.data.eduend0}`,
            school:`${props.data.ins0}`
        },
        {
            course:`${props.data.de1}`,
            location:`${props.data.add1}`,
            start:`${props.data.edust1}`,
            end:`${props.data.eduend1}`,
            school:`${props.data.ins1}`
        },     
    ]
  return (
    <VStack marginTop={'10vh'}>
    <HStack h={'100%'} ref={componentRef}>
        <VStack h={'100%'} w={'40%'} color={'white'} p={6} alignItems={'flex-start'} bg={'gray.600'}>
            <Avatar src={image} alignSelf={'center'} size={'2xl'} />
            <Text className='head' fontWeight={'bold'} fontSize={'1.5rem'} textTransform={'uppercase'}>{props.data.fname} <br/> {props.data.lname}  </Text>
            <Text  textTransform={'uppercase'}>{props.data.job}</Text>
            <div className='hline'></div>
            <Text className='head' fontWeight={'bold'}>ABOUT ME</Text>
            <Text>{props.data.me}</Text>
            <div className="hline"></div>
            <Text className='head' fontWeight={'bold'}>SKILLS</Text>
            <Text>{props.data.skill0}</Text>
            <Text>{props.data.skill1}</Text>
            <Text>{props.data.skill2}</Text>
            <Text>{props.data.skill3}</Text>
            
            <div className="hline"></div>
            <Text className='head' fontWeight={'bold'}>CONTACT</Text>
            <HStack>
                <Phone/><Text>{props.data.phone}</Text>
            </HStack>
            <HStack>
                <Map/><Text>{props.data.address}</Text>
            </HStack>
            <HStack>
                <Mail/><Text>{props.data.email}</Text>
            </HStack>
            
        </VStack>

        <VStack h={'100%'} w={'60%'} p={8} alignItems={'flex-start'}>
            <Text w={'full'} className='high'>WORK EXPERIENCE</Text>
            {
                exp.map((item,id)=>{
        
                    return(
                        <VStack key={id} marginBottom={6} gap={0} alignItems={'flex-start'}>
                            <Text textTransform={'uppercase'} fontWeight={'bold'}> {item.name} </Text>
                            <Text fontWeight={'300'}> {item.start}-{item.end} </Text>
                            <Text fontWeight={'bold'}> {item.position} </Text>
                            <Text fontSize={'sm'}> {item.detail} </Text>
                        </VStack>
                    )
                })
            }

            <Text w={'full'} className='high'>EDUCATION</Text>
            {
                edu.map((item,id)=>{
                    return(
                        <VStack marginBottom={6} gap={0} key={id} alignItems={'flex-start'}>
                            <HStack >

                            <Text fontWeight={'600'}> {item.start}-{item.end} |</Text>
                            <Text> {item.location} </Text>
                            </HStack>
                            <Text fontWeight={'bold'}> {item.course} </Text>
                            <Text fontWeight={'300'}> {item.school} </Text>
                        </VStack>
                    )
                })
            }
        </VStack>
    </HStack>
    <Link to={'/downloaded'} >
    <Button colorScheme='twitter' onClick={handlePrint}>Print</Button>
    </Link>
    </VStack>

  )
}

export default Live
