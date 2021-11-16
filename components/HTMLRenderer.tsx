import { Code, Text, Link, Box } from '@chakra-ui/layout';
import parse, {
  DOMNode,
  HTMLReactParserOptions,
  Element,
  domToReact,
} from 'html-react-parser';

const commonHeadingProps = {
  mt: '20px',
};

const options: HTMLReactParserOptions = {
  replace: (domNode: DOMNode) => {
    if (domNode instanceof Element && domNode.attribs) {
      if (domNode.type !== 'tag') {
        return;
      }

      if (domNode.name === 'h1') {
        return (
          <Text as="h1" fontSize="4xl" {...commonHeadingProps}>
            {domToReact(domNode.children, options)}
          </Text>
        );
      }

      if (domNode.name === 'h2') {
        return (
          <Text as="h2" fontSize="3xl" {...commonHeadingProps}>
            {domToReact(domNode.children, options)}
          </Text>
        );
      }

      if (domNode.name === 'h3') {
        return (
          <Text as="h3" fontSize="2xl" {...commonHeadingProps}>
            {domToReact(domNode.children, options)}
          </Text>
        );
      }

      if (domNode.name === 'h4') {
        return (
          <Text as="h4" fontSize="xl" {...commonHeadingProps}>
            {domToReact(domNode.children, options)}
          </Text>
        );
      }

      if (domNode.name === 'h5') {
        return (
          <Text as="h5" fontSize="lg" {...commonHeadingProps}>
            {domToReact(domNode.children, options)}
          </Text>
        );
      }

      if (domNode.name === 'code') {
        return <Code>{domToReact(domNode.children, options)}</Code>;
      }

      if (domNode.name === 'blockquote') {
        return (
          <Box as="blockquote" borderWidth={1} p={2}>
            {domToReact(domNode.children, options)}
          </Box>
        );
      }

      if (domNode.name === 'a') {
        return (
          <Link color="teal.500" href={domNode.attribs.href}>
            {domToReact(domNode.children, options)}
          </Link>
        );
      }
    }
  },
};

type Props = {
  html: string;
};

const HTMLRenderer: React.FC<Props> = ({ html }) => {
  return <>{parse(html, options)}</>;
};

export default HTMLRenderer;
