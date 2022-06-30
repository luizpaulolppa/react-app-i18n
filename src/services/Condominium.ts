import { onlyCnpjNumbers } from "../utils/strings";

export interface IBalance {
  accountValue?: number;
  improvementsValue?: number;
  freeValue?: number;
  laborValue?: number;
}
export interface ICondo {
  name: string;
  cnpj: string;
  syndic: string;
  balance?: IBalance;
}

function getAllCondos(): ICondo[] {
  return JSON.parse(localStorage.getItem("condos") || "[]");
}

export async function generateCondos() {
  const condos = await getCondosSync();
  if (!condos.length) {
    for (let i = 10; i <= 50; i++) {
      condos.push({
        name: "Condo Rosa Linda " + i,
        cnpj: "84.425.811/0001-" + i,
        syndic: "Luiz Paulo Pilegi de Almeida",
        balance: {
          accountValue: 41344.33 + i,
          freeValue: 1944.23 + i,
          improvementsValue: 344.44 + i,
          laborValue: 4554.73 + i,
        },
      });
    }
    localStorage.setItem("condos", JSON.stringify(condos));
  }
}

export function getCondosSync(): Promise<ICondo[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(getAllCondos()), 1000);
  });
}

export function getBalances(cnpj: string): Promise<ICondo | undefined> {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(getAllCondos().find(condo => onlyCnpjNumbers(condo.cnpj) === onlyCnpjNumbers(cnpj))),
      1000
    );
  });
}
