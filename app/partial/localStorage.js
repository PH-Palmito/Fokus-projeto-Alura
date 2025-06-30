function getLocalStorage(key) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : [];
  } catch (error) {
    console.warn(`Erro ao ler do localStorage com a chave "${key}":`, error);
    return [];
  }
}

function setLocalStorage(key, value) {
  if (!key) {
    throw new Error("A chave (key) é obrigatória para o localStorage.");
  }

  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error(
      `Erro ao salvar no localStorage com a chave "${key}":`,
      error
    );
  }
}

export default { getLocalStorage, setLocalStorage };
