import { useContext } from 'react';
import { authContext, authContextType } from './AuthProvider';


const useAuthContext = () => {
    const context:authContextType | null = useContext(authContext);

    if (!context) throw new Error('useAuthContext context must be use inside AuthProvider');

  return context
}

export default useAuthContext