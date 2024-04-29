import { Box, Flex, Image, Text, VStack, Heading, Link } from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaSpotify } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={10}>
      <Box as="header" bg="black" color="white" w="100%" p={4}>
        <Heading as="h1" size="2xl" textAlign="center">Beyonce</Heading>
      </Box>
      <Image src="/images/beyonce-main.jpg" alt="Beyonce performing" boxSize="full" />
      <Flex direction="column" align="center" p={5}>
        <Heading as="h2" size="xl">Music Career</Heading>
        <Text fontSize="lg" p={3}>
          Explore the journey of Beyonce's illustrious music career, from Destiny's Child to her solo superstardom.
        </Text>
        <Link href="/music" color="teal.500">Discover More</Link>
      </Flex>
      <Image src="/images/beyonce-philanthropy.jpg" alt="Beyonce's philanthropy work" boxSize="full" />
      <Flex direction="column" align="center" p={5}>
        <Heading as="h2" size="xl">Philanthropy</Heading>
        <Text fontSize="lg" p={3}>
          Dive into Beyonce's impactful philanthropic efforts around the world.
        </Text>
        <Link href="/philanthropy" color="teal.500">Learn More</Link>
      </Flex>
      <Flex as="footer" bg="gray.700" color="white" w="100%" p={4} justifyContent="space-between">
        <Text>Beyonce © 2023</Text>
        <Flex>
          <Link href="https://instagram.com/beyonce" isExternal><FaInstagram /></Link>
          <Link href="https://twitter.com/beyonce" isExternal><FaTwitter /></Link>
          <Link href="https://spotify.com/beyonce" isExternal><FaSpotify /></Link>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default Index;