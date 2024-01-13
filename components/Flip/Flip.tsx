import { Box, Flex } from '@chakra-ui/react';
import { useState } from 'react';

import styles from '../../styles/CoinFlip.module.css';

import FlipHead from './FlipHead';
import FlipMain from './FlipMain';

export default function Flip({
  coin,
  setCoin,
  handleGame,
  setStaked,
  setAmount,
  staked,
  statusWon,
}: any) {
  const [result, setResult] = useState({ total: 0, heads: 0, tails: 0 });

  const [status, setStatus] = useState('');

  const [isHeads, setIsHeads] = useState(true);
  const [isFlipping, setIsFlipping] = useState(false);

  const percentageHeads = (result.heads / result.total) * 100 || 0;
  const percentageTails = (result.tails / result.total) * 100 || 0;

  return (
    <Box>
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
          setIsFlipping={setIsFlipping}
          status={status}
          handleGame={handleGame}
          setStaked={setStaked}
          setAmount={setAmount}
          staked={staked}
          statusWon={statusWon}
        />
      </Flex>
    </Box>
  );
}
