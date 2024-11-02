import { useEffect, useState } from "react";
import { readContract } from "../ReadContractInstance";

const useTransaction = () => {
  const [transaction, setTrasaction] = useState([]);

  const fetchTransactions = async () => {
    {
      const transactionLength = await readContract.getTransactionCount();
      const fetchedTransactions = [];
      for (let i = 0; i < transactionLength; i++) {
        const transaction = await readContract.transactions(i);

        fetchedTransactions.push(transaction);
      }
      setTrasaction(fetchedTransactions);
    }
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return { transaction, fetchTransactions };
};

export { useTransaction };
