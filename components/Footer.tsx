import { Flex, Text } from '@chakra-ui/layout';

const Footer = () => {
  return (
    <Flex as="footer" p={6} bg="gray.100" color="black" justifyContent="center">
      <Text>mopeneko</Text>
    </Flex>
  );
};

export default Footer;
