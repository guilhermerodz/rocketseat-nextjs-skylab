import {
  Heading,
  Grid,
  Flex,
  Input,
  Link,
  Button,
  Text,
} from '@chakra-ui/core';

import Divider from '../components/Divider';

export default function Home() {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="1fr 480px 480px 1fr"
      templateRows="1fr 480px 1fr"
      templateAreas="
        '.... .... .... ....'
        '.... logo form ....'
        '.... .... .... ....'
      "
      justifyContent="center"
      alignItems="center"
    >
      <Flex gridArea="logo" flexDir="column" alignItems="flex-start">
        <img src="/rocketseat.svg" alt="Rocketseat" />

        <Heading size="2xl" lineHeight="shorter" marginTop={16}>
          Sign in to the platform
        </Heading>
      </Flex>

      <Flex
        gridArea="form"
        height="100%"
        backgroundColor="gray.700"
        borderRadius="md"
        flexDir="column"
        alignItems="stretch"
        padding={16}
      >
        <Input
          height="3.125rem"
          backgroundColor="gray.800"
          focusBorderColor="purple.500"
          placeholder="E-mail"
        />
        <Input
          height="3.125rem"
          backgroundColor="gray.800"
          focusBorderColor="purple.500"
          placeholder="Senha"
          marginTop={2}
          type="password"
        />

        <Link
          alignSelf="flex-start"
          marginTop={2}
          fontSize="sm"
          color="purple.600"
          fontWeight="bold"
          _hover={{ color: 'purple.500' }}
        >
          Forgot Password?
        </Link>

        <Button
          backgroundColor="purple.500"
          height="3.125rem"
          borderRadius="sm"
          marginTop={6}
          _hover={{ backgroundColor: 'purple.600' }}
          _focus={{ backgroundColor: 'purple.600' }}
          textTransform="uppercase"
        >
          Login
        </Button>

        <Text textAlign="center" fontSize="sm" color="gray.300" marginTop={6}>
          Don't have an account?{' '}
          <Link
            color="purple.600"
            fontWeight="bold"
            _hover={{ color: 'purple.500' }}
          >
            Sign Up
          </Link>
        </Text>

        <Divider />

        <Flex alignItems="center">
          <Text fontSize="sm">Or sign in with</Text>
          <Button
            height="3.125rem"
            flex="1"
            backgroundColor="gray.600"
            marginLeft={6}
            borderRadius="sm"
            _hover={{ backgroundColor: 'purple.500' }}
            _focus={{ backgroundColor: 'purple.500' }}
            textTransform="uppercase"
          >
            Github
          </Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
