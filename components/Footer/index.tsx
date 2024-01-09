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
      label: 'RESPONSIBLY',
      link: '#',
    },
  ];
  return (
    <HStack>
      {ListData.map(item => (
        <Link href={item.link} key={item.key}>
          <Text fontSize="sm" fontWeight="bold" color="white">
            {item.label}
          </Text>
        </Link>
      ))}
    </HStack>
  );
};

export default Footer;
