import photo from'/src/assets/hijab.png'
import { Button, Image, Span } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Link } from "@chakra-ui/react"
import { Separator} from "@chakra-ui/react"


export default function Hero (){
return(
    <div>
         <Image rounded="md" position={'absolute'} left={350} top={150} src={photo} />
         <Text marginLeft={850} marginTop={160} fontWeight={500} fontSize={35} color={'white'}>I'm <Text as={Span} color={'pink.solid'} fontSize={45}>Nindita Eka Setyahandani</Text></Text>
         <Text marginLeft={850} marginTop={30} fontWeight={300} fontSize={40} color={'pink.300'} textUnderlinePosition={'left'} >Full-Stack Web Developer</Text>
         <Text marginLeft={850} marginTop={30} fontWeight={300} fontSize={15} color={'white'} textUnderlinePosition={'left'} >Developing scalable, smooth web solutions, and outstanding user experiences <br />for your business expansion.</Text>
         <Button colorPalette={'pink'} marginLeft={850} marginTop={30}><Link   color={'white'} fontSize={15} href="...">Contact me</Link> </Button>
         <Separator marginTop={100} marginLeft={400} width={1100} size="sm"/>
        
    </div>
    )
}