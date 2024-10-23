import { ethers } from "ethers";
import { Abi } from "./Abi";
import { contractAddress } from "./contractAddress";

const walletProvider = new ethers.BrowserProvider(window.ethereum);
const signer = await walletProvider.getSigner();

export const writeContract = new ethers.Contract(contractAddress, Abi, signer);
