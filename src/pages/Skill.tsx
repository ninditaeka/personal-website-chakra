import { Text, Box, Image, Flex, Separator } from "@chakra-ui/react";

export default function Skill() {
  return (
    <Flex
      direction={{ base: "column" }}
      paddingX={{ base: "16px", md: "300px" }}
    >
      <Flex direction={{ base: "column" }} paddingY={{ base: "30px" }}>
        <Text color={"white"} textStyle="3xl">
          My Skill
        </Text>

        <Flex direction={{ base: "column" }}>
          <Text color={"white"} marginTop={5} textStyle="xl" textAlign="center">
            {" "}
            Front-End Skill
          </Text>
          <Flex
            gap={{ base: "6px", md: "32px" }}
            justifyContent={"center"}
            wrap={"wrap"}
          >
            <Box
              justifyItems={"center"}
              marginTop={"10px"}
              rounded={"lg"}
              backgroundColor={"gray.600"}
              color={"white"}
              padding={{ base: "8px", md: "10px" }}
              _hover={{ backgroundColor: "white", color: "black" }}
              minWidth={{ base: "102px", md: "200px" }}
            >
              <Image
                height={{ base: "50px", md: "100px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/640px-Unofficial_JavaScript_logo_2.svg.png"
                alt="Javascript"
              />
              <Text
                fontSize={{ base: "16px", md: "14px" }}
                textAlign={"center"}
              >
                {" "}
                Javascript
              </Text>
            </Box>
            <Box
              justifyItems={"center"}
              marginTop={"10px"}
              rounded={"lg"}
              backgroundColor={"gray.600"}
              color={"white"}
              padding={{ base: "8px", md: "10px" }}
              _hover={{ backgroundColor: "white", color: "black" }}
              minWidth={{ base: "102px", md: "200px" }}
            >
              <Image
                height={{ base: "50px", md: "100px" }}
                src="https://icons.iconarchive.com/icons/cornmanthe3rd/plex/512/Other-html-5-icon.png"
                alt="HTML"
              />
              <Text
                fontSize={{ base: "16px", md: "14px" }}
                textAlign={"center"}
              >
                {" "}
                HTML
              </Text>
            </Box>
            <Box
              justifyItems={"center"}
              marginTop={"10px"}
              rounded={"lg"}
              backgroundColor={"gray.600"}
              padding={{ base: "8px", md: "10px" }}
              color={"white"}
              _hover={{ backgroundColor: "white", color: "black" }}
              minWidth={{ base: "102px", md: "200px" }}
            >
              <Image
                height={{ base: "50px", md: "100px" }}
                src="https://img.icons8.com/fluent/200/css3.png"
                alt="CSS"
              />
              <Text
                fontSize={{ base: "16px", md: "14px" }}
                textAlign={"center"}
              >
                {" "}
                CSS
              </Text>
            </Box>
            <Box
              justifyItems={"center"}
              marginTop={"10px"}
              rounded={"lg"}
              backgroundColor={"gray.600"}
              padding={{ base: "8px", md: "10px" }}
              color={"white"}
              _hover={{ backgroundColor: "white", color: "black" }}
              minWidth={{ base: "102px", md: "200px" }}
            >
              <Image
                height={{ base: "50px", md: "100px" }}
                src="https://download.logo.wine/logo/React_(web_framework)/React_(web_framework)-Logo.wine.png"
                alt="React"
              />
              <Text
                fontSize={{ base: "16px", md: "14px" }}
                textAlign={"center"}
              >
                {" "}
                React
              </Text>
            </Box>
          </Flex>
        </Flex>

        <Flex direction={{ base: "column" }}>
          <Text color={"white"} marginTop={5} textStyle="xl" textAlign="center">
            {" "}
            Back-End Skill
          </Text>
          <Flex
            gap={{ base: "6px", md: "32px" }}
            justifyContent={"center"}
            wrap={"wrap"}
          >
            <Box
              justifyItems={"center"}
              marginTop={"10px"}
              rounded={"lg"}
              backgroundColor={"gray.600"}
              padding={{ base: "8px", md: "10px" }}
              color={"white"}
              _hover={{ backgroundColor: "white", color: "black" }}
              minWidth={{ base: "102px", md: "200px" }}
            >
              <Image
                height={{ base: "50px", md: "100px" }}
                src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png"
                alt="Node.js"
              />
              <Text
                fontSize={{ base: "16px", md: "14px" }}
                textAlign={"center"}
              >
                {" "}
                Node.js
              </Text>
            </Box>
            <Box
              justifyItems={"center"}
              marginTop={"10px"}
              rounded={"lg"}
              backgroundColor={"gray.600"}
              padding={{ base: "8px", md: "10px" }}
              color={"white"}
              _hover={{ backgroundColor: "white", color: "black" }}
              minWidth={{ base: "102px", md: "200px" }}
            >
              <Image
                height={{ base: "46px", md: "100px" }}
                marginBottom={{ base: "8px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"
                alt="Express"
              />
              <Text
                fontSize={{ base: "16px", md: "14px" }}
                textAlign={"center"}
              >
                {" "}
                Express
              </Text>
            </Box>
            <Box
              justifyItems={"center"}
              marginTop={"10px"}
              rounded={"lg"}
              backgroundColor={"gray.600"}
              padding={{ base: "8px", md: "10px" }}
              _hover={{ backgroundColor: "white", color: "black" }}
              color={"white"}
              minWidth={{ base: "102px", md: "200px" }}
            >
              <Image
                height={{ base: "50px", md: "100px" }}
                justifyContent={"center"}
                src="https://w7.pngwing.com/pngs/448/730/png-transparent-postgresql-plain-logo-icon.png"
                alt="PostgreSQL"
              />
              <Text
                fontSize={{ base: "16px", md: "14px" }}
                textAlign={"center"}
                marginBottom={{ base: "2px", md: "30px" }}
              >
                {" "}
                PostgreSQL
              </Text>
            </Box>
          </Flex>
        </Flex>

        <Flex direction={{ base: "column" }}>
          <Text color={"white"} marginTop={5} textStyle="xl" textAlign="center">
            DevOps & Tools
          </Text>
          <Flex
            gap={{ base: "6px", md: "32px" }}
            justifyContent={"center"}
            wrap={"wrap"}
          >
            <Box
              justifyItems={"center"}
              marginTop={"10px"}
              rounded={"lg"}
              backgroundColor={"gray.600"}
              padding={{ base: "8px", md: "10px" }}
              color={"white"}
              _hover={{ backgroundColor: "white", color: "black" }}
              minWidth={{ base: "102px", md: "200px" }}
            >
              <Image
                height={{ base: "50px", md: "100px" }}
                src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png"
              />

              <Text
                fontSize={{ base: "16px", md: "14px" }}
                textAlign={"center"}
              >
                {" "}
                Docker
              </Text>
            </Box>
            <Box
              justifyItems={"center"}
              marginTop={"10px"}
              rounded={"lg"}
              backgroundColor={"gray.600"}
              padding={{ base: "8px", md: "10px" }}
              _hover={{ backgroundColor: "white", color: "black" }}
              color={"white"}
              minWidth={{ base: "102px", md: "200px" }}
            >
              <Image
                height={{ base: "50px", md: "100px" }}
                src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png"
              />
              <Text
                fontSize={{ base: "16px", md: "14px" }}
                textAlign={"center"}
              >
                {" "}
                GIT
              </Text>
            </Box>
            <Box
              justifyItems={"center"}
              marginTop={"10px"}
              rounded={"lg"}
              backgroundColor={"gray.600"}
              padding={{ base: "8px", md: "10px" }}
              _hover={{ backgroundColor: "white", color: "black" }}
              color={"white"}
              minWidth={{ base: "102px", md: "200px" }}
            >
              <Image
                height={{ base: "50px", md: "100px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2560px-Amazon_Web_Services_Logo.svg.png"
              />
              <Text
                fontSize={{ base: "16px", md: "14px" }}
                textAlign={"center"}
              >
                {" "}
                AWS
              </Text>
            </Box>
          </Flex>
        </Flex>
      </Flex>

      <Separator size="md" />
    </Flex>
  );
}
