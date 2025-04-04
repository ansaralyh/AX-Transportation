import { Instance } from "../APi/api";
import { loginResponse } from "../types/userTypes";

export async function login({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<loginResponse> {
  try {
    const response = await Instance.post(`auth/admin/login`, {
      email,
      password,
    });
    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("token", response.data.token);

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message || error.message || "Failed to login";

    throw new Error(errorMessage);
  }
}
