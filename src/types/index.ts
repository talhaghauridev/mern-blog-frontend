type Role = "User" | "Admin";

interface IUser {
  _id?: string;
  name: string;
  email: string;
  avatar: { url: string; public_id: string };
  token: string;
  createAt?: string;
}

type ImageType = {
  url: string;
  public_id: string;
};

interface IComment {
  comment: string;
  user: IUser;
}

interface IBlog {
  _id: string;
  title: string;
  description: string;
  image: ImageType;
  comments: Array<IComment>;
  user: IUser;
}

type AppProviderProps = { children: React.ReactNode };

export type { IUser, IBlog, Role, AppProviderProps };
