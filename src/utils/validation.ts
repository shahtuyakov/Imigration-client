export const validation = {
    email: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    password: (value: string) => value.length >= 8,
  };