import { Text,Separator,HStack, Stack, Flex, Box} from "@chakra-ui/react"
import { Rating } from "@/components/ui/rating"
import { Avatar } from "@/components/ui/avatar"

export default function Testimonial(){
    return(
        <div>
              <Text color={"white"} marginTop={30} textStyle="3xl"  marginLeft={400} marginRight={200}> Testimonials </Text>
            <Flex justify="center">
                <Box  borderWidth="1px" background="grey.50" borderColor="white" 
                     marginTop={10}  rounded={"2xl"} height="200px" width="400px" _hover={{borderColor:"pink"}}>
                    <Stack maxW="1000px" gap="4" >
                    <Rating marginLeft={15} marginTop={5}colorPalette="orange" readOnly size="sm" defaultValue={5}  marginBottom={2}/>
                    <Text color={"white"} fontWeight={400} textAlign={"left"} marginBottom={3} marginLeft={15}>
                    Nindita is a great Programmer. <br />She is very professional and
                    knowledgeable.
                    </Text>
                    <HStack gap="6">
                    <Avatar marginLeft={15} marginTop={3}
                    name="Matthew Jones"
                    src="https://randomuser.me/api/portraits/men/86.jpg"
                    />
                    <Stack textStyle="sm" gap="0" textAlign={"left"}>
                    <Text fontWeight="medium" color={"white"} marginTop={3}>Matthew Jones</Text>
                    <Text color="fg.muted">CTO, GITS Indonesia</Text>
                    </Stack>
                    </HStack>
                    </Stack>
                </Box>

                <Box 
                     borderWidth="1px" background="grey.50" borderColor="white" 
                     marginTop={10}  rounded={"2xl"} height="200px" width="400px" marginLeft={50} _hover={{borderColor:"pink"}}>
                    <Stack maxW="1000px" gap="4" >
                    <Rating marginLeft={15} marginTop={5}colorPalette="orange" readOnly size="sm" defaultValue={5}  marginBottom={2}/>
                    <Text color={"white"} fontWeight={400} textAlign={"left"}  marginLeft={15}>
                    "I am thrilled with the outstanding services, <br />
                    and highly recommend Nindita for any web <br />
                    development project."
                    
                    </Text>
                    <HStack gap="6">
                    <Avatar marginLeft={15}
                    name="Matthew Jones"
                    src="https://randomuser.me/api/portraits/men/73.jpg"
                    />
                    <Stack textStyle="sm" gap="0" textAlign={"left"}>
                    <Text fontWeight="medium" color={"white"} >Micheal Thomas</Text>
                    <Text color="fg.muted">CTO, Accenture Indonesia</Text>
                    </Stack>
                    </HStack>
                    </Stack>
                </Box>
            </Flex>
              <Separator marginTop={100} marginLeft={400} width={1100} size="sm"/>
        </div>
    )
}