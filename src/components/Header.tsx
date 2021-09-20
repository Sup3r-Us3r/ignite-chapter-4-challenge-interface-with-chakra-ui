import { useRouter } from 'next/router';
import { Flex, IconButton, Icon, Image } from '@chakra-ui/react';
import { FiChevronLeft } from 'react-icons/fi';

export const Header = () => {
  const { back, asPath } = useRouter();

  return (
    <Flex
      as="header"
      alignItems="center"
      justify="center"
      py="2"
      px={['8', '8', '32']}
      maxW={1440}
      mx="auto"
    >
      {
        asPath !== '/' && (
          <IconButton
            aria-label="Go back"
            icon={<Icon as={FiChevronLeft} h={25} w={25} color="gray.400" />}
            bg="transparent"
            _hover={{
              bg: 'gray.50',
            }}
            onClick={back}
          />
        )
      }
      <Flex w="100%" justify="center">
        <Image src="/images/logo.svg" alt="Logo" />
      </Flex>
    </Flex>
  );
}
