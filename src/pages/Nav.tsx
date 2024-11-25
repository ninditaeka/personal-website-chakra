
import { Link, Input, Text} from "@chakra-ui/react"


export default function Nav(){
    return(
        <div>
    <Text textAlign="center">    
     <Link href="#" color={"white"} colorPalette={"pink"} px={3} margin={30}  >About </Link>
     <Link href="#" color={"white"} colorPalette={"pink"} px={3} margin={30}>Protofolio </Link>
     <Link href="#" color={"white"} colorPalette={"pink"} px={3} margin={30}> Contact</Link>
     <Input  boxSize={"2/12"} color={"pink"} height={10} width={250} placeholder ="Search " />
     </Text>
     </div>
    )

}