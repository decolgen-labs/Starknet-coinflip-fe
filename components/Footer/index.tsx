import { HStack, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
interface ILinkProps {
  key: string;
  label: string;
  link: string;
}
const Footer = () => {
  const ListData: ILinkProps[] = [
    {
      key: 'faq',
      label: 'FAQ',
      link: '#',
    },
    {
      key: 'how-to-play',
      label: 'How to Plat',
      link: '#',
    },
    {
      key: 'responsibily',
      label: 'responsibily',
      link: '#',
    },
  ];
  return (
    <HStack>
      {ListData.map((item, index) => (
        <Link href={item.link} key={item.key}>
          <Text
            fontSize="sm"
            fontWeight="bold"
            color="white"
            px={2}
            borderRight={
              index != ListData.length - 1 ? '2px solid white' : undefined
            }
            textTransform="capitalize"
          >
            {item.label}
          </Text>
        </Link>
      ))}
    </HStack>
  );
};

export default Footer;
