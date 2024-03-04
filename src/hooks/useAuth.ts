import { RootState } from "@redux/store";
import { useSelector } from "react-redux";
import { useQuery } from '@apollo/client';
const useAuth = () => {
    const { user } = useSelector((state: RootState) => state.user);

  if(!user){
    
  }
  return {
    user,
  };
};

export default useAuth;
