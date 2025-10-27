/**
 * AuthContext.jsx - Authentication Context
 * 
 * Context untuk mengelola state autentikasi global.
 * Provider ada di AuthProvider.jsx (dipisah untuk Fast Refresh).
 * 
 * @author Eko Muchamad Haryono - 0110223079
 */

import { createContext } from 'react';

// Create context
export const AuthContext = createContext(null);

