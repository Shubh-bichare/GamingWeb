import { Heading, Stack, VStack , Text, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

   export  const Videos = () => {
       const vedioArr=[
           


       ]
        const [videoSrc , setVideoSrc]=useState(vedioArr[0])
  return (
         <Stack   direction={['column'  , 'row']}    h={'100vh'} >
     <VStack  width={'full'}>
              <video  
                 controls
                 controlsList='nodownload'
                src={videoSrc} style={{
                      width:"100%"
              }}>

                  
              </video>

              <VStack  alignItems={'flex-start'} p={'8'}  w={'full'} overflowY={'auto'}>

                 <Heading>
                      Sample Video 
                 </Heading>
                  <Text>This is the sample VList ideo of the
                  This is the sample VList ideo of theThis is the sample VList ideo of the  </Text>
                  This is the sample VList ideo of the
                  This is the sample VList ideo of the
                  This is the sample VList ideo of the
                  This is the sample VList ideo of the
                  This is the sample VList ideo of the
                  This is the sample VList ideo of the
                  This is the sample VList ideo of the
                  This is the sample VList ideo of the
                  This is the sample VList ideo of the
                  This is the sample VList ideo of the
                  This is the sample VList ideo of the
                  This is the sample VList ideo of the
                  This is the sample VList ideo of the
                  This is the sample VList ideo of the
                  This is the sample VList ideo of the
                  This is the sample VList ideo of the
                  This is the sample VList ideo of the
                  This is the sample VList ideo of the
                  This is the sample VList ideo of the
                  This is the sample VList ideo of the
                  This is the sample VList ideo of the
                  This is the sample VList ideo of the

              </VStack>

     </VStack>


     <VStack  w={['full'  ,'xl']} alignItems={'stretch'} p={'8'} spacing={'8'} overflow={'auto'} >
       
             {
                   vedioArr.map((item , index) =>{
                       return(
                        <Button  variant={'ghost'}  colorScheme={'purple'}
                        onClick={()=>setVideoSrc(item)}>
                            Lecture1  {index+1}
                    </Button>
                       )
                
                   })
             } 
     </VStack>

         </Stack>
  )
}

export default Videos