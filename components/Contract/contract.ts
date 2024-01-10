import {
  Account,
  Contract,
  RpcProvider,
  shortString,
  stark,
  typedData,
} from 'starknet';

import abi from '../../abi/starknet.json';
import config from '../../config/config';

export const getEvent = async (transactionHash: any) => {
  const provider = new RpcProvider({
    nodeUrl:
      'https://starknet-goerli.infura.io/v3/7d290a76648a4bac93e5f98aa0d463ce',
  });

  const FlipcoinAddress =
    '0x3ec10332dc42dab41094b495e0485441296d167640ea25327e336490c77c2c1';

  const contract = new Contract(abi, FlipcoinAddress, provider);

  const txReceipt = await provider.getTransactionReceipt(transactionHash);

  const parsedEvent = contract.parseEvents(txReceipt);

  const idGame = '0x' + parsedEvent[0].CreateGame.id.toString(16);

  const verifyResult = await verifyMsg(provider, parsedEvent);

  return { verifyResult, idGame };
};

const verifyMsg = async (provider: any, parsedEvent: any) => {
  const accountAddress = config.accountAddress as any;
  const privateKey = config.privateKey as any;

  const accountAX = new Account(provider, accountAddress, privateKey);
  const types = {
    StarkNetDomain: [
      { name: 'name', type: 'felt' },
      { name: 'version', type: 'felt' },
      { name: 'chainId', type: 'felt' },
    ],
    Settle: [
      { name: 'guess', type: 'u8' },
      { name: 'seed', type: 'u128' },
    ],
  };

  const typedDataValidate = {
    types,
    primaryType: 'Settle',
    domain: {
      name: 'dappName',
      version: '1',
      chainId: shortString.encodeShortString('SN_GOERLI'),
    },
    message: {
      guess: Number(parsedEvent[0].CreateGame.guess),
      seed: parsedEvent[0].CreateGame.seed.toString(),
    },
  };

  const hashMsg = typedData.getMessageHash(typedDataValidate, accountAddress);

  const signature = await accountAX.signMessage(typedDataValidate);
  const arr = stark.formatSignature(signature);
  console.log({ arr });

  return arr;
};
