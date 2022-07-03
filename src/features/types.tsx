export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginSuccessResponse {
  statusCode: number;
  status: string;
  message: string;
  data: string;
}

export interface LoginFailureResponse {
  message: string;
  type: string;
  reason: string;
}

export interface LoginStateType {
  loginResponse: LoginSuccessResponse;
  error: LoginFailureResponse;
  isLoading: boolean;
}
