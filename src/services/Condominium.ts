export interface ICondos {
  name: string;
  cnpj: string;
  syndic: string;
}

export async function genegateCondos() {
  const condos = await getCondos();
  if (!condos.length) {
    for (let i = 10; i <= 50; i++) {
      condos.push({
        name: 'Condo Rosa Linda ' + i,
        cnpj: '84.425.811/0001-' + i,
        syndic: 'Luiz Paulo Pilegi de Almeida',
      });
    }
    localStorage.setItem('condos', JSON.stringify(condos));
  }
}

export function getCondos(): Promise<ICondos[]> {
  return new Promise((resolve) => {
    setTimeout(() => resolve(JSON.parse(localStorage.getItem('condos') || '[]')), 1000);
  });
}