import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Flip from '../Flip/Flip'

export default function HomePage() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            height="60vh" // Optional: Set height to occupy full viewport height
        >
            <Flip />
        </Box>
    )
}
