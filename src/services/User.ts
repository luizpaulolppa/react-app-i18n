export function auth(cpf: string, password: string): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isValidLogin = cpf === '07059371001' && password === '12345';
      localStorage.setItem('isAuthenticated', JSON.stringify(isValidLogin));
      resolve(isValidLogin);
    }, 1200);
  });
}

export function isAuthenticated() {
  return localStorage.getItem('isAuthenticated') === 'true';
}