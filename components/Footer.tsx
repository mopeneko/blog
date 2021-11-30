import Icon from '@chakra-ui/icon';
import { Flex, Link, Text } from '@chakra-ui/layout';
import { MdCode } from 'react-icons/md';

const Footer = () => {
  return (
    <footer>
      <Flex
        as='footer'
        p={6}
        ml='auto'
        mr='auto'
        bg='gray.100'
        color='black'
        flexFlow='column'
        textAlign='center'
      >
        <div>
          <Text>mopeneko</Text>
        </div>
        <div>
          <Link color='teal.500' href='https://github.com/mopeneko/blog'>
            <Icon as={MdCode} /> Source Code
          </Link>
        </div>
      </Flex>
    </footer>
  );
};

export default Footer;
