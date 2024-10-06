import { ethers } from "ethers";
export const walletProvider = new ethers.BrowserProvider(window.ethereum);
