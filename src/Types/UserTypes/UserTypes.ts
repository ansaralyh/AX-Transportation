export interface loginResponse {
    token: string;
    user: {
      id: number;
      email: string;
      // password: string;
    };
  }
  