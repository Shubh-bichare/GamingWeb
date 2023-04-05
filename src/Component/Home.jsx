import React from 'react'
import {Box ,Container,Heading,Image, Stack, Text} from '@chakra-ui/react'
import {Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg';
import img2 from '../assets/bgmi.jfif';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';


const headingOption={
       pos:"absolute",
       left:"50%",
       top:"50%",
       transform:"translate(-50%,-50%)",
       textTransform:"uppercase",
       p:"4",
       size:"4xl"
}


 export const Home = () => {
  return ( 
      <Box>
       <MyCarousel />

       <Container maxW={'container.xl'} minH={'100vh'}  p={'16'}>
      
     <Heading     textTransform={'uppercase'}  py='2' w={'fit-content'}   borderBottom={'2px solid'} margin='auto' >Services</Heading>
   
          <Stack
            h='full'
            p={'4'}
            alignItems='center'
            direction={['column', 'row']}
          >

           {/* <Image   src={img5} h={['40' , '350']} filter={'hue-rotate(-130deg)'} /> */}

           <Text 
             letterSpacing={'widest'}
             lineHeight={'190%'}

             h={['4','16']}
             textAlign='center'
             top={'20'}
           >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestias nihil labore voluptatum adipisci quod, dolorum maiores cupiditate sit, vero nam aliquam consequuntur. Aspernatur reiciendis necessitatibus nulla numquam! Earum at repellendus rem tenetur excepturi quo, quam qui unde cupiditate provident accusantium nobis exercitationem officiis expedita, ullam quos sit necessitatibus alias ipsum minima adipisci. Id atque amet corporis quisquam, sed numquam culpa assumenda maxime provident quia unde aspernatur aut reiciendis eveniet? Eius quam ullam fugit quidem incidunt provident, quasi asperiores numquam dolorem dignissimos voluptatem debitis minus ut, assumenda, totam exercitationem. Vel et recusandae corrupti nesciunt, atque natus quod ipsa vero ut quia consequuntur eaque optio quisquam iusto iste officia omnis autem beatae! Numquam iure ducimus quo illum dolorum dolores vel veniam.

              

           </Text>
          </Stack>


       </Container>
      </Box>
  )
};

const MyCarousel =()=>(

         
      <Carousel 
      autoPlay 
      infiniteLoop 
      interval={10000}  
      showStatus={false} 
      showThumbs={false}  
      showArrows={false}>

        <Box w='fill' h={'100vh'}>
        <Image   src={img1} /> 
        <Heading  bgColor={'blackAlpha.600'} color={'white'} {...headingOption} >
                The Future Is Gaming 
            </Heading> 
        </Box>

        <Box w={'fill'} h={'100vh'}>
        <Image   src={img2} /> 
        <Heading  bgColor={'blackAlpha.600'} color={'white'} {...headingOption}  >
                The Future Is Gaming 
            </Heading> 
        </Box>

        <Box w={'fill'} h={'100vh'}>
        <Image   src={img3} /> 
        <Heading  bgColor={'blackAlpha.600'} color={'white'} {...headingOption}  >
                The Future Is Gaming 
            </Heading> 
        </Box>

        <Box w={'fill'} h={'100vh'}>
        <Image   src={img4} /> 
        <Heading  bgColor={'blackAlpha.600'} color={'white'} {...headingOption}  >
                The Future Is Gaming 
            </Heading> 
        </Box>
       
      </Carousel>
      
)
  
 


export default Home