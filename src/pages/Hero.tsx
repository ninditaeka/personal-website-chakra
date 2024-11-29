import photo from'/src/assets/hijab.png'
import { Button, Image, Span, Flex } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { Separator} from "@chakra-ui/react"


export default function Hero (){
return(
    <Flex direction={{base:"column"}} paddingX={{base:"16px", md:"300px"}} >
        <Flex  direction={{base:"column", md:"row"}}>
            <Flex marginTop={{base:"36px"}}  marginBottom={{base:"42px"}} justifyContent={{base:"center"}}>
                <Image height={{base:"200px",md:"460px"}} width={{base:"200px",md:"460px"}} rounded="md" src={photo} />
            </Flex>
            <Flex direction={{base:"column"}}>
                <Text textAlign={{base:"center", md:"left"}} marginTop={{base:"2px", md:"80px"}} fontWeight={500} fontSize={{base:"24px", md:"36px"}} color={'white'}>I'm <Text as={Span} color={'pink.solid'} fontSize={{base:"24px", md:"46px"}} >Nindita Eka Setyahandani</Text></Text>
                <Text textAlign={{base:"center", md:"left"}} fontSize={{base:"24px", md:"40px"}} fontWeight={300}  color={'pink.300'} marginTop={{base:"16px"}} textUnderlinePosition={'left'} >Full-Stack Web Developer</Text>
                <Text  textAlign={{base:"justify"}} fontSize={{base:"16px", md:"14px"}}  fontWeight={300} color={'white'} marginTop={{base:"16px"}} textUnderlinePosition={'left'} >Developing scalable, smooth web solutions, and outstanding user experiences for your business expansion.</Text>
                <Flex justifyContent={{base:"center", md:"left"}}>
                    <Button colorPalette={'pink'} marginTop={{base:"32px"}} fontSize={{base:"16px", md:"16px"}} ><Link   color={'white'}  href="#contact">Contact me</Link> </Button>
                </Flex>
            </Flex>
       
        </Flex>
        <Separator marginTop={{base:"24px", md:""}} size="md"/>
    </Flex>
    )
}