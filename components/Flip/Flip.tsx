import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';

import styles from '../../styles/CoinFlip.module.css';

import FlipHead from './FlipHead';
import FlipMain from './FlipMain';

export default function Flip({coin, setCoin}:any) {
  const [result, setResult] = useState({ total: 0, heads: 0, tails: 0 });

  const [status, setStatus] = useState('');

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
        setStatus('HEAD');
        console.log('It is head');
      } else {
        setIsHeads(false);
        newResult.tails++;
        setStatus('TAIL');

        console.log('It is tails');
      }
      setResult(newResult);
    }, 3000);
  };

  const percentageHeads = (result.heads / result.total) * 100 || 0;
  const percentageTails = (result.tails / result.total) * 100 || 0;

  return (
    <Box m={12}>
      <Flex flexDirection={'column'}>
        <FlipHead
          percentageHeads={percentageHeads}
          result={result}
          percentageTails={percentageTails}
coin={coin}
 setCoin={setCoin}
        />

        <FlipMain

          isHeads={isHeads}
          styles={styles}
          isFlipping={isFlipping}
          handleFlip={handleFlip}
          setIsFlipping={setIsFlipping}
          status={status}
        />
      </Flex>
    </Box>
  );
}
