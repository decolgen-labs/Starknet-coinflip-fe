export const getUserFromStorage = () => {
  return JSON.parse(localStorage.getItem('user') || '{}');
};

// Save Data User
export const saveUserToStorage = (data: any) => {
  localStorage.setItem('user', JSON.stringify(data));
};
export const removeUserFromStorage = () => {
  localStorage.removeItem('user');
};
export const getItemFromLocal = (name: string) => {
  if (typeof window === 'undefined') {
    return null;
  }

  return localStorage.getItem(name)
    ? JSON.parse(localStorage.getItem(name) as string)
    : null;
};
