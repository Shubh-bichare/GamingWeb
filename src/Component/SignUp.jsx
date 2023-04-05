import { Container,  VStack ,Heading, Input, Button , Text, Avatar} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
       <Container maxW={'container.xl'}  h={'100vh'}  padding={'16'} >
            <form>
       <VStack alignItems={'center'} spacing={'8'} w={["full",'96']} my={'16'} >
       <Heading> GAMING HUB  </Heading>
           
           <Avatar  alignSelf={'center'}  boxSize={'135'} />

           <Input 
         placeholder='Enter your Name'
         type={'name'}
         required
         focusBorderColor={'purple.500'}
         />
            
         <Input 
         placeholder='Enter your Email'
         type={'email'}
         required
         focusBorderColor={'purple.500'}
         />

      <Input 
         placeholder='Enter your Password'
         type={'password'}
         required
         focusBorderColor={'purple.500'}
         />

           {/* <Button  variant={'link'}  alignSelf={'flex-end'}>
            <Link  to={'/forgetpassword'}>

                Forget Password?
              </Link>

           </Button> */}

             <Button> Sign Up  </Button>

               <Text  textAlign={'right'}>
                  Alrady SignUp? {' '}
               <Button  variant={'link'}  alignSelf={'flex-end'}>
            <Link  to={'/login'}>

                    Login 
              </Link>

           </Button>
                </Text>
              
       </VStack>

            </form>
         
       </Container>
  )
}



export default SignUp