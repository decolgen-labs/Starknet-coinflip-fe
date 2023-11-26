import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <Box p={20}>
      <Image src='/assets/logo.svg'></Image>
    </Box>
  )
}
