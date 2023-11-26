import Header from '@/components/Header/Header'
import { Box } from '@chakra-ui/react'
import React from 'react'

export default function Layout({ children }: any) {
    return (
        <Box
            backgroundImage="url('/assets/bg.svg')"
            backgroundRepeat="no-repeat"
            backgroundPosition={"center"}
            backgroundSize="cover"
            w={"full"}
            h={"100vh"}
        >
            <Box>

                <Header />
                {children}
            </Box>
        </Box>
    )
}
