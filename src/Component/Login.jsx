import { Container,  VStack ,Heading, Input, Button , Text} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
       <Container maxW={'container.xl'}  h={'100vh'}  padding={'16'} >
            <form>
       <VStack alignItems={'center'} spacing={'8'} w={["full",'96']} my={'16'} >
       <Heading> Wel-Come Back  </Heading>
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

           <Button  variant={'link'}  alignSelf={'flex-end'}>
            <Link  to={'/forgetpassword'}>

                Forget Password?
              </Link>

           </Button>

             <Button>  Log In </Button>

               <Text  textAlign={'right'}>
               <Button  variant={'link'}  alignSelf={'flex-end'}>
            <Link  to={'/signup'}>

                 Sign Up 
              </Link>

           </Button>
                 New user?</Text>
              
       </VStack>

            </form>
         
       </Container>
  )
}

export default Login