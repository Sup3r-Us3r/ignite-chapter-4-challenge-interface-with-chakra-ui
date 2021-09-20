import { useState } from 'react';
import { Flex, Box, Text, HStack, IconButton } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const slides = [
    {
      id: 1,
      imagePath: 'https://picsum.photos/id/1021/1920/1080/?blur=2',
      title:
      'Foto 1',
      subtitle: 'Foto 1',
    },
    {
      id: 2,
      imagePath: 'https://picsum.photos/id/1035/1920/1080/?blur=2',
      title:
      'Foto 2',
      subtitle: 'Foto 2',
    },
    {
      id: 3,
      imagePath: 'https://picsum.photos/id/1037/1920/1080/?blur=2',
      title:
      'Foto 3',
      subtitle: 'Foto 3',
    },
    {
      id: 4,
      imagePath: 'https://picsum.photos/id/1050/1920/1080/?blur=2',
      title:
      'Foto 4',
      subtitle: 'Foto 4',
    },
    {
      id: 5,
      imagePath: 'https://picsum.photos/id/1016/1920/1080/?blur=2',
      title:
      'Foto 5',
      subtitle: 'Foto 5',
    },
  ];

  function previousSlide(slideIndex: number) {
    if (slideIndex === 0) {
      setCurrentSlide(slides.length - 1);
    }

    if (slideIndex < 0) {
      return;
    }

    if (slideIndex !== 0) {
      setCurrentSlide((prevState) => prevState - 1);
    }
  }

  function nextSlide(slideIndex: number) {
    if (slideIndex < slides.length) {
      setCurrentSlide((prevState) => prevState + 1);
    }

    if (slideIndex >= slides.length) {
      setCurrentSlide(0);
    }
  }

  return (
    <>
      {
        slides.map((slide, index) => index === currentSlide && (
          <Flex
            key={slide.id}
            as="figure"
            justify="center"
            alignItems="center"
            position="relative"
            bgImage={slide.imagePath}
            bgPos="center"
            bgRepeat="no-repeat"
            h={450}
            my="10"
          >
            <Flex
              as="figcaption"
              justify="space-between"
              alignItems="center"
              w="100%"
              px={['4', '4', '10']}
            >
              <IconButton
                aria-label="Previous slide"
                icon={<FiChevronLeft size={40} />}
                color="yellow.400"
                bg="transparent"
                _hover={{
                  bg: 'transparent',
                  color: 'yellow.300',
                }}
                onClick={() => previousSlide(index)}
              />

              <Box textAlign="center">
                <Text color="white" fontWeight="bold" fontSize="4xl">
                  {slide.title}
                </Text>
                <Text color="gray.100" fontWeight="bold" fontSize="lg">
                  {slide.subtitle}
                </Text>
              </Box>

              <IconButton
                aria-label="Next slide"
                icon={<FiChevronRight size={40} />}
                color="yellow.400"
                bg="transparent"
                _hover={{
                  bg: 'transparent',
                  color: 'yellow.300',
                }}
                onClick={() => nextSlide(index + 1)}
              />
            </Flex>

            <HStack
              spacing="3"
              position="absolute"
              bottom="5"
              justify="center"
              alignItems="center"
              w="100%"
            >
              {
                slides.map((_, slideIndex) => (
                  <Box
                    key={slideIndex}
                    h="4"
                    w="4"
                    bg={slideIndex === currentSlide ? 'yellow.400' : 'gray.100'}
                    borderRadius="2xl"
                    _hover={{
                      bg: slideIndex === currentSlide ? 'yellow.300' : 'gray.50'
                    }}
                  />
                ))
              }
            </HStack>
          </Flex>
        ))
      }
    </>
  );
};
