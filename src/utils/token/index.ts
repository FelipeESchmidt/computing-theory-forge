import { jwtDecode } from "jwt-decode";

export const tokenIsValid = (token: string): boolean => {
  try {
    const decoded = jwtDecode(token) as { exp: number };
    return decoded.exp > Date.now() / 1000;
  } catch (e) {
    return false;
  }
};
