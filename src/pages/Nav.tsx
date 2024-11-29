
import { Link, Input, Flex,} from "@chakra-ui/react"


export default function Nav(){
    return(
        <Flex paddingX={{base:"16px", md:""}} paddingY={{base:"16px"}} alignItems={{base:"center"}} justifyContent={{base:"center"}}>
    {/* <Text textAlign="center">     */}
    <Link href="#about" color={"white"} colorPalette={"pink"} px={3} margin={{ base:"6px", md:"30px"}} fontSize={{base: "12px", md:"16px"}}>
    About 
    </Link>
    <Link href="#portofolio" color={"white"} colorPalette={"pink"} px={3} margin={{ base:"6px", md:"30px"}} fontSize={{base: "12px", md:"16px"}}>
    Portofolio
    </Link>
    <Link href="#contact" color={"white"} colorPalette={"pink"} px={3} margin={{ base:"6px", md:"30px"}} fontSize={{base: "12px", md:"16px"}}>
    Contact 
    </Link>
     <Input  boxSize={{base:"1"}} color={"pink"} height={10} width={250} fontSize={{base: "12px", md:"16px"}} placeholder ="Search" />
     {/* </Text> */}
     </Flex>
    )

}