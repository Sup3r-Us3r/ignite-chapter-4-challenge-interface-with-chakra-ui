import { Text, SimpleGrid, Box, Image, Flex, Avatar } from '@chakra-ui/react';

export const Cards = () => {
  const countries = [
    { title: 'Londres', subtitle: 'Reino Unido', avatar: '/images/europa.jpg' },
    { title: 'Paris', subtitle: 'França', avatar: '/images/europa.jpg' },
    { title: 'Roma', subtitle: 'Itália', avatar: '/images/europa.jpg' },
    { title: 'Praga', subtitle: 'República Tcheca', avatar: '/images/europa.jpg' },
    { title: 'Amsterdã', subtitle: 'Holanda', avatar: '/images/europa.jpg' },
  ]; 

  return (
    <>
      <Text
        pt={['10', '10', '20']}
        pb={['5', '5', '10']}
        color="gray.800"
        fontSize="2xl"
        fontWeight="medium"
      >
        Cidades +100
      </Text>

      <SimpleGrid minChildWidth="200px" spacing="10">
        {
          countries.map((country) => (
            <Box key={country.title}>
              <Image
                src={country.avatar}
                alt="Preview card"
                h="32"
                borderTopLeftRadius="md"
                borderTopRightRadius="md"
                objectFit="cover"
              />
              <Flex
                justify="space-between"
                alignItems="center"
                borderBottomLeftRadius="md"
                borderBottomRightRadius="md"
                py="6"
                px="4"
                borderWidth={1}
                borderColor="yellow.300"
                borderTopColor="transparent"
              >
                <Box>
                  <Text as="strong" color="gray.800" fontSize="lg" fontWeight="semibold">
                    {country.title}
                  </Text>
                  <Text
                    w="90%"
                    color="gray.100"
                    fontWeight="medium"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                  >
                    {country.subtitle}
                  </Text>
                </Box>
                <Avatar name={country.title} src={country.avatar} size="sm" />
              </Flex>
            </Box>
          ))
        }
      </SimpleGrid>
    </>
  );
};
