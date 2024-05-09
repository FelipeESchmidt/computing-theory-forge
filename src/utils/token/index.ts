import { jwtDecode } from "jwt-decode";

export const tokenIsValid = (token: string): boolean => {
  try {
    const decoded = jwtDecode(token) as { exp: number };
    return decoded.exp > Date.now() / 1000;
  } catch (e) {
    return false;
  }
};

export const getTokenEmail = (token: string): string => {
  try {
    const decoded = jwtDecode(token) as { email: string };
    return decoded.email;
  } catch (e) {
    return "";
  }
};

export const getTokenName = (token: string): string => {
  try {
    const decoded = jwtDecode(token) as { name: string };
    return decoded.name;
  } catch (e) {
    return "";
  }
};
