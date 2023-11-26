import { Box, Button, Flex, Image, Text } from '@chakra-ui/react'
import { useState } from "react"
import styles from '../../styles/CoinFlip.module.css';
import { stat } from 'fs';

export default function Flip() {

    const [result, setResult] = useState({ total: 0, heads: 0, tails: 0 });

    const [status, setStatus] = useState("");


    const [isHeads, setIsHeads] = useState(true);
    const [isFlipping, setIsFlipping] = useState(false);

    const handleFlip = () => {
        if (isFlipping) return;

        setIsFlipping(true);

        const flipResult = Math.random();
        setTimeout(() => {
            const newResult = { ...result, total: result.total + 1 };
            if (flipResult <= 0.5) {
                setIsHeads(true);
                newResult.heads++;
                setStatus("HEAD")
                console.log('It is head');
            } else {
                setIsHeads(false);
                newResult.tails++;
                setStatus("TAIL")

                console.log('It is tails');
            }
            setResult(newResult);
        }, 3000); // Change this duration as needed to match your animation timing
    };

    const percentageHeads = (result.heads / result.total) * 100 || 0;
    const percentageTails = (result.tails / result.total) * 100 || 0;

    return (
        <>

            <Box textColor={"white"} bg={"#1d1d1b99"} p={31} rounded={"8px"}>
                <Flex gap={"32px"} alignItems={"center"}>
                    <Box border='1px solid' px={24} py={16} borderColor='#FFF' rounded={"8px"}>
                        <Text textAlign={"center"} my={0} fontSize={"2rem"} mb={10}>{percentageHeads.toFixed(0)}%</Text>
                        <Text my={0}>{result.heads} HEADS</Text>
                    </Box>
                    <Box>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="52" viewBox="0 0 37 52" fill="none">
                            <path d="M11.3168 49.292H25.292C32.2796 49.292 34.6088 46.9628 34.6088 39.9752V12.0248C34.6088 5.0372 32.2796 2.70801 25.292 2.70801H11.3168C4.3292 2.70801 2 5.0372 2 12.0248V39.9752C2 46.9628 4.3292 49.292 11.3168 49.292Z" stroke="white" stroke-width="3.4938" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path opacity="0.4" d="M18.3045 39.9752C22.1637 39.9752 25.2921 36.8468 25.2921 32.9876C25.2921 29.1283 22.1637 26 18.3045 26C14.4452 26 11.3169 29.1283 11.3169 32.9876C11.3169 36.8468 14.4452 39.9752 18.3045 39.9752Z" stroke="white" stroke-width="3.4938" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            <path opacity="0.4" d="M18.3043 19.0125C20.2338 19.0125 21.7981 17.4483 21.7981 15.5187C21.7981 13.5891 20.2338 12.0249 18.3043 12.0249C16.3748 12.0249 14.8105 13.5891 14.8105 15.5187C14.8105 17.4483 16.3748 19.0125 18.3043 19.0125Z" stroke="white" stroke-width="3.4938" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </Box>
                    <Box border='1px solid' px={24} py={16} borderColor='#FFF' rounded={"8px"}>
                        <Text textAlign={"center"} my={0} fontSize={"2rem"} mb={10}>{percentageTails.toFixed(0)}%</Text>
                        <Text my={0}>{result.tails} TAILS</Text>
                    </Box>

                </Flex>


            </Box >



            <Box textColor={"white"} px={106} w={"full"} mt={32} bg={"#1d1d1b99"} py={31} rounded={"8px"}>
                <Box position={"relative"} width={256} h={270}>
                    <Box mb={4}>Result: {status}</Box>
                    <Box mt={20} className={`${styles.coin} ${isFlipping ? styles.flipping : ''}`}>
                        <Box className={`${styles.side} ${styles.heads} ${isHeads ? styles.visible : ''}`}>
                            <Image src='/assets/coin/head.svg' />
                        </Box>
                        <Box className={`${styles.side} ${styles.tails} ${!isHeads ? styles.visible : ''}`}>
                            <Image src='/assets/coin/tail.svg' />
                        </Box>
                    </Box>
                </Box>



                {isFlipping ? <Text textTransform={"uppercase"}
                    mt={36}
                    bg={"transparent"}
                    border={"1px solid #FFF"}
                    textColor={"white"}
                    cursor={"pointer"}
                    py={16}
                    px={24}
                    textAlign={"center"}
                    onClick={() => { setIsFlipping(false) }}
                    rounded={"8"}>Reset</Text> : <Text
                        textTransform={"uppercase"}
                        mt={36}
                        bg={"transparent"}
                        border={"1px solid #FFF"}
                        textColor={"white"}
                        cursor={"pointer"}
                        py={16}
                        px={24}
                        rounded={"8"}
                        onClick={handleFlip}
                    >
                    Click to start
                </Text>}
            </Box>
        </>






    )
}
