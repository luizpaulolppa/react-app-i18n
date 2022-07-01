export interface ITransaction {
  user: string;
  value: number;
  description: string;
}

const TRANSACTIONS_KEY = "transactions";

function getAllTransactions(): ITransaction[] {
  return JSON.parse(localStorage.getItem(TRANSACTIONS_KEY) || "[]");
}

export async function generateTransactions() {
  const transactions = await getTransactionsSync();
  if (!transactions.length) {
    for (let i = 10; i <= 50; i++) {
      transactions.push({
        value: 143.0 + i,
        description: "ATIVO - Conta Corrente " + i,
        user: "Luiz Paulo Pilegi",
      });
    }
    localStorage.setItem(TRANSACTIONS_KEY, JSON.stringify(transactions));
  }
}

export function getTransactionsSync(): Promise<ITransaction[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(getAllTransactions()), 1500);
  });
}

export function getDocumentsSync(): Promise<ITransaction[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(getAllTransactions()), 2000);
  });
}

export function getSchedulesSync(): Promise<ITransaction[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(getAllTransactions()), 2200);
  });
}
