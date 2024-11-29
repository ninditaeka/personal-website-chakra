import { Span, Text, Separator, Flex } from "@chakra-ui/react"


export default function About(){
    return(
        <Flex direction={{base:"column"}} paddingX={{base:"16px", md:"300px"}} id="about">
            <Flex  direction={{base:"column"}} paddingY={{base:"30px"}}>
                    <Text color={"whitesmoke"} fontSize={{base:"24px", md:"40px"}} >About
                    </Text>
                    
                    <Text  textAlign="justify" color={"whitesmoke" }  marginTop={{base:"16px"}} fontSize={{base:"16px", md:"14px"}}  >As a Full-Stack Web developer, I am passionate about developing web that are scalable, 
                        effective, and user friendly. 
                        My expertise in developing dynamic and flexible websites has been refined by my strong foundation in software development.
                        <Text as={Span} color={'pink.400'}  > I am trustworthy, attention to detail, timeless, and effective communicator
                        </Text>. I expertise over the last 5 years
                            from   small company websites to large-scale applications, and partnering with a variety of teams to provide top-notch results. 
                        <Text as={Span} color={'pink.400'}> I have capability for developing a  responsive and interactive web applications using JavaScript, React, etc.
                            
                        </Text>
                    </Text>
            </Flex>
            <Separator size="md"/>
        </Flex>
    )
}


