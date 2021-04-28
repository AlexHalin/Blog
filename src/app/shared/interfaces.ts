export interface User {
  email: string;
  password: string;
}

export interface GetUser {
  id: string;
  email?: string;
}

export interface Post {
  id: string;
  title: string;
  body: string;
  userId?: string
}
