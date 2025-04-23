import { Instance } from "../../Apis/GlobelApi";
import { loginResponse } from "../../Types/UserTypes/UserTypes";

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

    // Extract token properly from nested `data`
    const token = response.data?.data?.token;
    if (!token) throw new Error("Token not found in response");

    localStorage.setItem("isAuthenticated", "true");
    localStorage.setItem("token", token);

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.message || error.message || "Failed to login";

    throw new Error(errorMessage);
  }
}

// admin logout

export async function AdminLogout() {
  try {
    const response = await Instance.post("auth/admin/logout");
    localStorage.removeItem("token");
    localStorage.removeItem("isAuthenticated");
    return response.data;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || error.message || 'Failed to Logout',
    );
  }
}
