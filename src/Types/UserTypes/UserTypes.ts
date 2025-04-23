export interface loginResponse {
    token: string;
    user: {
      id: number;
      email: string;
      role: 'admin' | 'super-admin' | 'driver';
    };
  }
  