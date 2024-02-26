type Role = "User" | "Admin";

interface IUser {
  readonly id?: string;
  name: string;
  email: string;
  password: string;
  avatar: { url: string };
  role: Role;
  accessToken: string;
  refreshToken: string;
}

interface IProduct {
  readonly id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: {
    url: string;
  };
}

interface UploadResult {
  image: string[];
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}


type AppProviderProps ={children:React.ReactNode}



export type { IUser, IProduct, Role,UploadResult,AppProviderProps };
