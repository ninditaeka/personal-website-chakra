import { Text, Button, Image, Flex, Separator} from "@chakra-ui/react"



export default function Skill(){
    return(
    <div >
        <Text color={"white"} marginTop={30} textStyle="3xl"  marginLeft={400} marginRight={200}> My Skill</Text>
        <div > 
            <Text color={"white"} marginTop={5} textStyle="xl"  textAlign="center"> Front-End Skill</Text>
            <Flex justify="center" >
                <Button  marginTop={10} size= {"xl"} rounded={"lg"} height={"36"} width={200} _hover={{borderColor:"white"}} ><Text> <Image 
                height="100px"
                src="https://academy.alterra.id/blog/wp-content/uploads/2021/07/Logo-Javascript.png"
                /> Javascript</Text>
                </Button>
            
                <Button marginTop={10} marginLeft={50} size= {"lg"} rounded={"2xl"} height={"36"} width={200} _hover={{borderColor:"white"}}  ><Text> <Image 
                height="100px"
                src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png"
                /> HTML </Text>
                </Button>

                <Button marginTop={10} marginLeft={50} size= {"lg"} rounded={"2xl"} height={"36"} width={200} _hover={{borderColor:"white"}} ><Text> <Image 
                height="100px"
                src="https://img.icons8.com/fluent/200/css3.png"
                /> CSS </Text>
                </Button>

                <Button marginTop={10} marginLeft={50} size= {"lg"} rounded={"2xl"} height={"36"} width={200} _hover={{borderColor:"white"}} ><Text> <Image 
                height="100px"
                src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
                /> React </Text>
                </Button>
            </Flex>
            
        </div>
        <div>
            <Text color={"white"} marginTop={5} textStyle="xl"  textAlign="center"> Back-End Skill</Text>
            <Flex justify="center" >
                 <Button marginTop={10} size= {"xl"} rounded={"2xl"} height={"36"} width={200} _hover={{borderColor:"white"}} ><Text> <Image 
                 height="100px"
                 src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp&w=256"
                /> Node.js</Text>
                </Button>
                <Button marginTop={10} marginLeft={50} size= {"lg"} rounded={"2xl"} height={"36"}  width={200} _hover={{borderColor:"white"}} ><Text> <Image 
                height="53px" marginTop={5}marginBottom={6}
                src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                /> Express </Text>
                </Button>
                </Flex>

        </div>
        <div>
            <Text color={"white"} marginTop={5} textStyle="xl"  textAlign="center"> DevOps & Tools </Text>
            <Flex justify="center"  >
                <Button marginTop={10} size= {"xl"} rounded={"2xl"} height={"36"} width={200} _hover={{borderColor:"white"}} ><Text> <Image 
                height="100px"
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png"
                /> Docker</Text>
                </Button>
                <Button marginTop={10} marginLeft={50} size= {"lg"} rounded={"2xl"} height={"36"}  width={200} _hover={{borderColor:"white"}} ><Text> <Image 
                height="90px" marginBottom={2}
                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
                /> GIT </Text>
                </Button>
                <Button marginTop={10} marginLeft={50} size= {"lg"} rounded={"2xl"} height={"36"} width={200} _hover={{borderColor:"white"}} ><Text> <Image 
                height="80px" marginBottom={2} marginTop={3}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png"
                /> AWS </Text>
                </Button>
                </Flex>
        </div>
        <Separator marginTop={100} marginLeft={400} width={1100} size="sm"/>
    </div>

    )

}