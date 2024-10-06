export const walletAddresses = await window.ethereum.request({
  method: "eth_requestAccounts",
});
