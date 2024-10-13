import { IError } from "@/application/interfaces/error";
import { auth } from "@/application/libs/firebase";
import { useToast } from "@/presentation/hooks/useToast";
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

type ContextProps = {
  currentUser: User | null;
  logout: () => void;
  login: (username: string, password: string) => void;
};

const initialAuthContext: ContextProps = {
  currentUser: null,
  logout: () => {},
  login: (username: string, password: string) => ({ username, password }),
};

const CACHE_KEY = "user_session";
const SESSION_EXPIRATION_MS = 3600 * 1000;

const getSessionCache = () => {
  const cached = localStorage.getItem(CACHE_KEY);
  if (!cached) return null;

  const { user, expiration } = JSON.parse(cached);

  if (new Date().getTime() > expiration) {
    localStorage.removeItem(CACHE_KEY);
    return null;
  }

  return user as User;
};

const setSessionCache = (user: User) => {
  const expiration = new Date().getTime() + SESSION_EXPIRATION_MS;
  localStorage.setItem(CACHE_KEY, JSON.stringify({ user, expiration }));
};

const clearSessionCache = () => {
  localStorage.removeItem(CACHE_KEY);
};

export const AuthContext = createContext(initialAuthContext);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const { notifyError, notifySuccess } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // ele inicia quando o componente monta -> e ele recebe uma funcao de callback e é executada qnd o componente desmonta
    const cachedUser = getSessionCache();
    if (cachedUser) {
      setCurrentUser(cachedUser);
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSessionCache(user);
      } else {
        clearSessionCache();
      }
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const logout = async () => {
    try {
      await signOut(auth);
      clearSessionCache();
      setCurrentUser(null);
      notifySuccess("Logout realizado com sucesso!");
      navigate("/login");
    } catch (err) {
      notifyError((err as IError).message);
    }
  };

  const login = async (username: string, password: string) => {
    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        username,
        password
      );
      setSessionCache(user);
      notifySuccess("Login bem-sucedido!");
      navigate("/");
    } catch (err) {
      notifyError((err as IError).message);
    }
  };

  return (
    <AuthContext.Provider value={{ currentUser, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};
