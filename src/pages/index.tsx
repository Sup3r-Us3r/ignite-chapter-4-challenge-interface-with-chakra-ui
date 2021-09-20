import { Box, Flex, Text, Image, Divider, SimpleGrid, useBreakpointValue } from '@chakra-ui/react';
import { Header } from '../components/Header';
import { Carousel } from '../components/Carousel';

const Home = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  const options = [
    { imagePath: '/images/nightlife.svg', label: 'vida noturna' },
    { imagePath: '/images/beach.svg', label: 'praia' },
    { imagePath: '/images/modern.svg', label: 'moderno' },
    { imagePath: '/images/classic.svg', label: 'clássico' },
    { imagePath: '/images/more.svg', label: 'e mais...' },
  ];

  return (
    <>
      <Header />

      <Box
        bgImage="/images/home-background.jpg"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        py="8"
        mb="24"
      >
        <Flex
          maxW={1440}
          mx="auto"
          justify="space-between"
          align="center"
          px={['8', '8', '16']}
        >
          <Box>
            <Text fontSize={['2xl', '3xl', '4xl']} fontWeight="medium" mb="5">
              5 Continentes,<br />
              infinitas possibilidades.
            </Text>
            <Text fontSize={['md', 'md', 'lg']} color="gray.100" lineHeight="6">
              Chegou a hora de tirar do papel a viagem que você<br />
              sempre sonhou.
            </Text>
          </Box>

          { isWideVersion && <Image src="/images/airplane.svg" alt="Airplane" mb="-16" /> }
        </Flex>
      </Box>

      <Box as="main" maxW={1440} mx="auto">
        <SimpleGrid as="section" minChildWidth="120px" spacing="10">
          {
            options.map((item) => (
              <Flex
                key={item.label}
                flexDirection={['row', 'row', 'column']}
                align="center"
                justify="center"
              >
                {
                  isWideVersion && (
                    <Image
                      src={item.imagePath}
                      alt={item.label}
                      h="16"
                      w="16"
                      mb="4"
                    />
                  )
                }
                <Text
                  fontSize="md"
                  color="gray.700"
                  fontWeight="semibold"
                  position="relative"
                  _before={!isWideVersion && {
                    content: '""',
                    position: 'absolute',
                    top: '2',
                    left: '-6',
                    bg: 'yellow.400',
                    h: '2',
                    w: '2',
                    borderRadius: '10',
                  }}
                >
                  {item.label}
                </Text>
              </Flex>
            ))
          }
        </SimpleGrid>

        <Divider my="16" h="0.5" w="20" bg="gray.900" mx="auto" />

        <Text color="gray.500" fontSize="2xl" fontWeight="medium" textAlign="center">
          Vamos nessa?<br />
          Então escolha seu continente
        </Text>

        <Box as="section" px={['8', '8', '20']}>
          <Carousel />
        </Box>
      </Box>
    </>
  );
}

export default Home;
