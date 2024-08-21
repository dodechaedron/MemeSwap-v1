import { ChainId } from 'utils/@sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb',
  [ChainId.TESTNET]: '0x36Bf49e7521CB8eb83Cace3Be92C99A3E04B4b73',
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
