import React from 'react'
import {Box, Heading, HStack, Stack, VStack , Button, Input , Text} from '@chakra-ui/react';
import {AiOutlineSend} from 'react-icons/ai'

   export const Footer = () => {
  return (
      <Box
        bgColor={'blackAlpha.900'} 
        minH={'40'}
        p='16'
        color={'white'}
      >
        <Stack  direction={['column' , 'row']}>

            <VStack  alignItems={'stretch'}  w={'full'} px='4' >
              <Heading size={'md'}  textTransform={'uppercase'}>

                Subcribe to More Updates
              </Heading>

              <HStack>
             <Input   placeholder='Enter Email here '  border={'none'} outline={'none'}
             
             />
                <Button 
                p={'0'}
                colorScheme={'purple'}
                varian={'ghost'}
                borderRadius={'0 20px 20px 0'}
                >
                       <AiOutlineSend    size={'20'} />     
                </Button>
              </HStack>

            </VStack>

            <VStack   w={'full'}  borderLeft={['none' , '1px solid white']}
            borderRight={['none' , '1px solid white']}
            >
              <Heading size={'md'} textTransform={'uppercase'} textAlign={'center'} 
                    children='ALL GAMER ZONE' 

              />
                   <Text>
                          FOR ALL GAMING COMUNITY 
                    </Text>    

            </VStack>
            <VStack   w={'full'} 
         
            >
                
                  <Heading  size={'md'}   children='SOCIAL MEDIA '  textTransform={'uppercase'} />
                  

            </VStack>
        </Stack>


      </Box>
        
      

  )
}

export default Footer