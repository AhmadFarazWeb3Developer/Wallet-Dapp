import { ethers } from "ethers";
import { Abi } from "./Abi.js";
import { contractAddress } from "./contractAddress.js";
import { infuraProvider } from "./infuraProvider.js";
export const readContract = new ethers.Contract(
  contractAddress,
  Abi,
  infuraProvider
);
