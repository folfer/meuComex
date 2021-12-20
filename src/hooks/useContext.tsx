import React, {
  useState,
  createContext,
  useContext,
  useCallback,
  useEffect,
} from "react";
import { useHistory } from "react-router-dom";
import api from "../services/api";

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface User {
  id: number;
  email: string;
  name: string;
  lastname: string;
  cpf: string;
  birthDate: string;
  permission: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredentials): Promise<void>;
  setData: any;
  personalDataFunction: any;
  UserPersonalData: any;
  setOldPath: any;
  setRegisterState: any;
  setGlobalCount: any;
  globalCount: any;
  registerState: any;
  oldPath: any;
  data: any;
  column: any;
  setColumn: any;
  name: any;
  setName: any;
  setResponseUser: any;
  responseUser: any;
  setCompanyID: any;
  companyId: any;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<any>();
  const [column, setColumn] = useState<any>();
  const [name, setName] = useState<any>();
  const [responseUser, setResponseUser] = useState<any>();
  const [oldPath, setOldPath] = useState<any>();
  const [registerState, setRegisterState] = useState<any>();
  const [globalCount, setGlobalCount] = useState<any>();
  const [companyId, setCompanyID] = useState<any>();
  const [UserPersonalData, setUserPersonalData] = useState<any>([{}]);

  const history = useHistory();

  const [dataUser, setDataUser] = useState<AuthState>(() => {
    const token = localStorage.getItem("@MeuComex:token");
    const user = localStorage.getItem("@MeuComex:user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const response: any = await api.post("auth/login", {
        email,
        password,
      });

      const { token, user } = response.data;

      localStorage.setItem("@MeuComex:token", token);
      localStorage.setItem("@MeuComex:user", JSON.stringify(user));

      setDataUser({ token, user });
    } catch {
      console.log("err");
    }
  }, []);

  useEffect(() => {
    function loadFavorites(): void {
      const storagedFavorites = localStorage.getItem("@MeuComex:personalData");
      if (storagedFavorites) {
        setUserPersonalData([...JSON.parse(storagedFavorites)]);
      }
    }
    loadFavorites();
  }, []);

  const personalDataFunction = useCallback(
    (personData: any) => {
      localStorage.setItem(
        "@MeuComex:personalData",
        JSON.stringify([...UserPersonalData, { ...personData }])
      );
      setUserPersonalData([...UserPersonalData, { ...personData }]);
    },
    [UserPersonalData]
  );

  return (
    <AuthContext.Provider
      value={{
        setData,
        personalDataFunction,
        setResponseUser,
        responseUser,
        UserPersonalData,
        setOldPath,
        setCompanyID,
        companyId,
        setRegisterState,
        setGlobalCount,
        globalCount,
        registerState,
        oldPath,
        data,
        column,
        setColumn,
        name,
        setName,
        user: dataUser.user,
        signIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): any {
  const context: any = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth precisa ser utilizado junto ao AuthProvider");
  }

  return context;
}
