import { Text,Separator, For, Stack, Timeline } from "@chakra-ui/react"
import {
    TimelineConnector,
    TimelineContent,
    TimelineItem,
    TimelineRoot,
    TimelineTitle,
  } from "@/components/ui/timeline"


export default function Experience(){
    return(
        <div>
              <Text color={"white"} marginTop={30} textStyle="3xl"  marginLeft={400} marginRight={200}> Experience </Text>
            <div>
            <Stack  marginTop={20} marginLeft={400} color="white" gap="8">
      <For each={["lg"]}>
             {(size) => (
             <TimelineRoot size={size} key={size}>
            <TimelineItem>
              <TimelineContent width="auto">
                <TimelineTitle whiteSpace="nowrap" marginRight={2} fontSize={16}>2022 - present</TimelineTitle>
              </TimelineContent>
              <TimelineConnector bgColor="pink.500"></TimelineConnector>
              <Timeline.Content>
                <TimelineTitle textAlign="justify" fontSize={20} fontWeight={600}  >
                  Senior Web Developer 
                </TimelineTitle>
                <Text fontSize={15}> Microsoft, Jakarta</Text>
                <Text  fontSize={12} textAlign="justify"  marginRight={400}>
                Throughout my development projects, I oversaw the maintenance of best practices and high standards for a range of web applications. I worked collaboratively with cross-functional teams to develop unified, intuitive online apps that satisfied the needs of users and clients. My responsibilities included mentoring young developers, encouraging their career development, and carrying out exhaustive code reviews to guarantee quality and compliance with project specifications. I created and updated technical documentation to facilitate project collaboration, addressed bottlenecks to boost web application performance, and made sure the application was more responsive. Along with limiting downtime and putting strong security measures in place to protect online applications from vulnerabilities, I was also in charge of debugging and fixing complicated technical problems. 
                </Text>
              </Timeline.Content>
            </TimelineItem>


            <TimelineItem>
              <TimelineContent width="auto">
                <TimelineTitle whiteSpace="nowrap" marginRight={7} fontSize={16}> 2020 - 2022 </TimelineTitle>
              </TimelineContent>
              <TimelineConnector bgColor="pink.500"></TimelineConnector>
              <Timeline.Content>
                <TimelineTitle textAlign="justify" fontSize={20} fontWeight={600}  >
                  Junior Web Developer 
                </TimelineTitle>
                <Text fontSize={15}> Accenture Indonesia, Jakarta</Text>
                <Text  fontSize={12} textAlign="justify"  marginRight={400}>
                Working on both front-end and back-end coding projects, I was in charge of supporting the creation of online applications. To add user-friendly features and enhance the overall operation of the website, I worked closely with senior developers and designers. Writing clear, maintainable code and troubleshooting problems to guarantee flawless performance were part of my job. I took an active part in code reviews and received insightful criticism that helped me improve my abilities. I also worked on performing extensive testing, enhancing website performance, and applying required changes. In order to accomplish project objectives and produce excellent outcomes quickly, I kept lines of communication open with team members and stakeholders during my employment.
                </Text>
              </Timeline.Content>
            </TimelineItem>


            <TimelineItem>
              <TimelineContent width="auto">
                <TimelineTitle whiteSpace="nowrap" marginRight={7} fontSize={16}> 2019 - 2020 </TimelineTitle>
              </TimelineContent>
              <TimelineConnector bgColor="pink.500"></TimelineConnector>
              <Timeline.Content>
                <TimelineTitle textAlign="justify" fontSize={20} fontWeight={600}  >
                  Programmer 
                </TimelineTitle>
                <Text fontSize={15}> GITS Indonesia, Jakarta</Text>
                <Text  fontSize={12} textAlign="justify"  marginRight={400}>
                As a Web Programmer, I played a crucial role in designing, developing, and maintaining dynamic websites and web applications. My responsibilities included writing clean, efficient code for both front-end and back-end components, ensuring optimal functionality and performance. I collaborated closely with designers and other developers to translate project requirements into technical specifications and deliver high-quality solutions. I was involved in troubleshooting and debugging to resolve issues promptly, conducting regular tests to ensure the applications ran smoothly across different browsers and devices. Additionally, I kept up-to-date with emerging web technologies and best practices to continually improve the development process. My role required strong attention to detail and effective communication with team members and stakeholders to ensure project success and client satisfaction.
                </Text>
              </Timeline.Content>
            </TimelineItem>
            
          </TimelineRoot>
            )}
      </For>
        </Stack>
            </div>
              <Separator marginTop={100} marginLeft={400} width={1100} size="sm"/>
        </div>
    )
}