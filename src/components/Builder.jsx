import { Button, HStack, Input, Text, Textarea, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Live from './Live'
import './app.css'
import { HashLink } from 'react-router-hash-link'

function Builder() {

  const handleFileChange = (event) =>{
    console.log('object')
    const file=event.target.files[0];
    setUploadedFile(file)
  }

      let personal_ = {
      img:'',
      fname:'',
      lname:'',
      job:'',
      me:'',}
      let contact_={

        phone:'',
        email:'',
        address:'',
      }
      let skill_={

        skill0:'',
        skill1:'',
        skill2:'',
        skill3:'',
      }
      let exp_={

        pos0:'',
        pos1:'',
        pos2:'',
        cop0:'',
        cop1:'',
        cop2:'',
        st1:'',
        st2:'',
        st0:'',
        end0:'',
        end1:'',
        end2:'',
        des1:'',
        des2:'',
        des0:'',
      }
      let edu_={

        edust0:'',
        edust1:'',
        add0:'',
        add2:'',
        de0:'',
        de1:'',
        ins0:'',
        ins1:'',
        eduend0:'',
        eduend1:''
      }
  

  const [data,setData]=useState({})
  const [uploadedFile,setUploadedFile]=useState(null)

  const skill_save=()=>{
let skills=document.getElementsByClassName('skill')
    skill_.skill0=skills[0].value
    skill_.skill1=skills[1].value
    skill_.skill2=skills[2].value
    skill_.skill3=skills[3].value
    setData({...data,...skill_})

  }

  const con_save=()=>{
    contact_.phone=document.getElementById('ph').value
    contact_.email=document.getElementById('mail').value
    contact_.address=document.getElementById('ad').value
    setData({...data,...contact_})

  }

  const exp_save=()=>{
    let cop=document.getElementsByClassName('cop')
    exp_.cop0=cop[0].value
    exp_.cop1=cop[1].value
    exp_.cop2=cop[2].value
    let pos=document.getElementsByClassName('pos')
    exp_.pos0=pos[0].value
    exp_.pos1=pos[1].value
    exp_.pos2=pos[2].value
    let st=document.getElementsByClassName('st')
    exp_.st0=st[0].value
    exp_.st1=st[1].value
    exp_.st2=st[2].value
    let end=document.getElementsByClassName('end')
    exp_.end0=end[0].value
    exp_.end1=end[1].value
    exp_.end2=end[2].value
    let des=document.getElementsByClassName('des')
    exp_.des0=des[0].value
    exp_.des1=des[1].value
    exp_.des2=des[2].value
    setData({...data,...exp_})

  }
  const edu_save=()=>{
    let ins=document.getElementsByClassName('ins')
    edu_.ins0=ins[0].value
    edu_.ins1=ins[1].value
    let de=document.getElementsByClassName('de')
    edu_.de0=de[0].value
    edu_.de1=de[1].value
    let edust=document.getElementsByClassName('edu-st')
    edu_.edust0=edust[0].value
    edu_.edust1=edust[1].value
    let eduend=document.getElementsByClassName('edu-end')
    edu_.eduend0=eduend[0].value
    edu_.eduend1=eduend[1].value
    let add=document.getElementsByClassName('stu-add')
    edu_.add0=add[0].value
    edu_.add1=add[1].value

    setData({...data,...edu_})

  }

  const per_save=()=>{
    personal_.fname=document.getElementById('fname').value
    personal_.lname=document.getElementById('lname').value
    personal_.job=document.getElementById('job').value
    personal_.me=document.getElementById('me').value
    setData({...data,...personal_})

  }
  return(
  
    <HStack id='wrap' marginBottom={'5vh'}>
      
      <VStack marginTop={8} height={'125vh'} className='wide' w={'50%'}  bg={'white'} overflowX={'auto'}>
        <HStack color={'white'} className='wide' w={'50%'} zIndex={'1'} bg={'blue.400'} justifyContent={'space-around'} position={'Fixed'} >
          <HashLink to={'#personal'}>
          <Text>Personal</Text>
          </HashLink>
          <HashLink to={'#skills'}>
          <Text>Skills</Text>
          </HashLink>
          <HashLink to={'#contact'}>
          <Text>Contact</Text>
          </HashLink>
          <HashLink to={'#exp'}>
          <Text>Experience</Text>
          </HashLink>
          <HashLink to={'#edu'}>
          <Text>Education</Text>
          </HashLink>
        </HStack>
        
        <div id="personal">
        <Text marginTop={'1.5rem'} fontWeight={'300'} fontSize={'1.5rem'}>Personal Details</Text>
        <label>Uplaod profile photo</label><br/>
        <input id='img' onChange={handleFileChange} type="file" accept='image/*'/>
          <HStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='fname'>First Name</label>
          <Input bg='blue.50' name='fname' id='fname'/>
            </VStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='lname'>Last Name</label>
          <Input bg='blue.50' name='lname' id='lname'/>
            </VStack>
          </HStack>
          <HStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='job'>Job Title</label>
          <Input bg='blue.50' name='job' id='job'/>
            </VStack>
          </HStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='me'>About Me</label>
          <Textarea bg='blue.50' name='me' id='me'/>
            </VStack>
            <Button m={'auto'} display={'block'} marginTop={1} colorScheme='twitter' onClick={per_save}>Save</Button>
        </div>


        <div id="skills">
        <Text fontWeight={'300'} fontSize={'1.5rem'}>Skills</Text>
          <HStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='skill'>Skill</label>
          <Input bg='blue.50' className='skill' name='skill'/>
            </VStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='skill'>Skill</label>
          <Input bg='blue.50' className='skill' name='skill'/>
            </VStack>
          </HStack>
          <HStack>
          <VStack alignItems={'flex-start'}>
          <label htmlFor='skill'>Skill</label>
          <Input bg='blue.50' className='skill' name='skill'/>
            </VStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='skill'>Skill</label>
          <Input bg='blue.50' className='skill' name='skill'/>
            </VStack>
          </HStack>
          <Button m={'auto'} display={'block'} marginTop={1} colorScheme='twitter' onClick={skill_save}>Save</Button>
        </div>


        <div id="contact">
        <Text fontWeight={'300'} fontSize={'1.5rem'}>Contact</Text>
          <HStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='ph'>Phone</label>
          <Input bg='blue.50' name='phone' id='ph'/>
            </VStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='mail'>Email</label>
          <Input bg='blue.50' id='mail' name='email'/>
            </VStack>
          </HStack>
          
            <VStack alignItems={'flex-start'}>
          <label htmlFor='ad'>Address</label>
          <Textarea bg='blue.50' id='ad' name='address'/>
            </VStack>
            <Button m={'auto'} display={'block'} marginTop={1} colorScheme='twitter' onClick={con_save}>Save</Button>
          </div>


        <div id="exp">
          <Text fontWeight={'300'} fontSize={'1.5rem'}>Experience</Text>
          <HStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='cop'>Company Name</label>
          <Input bg='blue.50' className='cop'/>
            </VStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='pos'>Position</label>
          <Input bg='blue.50' className='pos'/>
            </VStack>
          </HStack>
          <HStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='st'>Start date</label>
          <Input bg='blue.50' className='st'/>
            </VStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='end'>End date</label>
          <Input bg='blue.50' className='end'/>
            </VStack>
          </HStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='des'>Description</label>
          <Textarea bg='blue.50' className='des'/>
            </VStack>
          
          
        <div className="bline"></div>

          <HStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='cop'>Company Name</label>
          <Input bg='blue.50' className='cop'/>
            </VStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='pos'>Position</label>
          <Input bg='blue.50' className='pos'/>
            </VStack>
          </HStack>
          <HStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='st'>Start date</label>
          <Input bg='blue.50' className='st'/>
            </VStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='end'>End date</label>
          <Input bg='blue.50' className='end'/>
            </VStack>
          </HStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='des'>Description</label>
          <Textarea bg='blue.50' className='des'/>
            </VStack>

            <div className="bline"></div>

          <HStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='cop'>Company Name</label>
          <Input bg='blue.50' className='cop'/>
            </VStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='pos'>Position</label>
          <Input bg='blue.50' className='pos'/>
            </VStack>
          </HStack>
          <HStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='st'>Start date</label>
          <Input bg='blue.50' className='st'/>
            </VStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='end'>End date</label>
          <Input bg='blue.50' className='end'/>
            </VStack>
          </HStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='des'>Description</label>
          <Textarea bg='blue.50' className='des'/>
            </VStack>
            <Button m={'auto'} display={'block'} marginTop={1} colorScheme='twitter' onClick={exp_save}>Save</Button>
        </div>


        <div id="edu">
        <Text fontWeight={'300'} fontSize={'1.5rem'}>Education</Text>
          <HStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='edu-st'>Start date</label>
          <Input bg='blue.50' name='edu-start' className='edu-st'/>
            </VStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='edu-end'>End date</label>
          <Input bg='blue.50' name='edu-end' className='edu-end'/>
            </VStack>
          </HStack>
          <HStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='stu-add'>Address</label>
          <Input bg='blue.50' name='stu-add' className='stu-add'/>
            </VStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='ins'>Institue</label>
          <Input bg='blue.50' name='institute' className='ins'/>
            </VStack>
          </HStack>
          <HStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='de'>Course</label>
          <Input bg='blue.50' name='course' className='de'/>
            </VStack>
          </HStack>

          <div className="bline"></div>

          <HStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='edu-st'>Start date</label>
          <Input bg='blue.50' name='edu-start' className='edu-st'/>
            </VStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='edu-end'>End date</label>
          <Input bg='blue.50' name='edu-end' className='edu-end'/>
            </VStack>
          </HStack>
          <HStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='stu-add'>Address</label>
          <Input bg='blue.50' name='stu-add' className='stu-add'/>
            </VStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='ins'>Institue</label>
          <Input bg='blue.50' name='institute' className='ins'/>
            </VStack>
          </HStack>
          <HStack>
            <VStack alignItems={'flex-start'}>
          <label htmlFor='de'>Course</label>
          <Input bg='blue.50' name='course' className='de'/>
            </VStack>
          </HStack>
          <Button m={'auto'} display={'block'} marginTop={1} colorScheme='twitter' onClick={edu_save}>Save</Button>
        </div>
        
    </VStack>

      <Live data={data} name={'mahesh'} file={uploadedFile} />
    </HStack>
  
)}

export default Builder
