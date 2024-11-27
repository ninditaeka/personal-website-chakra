
import { Text, Separator, Flex, Image, Span, Grid } from "@chakra-ui/react"
import { Button } from "@/components/ui/button"
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"



export default function Portofolio(){
    return(
        <div>
        <Text color={"white"} marginTop={30} textStyle="3xl"  marginLeft={400} marginRight={200}> Portofolio </Text>
     
     
      <Flex justify="center">
      <div>
      <Grid templateColumns="repeat(3, 1fr)" gap="20">

      <DialogRoot size="cover" placement="center"  motionPreset="slide-in-bottom">
      <DialogTrigger asChild>
       
        <Button variant="outline" boxSize={200}  rounded={20} marginTop={30} border="1 px solid white"><Text color={"white"} marginTop={2} _hover={{color:"black"}}> 
        <Image
      rounded={10} boxSize={150}
    src="https://www.codewonders.dev/_next/image?url=https%3A%2F%2Fi.ibb.co%2FT0XwFsQ%2FScreen-Recording-2020-05-06-at-3.gif&w=640&q=75"
  />
          UNIQLA </Text>
        </Button>
      </DialogTrigger>
      <DialogContent  boxSize={900}>
        <DialogHeader>
          <DialogTitle fontWeight={700} fontSize={30} marginLeft={250}>Uniqla Website </DialogTitle><Text></Text>
          <DialogCloseTrigger />
        </DialogHeader >
        <DialogBody>
        <Text as={Span}  fontWeight={600}fontSize={20}>Situation</Text><br />
        <Text textAlign="justify">
        Uniqlo, a globally recognized retail brand. The existing platform was outdated and lacked the necessary features to support modern e-commerce needs, impacting user experience and sales performance
        </Text>
        <br />
        <Text as={Span}  fontWeight={600}fontSize={20}>Task</Text><br />
        <Text textAlign="justify">
        The primary objective was to design and develop a robust, scalable, and user-friendly web shopping platform that could handle high traffic volumes, provide a seamless shopping experience, and integrate with Uniqla inventory management and payment systems. The project also required strict adherence to timelines and quality standards to ensure a successful launch.
        </Text>
        <br />
        <Text as={Span} fontWeight={600}fontSize={20}>Action</Text><br />
        <Text textAlign="justify">
        I led the planning and research phase by conducting in-depth research on the latest e-commerce trends and best practices. I collaborated with cross-functional teams to gather detailed requirements and create a comprehensive project plan. Utilizing <b>React</b> for the front-end and <b>Express</b> for the back-end, I designed and developed a responsive and intuitive user interface, ensuring the platform was optimized for performance and SEO. For integration, I seamlessly connected the platform with Uniqlo's inventory management system, payment gateways, and third-party services, using <b>AWS</b> to ensure data security and compliance with industry standards. During the testing and launch phase, I conducted extensive usability, performance, and security testing, working closely with QA teams to identify and resolve issues. This resulted in a successful platform launch within the scheduled timeframe. Post-launch, I provided ongoing support and monitoring using <b>AWS</b> services to ensure smooth operations, continuously collecting user feedback to make improvements and feature enhancements. This project involved overcoming several challenges, including optimizing performance for high traffic volumes and ensuring robust security measures, all addressed through meticulous planning and execution.
        </Text>
        <br />
        <Text as={Span} fontWeight={600}fontSize={20}>Result</Text><br />
        <Text textAlign="justify">The redesigned web shopping platform led to a 40% increase in customer satisfaction scores and a 30% rise in online sales within the first six months. The improved load times and user interface significantly reduced bounce rates by 20%. Additionally, the platform stability during high-traffic periods, such as sales events, enhanced overall user experience and operational efficiency.
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap="10">
          

        <Image height={200} width={300} marginTop={8} marginLeft={1} src="https://miro.medium.com/v2/resize:fit:4800/format:webp/1*NnPSwONGlGnvUaUlwMinUg.png"/>
        <Image height={200} width={300} marginTop={8}  marginLeft={1} src="https://cdn.dribbble.com/userupload/7071013/file/original-b7ebab2ecb65bb45ee0fe90d881c3a65.jpg?format=webp&resize=400x300&vertical=center"/>
        <Image height={200} width={300} marginTop={8}  src="https://cdn.dribbble.com/users/1968956/screenshots/6988135/media/907eb955d0a774f47e38dae664cc7a97.png?resize=400x0"/>       

        </Grid>
        </DialogBody>
      </DialogContent>
    </DialogRoot>


    <DialogRoot size="cover" placement="center"  motionPreset="slide-in-bottom">
      <DialogTrigger asChild>
       
        <Button variant="outline" boxSize={200}  rounded={20} marginTop={30} border="1 px solid white"><Text color={"white"} marginTop={2} _hover={{color:"black"}}> 
        <Image
      rounded={10} boxSize={150}
    src="https://uptbgis.bandaacehkota.go.id/wp-content/uploads/2023/12/webgis-930x490.jpg"
  />
          ONE MAP  </Text>
        </Button>
      </DialogTrigger>
      <DialogContent  boxSize={900}>
        <DialogHeader>
          <DialogTitle fontWeight={700} fontSize={30} textAlign="center">Land and City Assets WebGIS </DialogTitle><Text></Text>
          <DialogCloseTrigger />
        </DialogHeader >
        <DialogBody>
        <Text as={Span}  fontWeight={600}fontSize={20}>Situation</Text><br />
        <Text textAlign="justify">
        I was tasked with leading the development of a web-based Geographic Information System (webGIS) to manage and visualize land and city assets. The existing system was outdated and relied on manual processes, which led to inefficiencies and data inaccuracies. The goal was to create a dynamic, user-friendly platform that would allow stakeholders to access, update, and analyze asset data in real time.
        </Text>
        <br />
        <Text as={Span}  fontWeight={600}fontSize={20}>Task</Text><br />
        <Text textAlign="justify">
        The main objective was to design and develop a scalable and interactive webGIS application that integrated with existing data sources and provided advanced mapping and analytics capabilities. The project required the use of modern web technologies and GIS tools to ensure accurate, efficient, and user-friendly functionality.
        </Text>
        <br />
        <Text as={Span} fontWeight={600}fontSize={20}>Action</Text><br />
        <Text textAlign="justify">
        To build the webGIS application for managing land and city assets, I collaborated with urban planners, GIS specialists, and other stakeholders to gather detailed requirements and create a comprehensive project plan. This involved conducting research on the latest GIS technologies and best practices. Utilizing <b>React</b> for the front-end, I developed an interactive and responsive user interface, while employing <b>Node.js</b> with <b>Express</b> for the back-end to handle data processing and server-side logic. I integrated the application with <b>PostgreSQL/PostGIS</b> for efficient spatial data storage and management. For advanced map visualization, I incorporated OpenLayers and used Leaflet to create interactive maps. Geospatial analytics were implemented using QGIS, and data accuracy was ensured through automated validation scripts. During the testing and deployment phase, I conducted extensive testing, including unit, integration, and user acceptance tests, to ensure the application's accuracy and performance. The application was deployed on <b>AWS</b> to leverage cloud scalability and reliability. Post-launch, I provided ongoing support and monitoring to address any issues and continuously improve the application based on user feedback, implementing additional features and enhancements as needed.
        </Text>
        <br />
        <Text as={Span} fontWeight={600}fontSize={20}>Result</Text><br />
        <Text textAlign="justify">
        The new webGIS application significantly improved the management and visualization of land and city assets. Key results included a 50% reduction in data entry errors, a 30% increase in operational efficiency, and enhanced decision-making capabilities for stakeholders. The platform's user-friendly interface and advanced mapping features received positive feedback from users, and the scalable architecture ensured seamless performance even during peak usage times.
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap="10">
        <Image height={200} width={300} marginTop={2} marginLeft={1} src="https://karomap.com/media/uploads/2021/08/23-012939-sistem-informasi-database-webgis-gis-jalan-dan-jembatan-1.png"/>
        <Image height={200} width={300} marginTop={2}   src="https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01grknbpec2k0zmphcxxdh1raz.png"/>
        <Image height={200} width={300} marginTop={2}  src="https://lppm.itb.ac.id/wp-content/uploads/sites/55/2020/01/doc1-4.png"/>

        </Grid>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
    

    <DialogRoot size="cover" placement="center"  motionPreset="slide-in-bottom">
      <DialogTrigger asChild>
       
        <Button variant="outline" boxSize={200}  rounded={20} marginTop={30} border="1 px solid white"><Text color={"white"} marginTop={2} _hover={{color:"black"}}> 
        <Image
      rounded={10} boxSize={150}
    src="https://www.jagoanhosting.com/blog/wp-content/uploads/2024/03/image-22.png"
  />
          AYOOO  </Text>
        </Button>
      </DialogTrigger>
      <DialogContent  boxSize={900}>
        <DialogHeader>
          <DialogTitle fontWeight={700} fontSize={30} textAlign="center"> Ayooo Website</DialogTitle><Text></Text>
          <DialogCloseTrigger />
        </DialogHeader >
        <DialogBody>
        <Text as={Span}  fontWeight={600}fontSize={20}>Situation</Text><br />
        <Text textAlign="justify">
        I was tasked with leading the development of Ayooo, a comprehensive hotel booking website. The project aimed to provide users with a seamless and intuitive platform to search, compare, and book hotels worldwide. The existing system was outdated and lacked essential features, which affected user satisfaction and overall business performance.
        </Text>
        <br />
        <Text as={Span}  fontWeight={600}fontSize={20}>Task</Text><br />
        <Text textAlign="justify">
        The main objective was to design and develop a scalable, user-friendly, and feature-rich hotel booking website. This required integrating various APIs, ensuring high performance, and providing a secure and responsive user experience.
        </Text>
        <br />
        <Text as={Span} fontWeight={600}fontSize={20}>Action</Text><br />
        <Text textAlign="justify">
        To build the Ayooo hotel booking website, I collaborated with stakeholders, including product managers and UX/UI designers, to gather detailed requirements and create a comprehensive project plan. This involved conducting research on the latest trends in travel and hotel booking technologies. Utilizing <b>React</b> for the front-end, I developed an interactive and responsive user interface, while employing <b>Node.js</b> with <b>Express</b> for the back-end to handle server-side logic and data processing. <b>PostgreSQL</b> was implemented for efficient handling of large datasets. I integrated third-party APIs for hotel data, payment processing, and user authentication to ensure seamless data flow and real-time updates across the platform. Performance optimization was achieved through caching mechanisms using <b>Redis</b>, and extensive load testing was conducted to ensure the platform could handle high traffic volumes during peak booking seasons. Robust security measures such as SSL/TLS encryption, secure authentication, and regular vulnerability assessments were incorporated to protect user data and transactions. The application underwent thorough testing, including unit, integration, and user acceptance testing, to ensure its accuracy, performance, and security before being deployed on <b>AWS</b> for scalability and reliability. Post-launch, I provided ongoing support and monitoring to address any issues and continuously improve the platform based on user feedback, implementing additional features and enhancements as needed.

        </Text>
        <br />
        <Text as={Span} fontWeight={600}fontSize={20}>Result</Text><br />
        <Text textAlign="justify">
        The Ayooo hotel booking website significantly enhanced user experience and operational efficiency. Key results included a 40% increase in user engagement, a 35% rise in completed bookings, and positive feedback from users regarding the platform’s ease of use and reliability. The scalable and secure architecture ensured smooth performance even during high-traffic periods, contributing to the overall success of the project.
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap="10">
        <Image height={200} width={300} marginTop={2} marginLeft={1} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRea_fksLSdgkZqNJB7d6vuCGK56tLvBMUbzg&s"/>
        <Image height={200} width={300} marginTop={2}   src="https://1.bp.blogspot.com/-TWHGvAToIcM/X0soiQHa9pI/AAAAAAAACaA/LU-URJrs0oII4nUf6za0Wo6Dz2pm3nkKwCLcBGAsYHQ/s640/SIstem%2BInformasi%2BReservasi%2BHotel%2BPHP2.png"/>
        <Image height={200} width={300} marginTop={2}  src="https://cdn.dribbble.com/userupload/12251136/file/original-18f8a2880dc0e8a446cfc717d3e54a05.png?crop=0x0-3201x2401&format=webp&resize=400x300&vertical=center"/>

        </Grid>
        </DialogBody>
      </DialogContent>
    </DialogRoot>


    </Grid>
      </div>
      </Flex>


      






        <Separator marginTop={100} marginLeft={400} width={1100} size="sm"/>
  </div>
    )
}