export function auth(cpf: string, password: string) {
  const isValidLogin = cpf === '07059371001' && password === '12345';
  localStorage.setItem('isAuthenticated', JSON.stringify(isValidLogin));
  return isValidLogin;
}

export function isAuthenticated() {
  return localStorage.getItem('isAuthenticated') === 'true';
}