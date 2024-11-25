import { Span, Text } from "@chakra-ui/react"
import { Separator} from "@chakra-ui/react"

export default function About(){
    return(
        <div>
        <Text color={"whitesmoke"}textStyle="3xl" marginTop={25}  marginLeft={400} marginRight={200}>About</Text>
        <Text  textAlign="justify" color={"whitesmoke" }textStyle="lg" marginTop={25} marginLeft={400} marginRight={400}>As a Full-Stack Web developer, I am passionate about developing web that are scalable, 
        effective, and user friendly. 
        My expertise in developing dynamic and flexible websites has been refined by my strong foundation in software development.
        <Text as={Span} color={'pink.400'}  > I am trustworthy, attention to detail, timeless, and effective communicator</Text>. I expertise over the last 5 years
         from   small company websites to large-scale applications, and partnering with a variety of teams to provide top-notch results. 
         <Text as={Span} color={'pink.400'}> I have capability for developing a  responsive and interactive web applications using JavaScript, React, etc.</Text>
         </Text>
         <Separator marginTop={30} marginLeft={400} width={1100} size="sm"/>


        </div>
    )
}