export interface LoginRequest {
    email: string;
    password: string;
  }
  
export interface LoginResponse {
    id: string;
    name: string;
    email: string;
    token: string;
  }
  
export interface SignUpRequest {
    name: string;
    email: string;
    password: string;

}