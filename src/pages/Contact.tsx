import { Text, Separator,Button,Link, Box,Fieldset, Input, Stack } from "@chakra-ui/react"
import { MdEmail } from "react-icons/md"
import {  PiPhoneListFill } from "react-icons/pi";
import { SlSocialLinkedin,SlSocialTwitter } from "react-icons/sl";
import { SiGithub } from "react-icons/si";
import { Field } from "@/components/ui/field"
import {
  NativeSelectField,
  NativeSelectRoot,
} from "@/components/ui/native-select"



export default function Contact(){
    return(
        <div>
            <Text color={"white"} marginTop={30} textStyle="3xl"  marginLeft={400} marginRight={200}> Contact Me</Text>
            <Text textAlign={"right"} marginRight={400}>
            <Button colorPalette={'pink'}><Link  color={'white'} fontSize={15} href="...">Contact me <PiPhoneListFill /></Link> </Button>
            <Button colorPalette={'pink'}  marginLeft={10}><Link   color={'white'} fontSize={15} href="...">Send me message <MdEmail /></Link> </Button>
            </Text>

            <Fieldset.Root size="lg" marginLeft={400}  maxW="md">
      <Stack>
        <Fieldset.Legend color="white">Contact Form</Fieldset.Legend>
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
            <NativeSelectField color={"black"}
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


                <div>
                
        

        
            <Box>
            <Text marginLeft={850} marginTop={50} color="white">
                Reach me in :{" "}
                <Link 
                    marginLeft={2}
                    href="https://www.linkedin.com/in/ninditaeka/"    
                    _hover={{borderColor:"white"}}
                 >
                    <SlSocialLinkedin size={30} color="white" />
                </Link>{" "}
                <Link  
                    marginLeft={2}
                    href="https://chakra-ui.com"
                    _hover={{borderColor:"white"}}
                 >
                    <SlSocialTwitter size={30} color="white" />
                   
                </Link>{" "}

                <Link  
                    marginLeft={2}
                    href="https://chakra-ui.com"
                    _hover={{borderColor:"white"}}
                 >
                    <SiGithub size={30} color="white" />
                   
                </Link>{" "}


            
            </Text>
            </Box>
        
            
            <Separator marginTop={100} marginLeft={400} width={1100} size="sm"/>
            </div>
        </div>
    )
}