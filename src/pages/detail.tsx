import { Flex, Text, SimpleGrid, Box, Icon, Tooltip, Stack, HStack } from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { Header } from '../components/Header';
import { Cards } from '../components/Cards';

const Detail = () => {
  return (
    <>
      <Header />

      <Flex
        as="figure"
        h={['40', '40', '96']}
        w="100%"
        bgImage="/images/europa.jpg"
        bgPos="center"
        bgRepeat="no-repeat"
        bgSize="cover"
      >
        <Box display="flex" maxW={1440} mx="auto" w="100%">
          <Text
            as="figcaption"
            alignSelf="flex-end"
            fontSize="2xl"
            fontWeight="semibold"
            px={['8', '8', '32']}
            mb="10"
          >
            Europa
          </Text>
        </Box>
      </Flex>

      <Box as="main" maxW={1440} mx="auto" py={['10', '10', '20']} px={['8', '8', '32']}>
        <SimpleGrid as="section" columns={[1, 1, 2]} spacing="10">
          <Text textAlign="justify" color="gray.800" fontSize="lg">
            A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
          </Text>
          <Stack
            direction={['column', 'column', 'row']}
            spacing={['10', '10', '20']}
            justify={['center', 'center', 'flex-end']}
            alignItems="center"
          >
            <Box textAlign="center">
              <Text fontSize="3xl" fontWeight="semibold" color="yellow.300">
                50
              </Text>
              <Text fontSize="md" fontWeight="semibold" color="gray.700">
                países
              </Text>
            </Box>
            <Box textAlign="center">
              <Text fontSize="3xl" fontWeight="semibold" color="yellow.300">
                60
              </Text>
              <Text fontSize="md" fontWeight="semibold" color="gray.700">
                línguas
              </Text>
            </Box>
            <Box textAlign="center">
              <Text fontSize="3xl" fontWeight="semibold" color="yellow.300">
                27
              </Text>
              <Flex alignItems="center">
                <Text fontSize="md" fontWeight="semibold" color="gray.700" mr="1">
                  cidades +100
                </Text>
                <Tooltip label="Mais de 100" fontSize="md">
                  <Box as="span">
                    <Icon as={FiInfo} h="4" w="4" color="gray.100" />
                  </Box>
                </Tooltip>
              </Flex>
            </Box>
          </Stack>
        </SimpleGrid>

        <Cards />
      </Box>
    </>
  );
};

export default Detail;
