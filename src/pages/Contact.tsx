import { Text, Button,Link, Box,Fieldset, Input, Stack, Flex } from "@chakra-ui/react"
import { MdEmail } from "react-icons/md"
import { SlSocialLinkedin,SlSocialTwitter } from "react-icons/sl";
import { SiGithub } from "react-icons/si";
import { Field } from "@/components/ui/field"
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select"



export default function Contact(){
    return(
      <Flex direction={{base:"column"}} paddingX={{base:"16px", md:"300px"}} id="contact">
         <Flex  direction={{base:"column"}} paddingY={{base:"30px"}}>
         <Text color={"white"}  textStyle="3xl"  >
                         Contact Me
                    </Text>
            
          <Flex direction={{base:"column",md:"row"}} gap={"16px"} alignItems={"center"} justifyContent={"space-between"}>
            <Fieldset.Root size="lg"   maxW="md" marginBottom={"30px"}>
              <Stack>
                <Fieldset.HelperText color="white">
                  Please provide your contact details below.
                </Fieldset.HelperText>
              </Stack>

              <Fieldset.Content color={"white"}>
                <Field label="Name">
                  <Input name="name" />
                </Field>

                <Field label="Email address">
                  <Input name="email" type="email" />
                </Field>

                <Field label="Country">
                  <NativeSelectRoot>
                    <NativeSelectField color={"white"}
                      name="country"
                      items={[
                        "United Kingdom (UK)",
                        "Canada (CA)",
                        "United States (US)",
                        "Indonesia (ID)",
                      ]}
                    />
                  </NativeSelectRoot>
                </Field>
              </Fieldset.Content>

              <Button type="submit" alignSelf="flex-start" bgColor="black" color="white" borderColor={"white"} _hover={{outlineColor:"pink.500"}}>
                Submit
              </Button>
            </Fieldset.Root>

            <Button colorPalette={'pink'} marginBottom={"20px"} ><Link   color={'white'} fontSize={15} href="...">Send me message <MdEmail /></Link> </Button>
          </Flex>
              
            <Box>
            <Flex justifyContent={"center"}>
            <Text  color="white" >
                Reach me in :{" "}
                <Link 
                    marginLeft={2}
                    href="https://www.linkedin.com/in/ninditaeka/"
                    aria-label="linkedin"    
                    _hover={{borderColor:"white"}}
                 >
                    <SlSocialLinkedin size={30} color="white" />
                </Link>{" "}
                <Link  
                    marginLeft={2}
                    href="#"
                    aria-label="twitter"
                    _hover={{borderColor:"white"}}
                 >
                    <SlSocialTwitter size={30} color="white" />
                   
                </Link>{" "}

                <Link  
                    marginLeft={2}
                    href="https://github.com/ninditaeka"
                    aria-label="github"
                    _hover={{borderColor:"white"}}
                 >
                    <SiGithub size={30} color="white" />
                   
                </Link>{" "}
            </Text>
            </Flex>
            </Box>
        
            
          
          </Flex>
        
        </Flex>
    )
}