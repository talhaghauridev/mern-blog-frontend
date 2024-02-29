interface IUser {
  _id?: string;
  name: string;
  email: string;
  avatar: { url: string; public_id: string };
  token: string;
  createAt?: string;
}

export type { IUser };
