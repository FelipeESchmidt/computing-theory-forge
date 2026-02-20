/**
 * Fake user context for offline mode
 */

import React, { createContext, useContext } from "react";

export interface IFakeUser {
  email: string;
  name: string;
}

interface FakeUserContextProps {
  fakeUser: IFakeUser;
  setFakeUser: React.Dispatch<React.SetStateAction<IFakeUser>>;
}

const DEFAULT_FAKE_USER: IFakeUser = {
  email: "offline@user.local",
  name: "Offline User",
};

const FakeUserContext = createContext<FakeUserContextProps | undefined>(undefined);

interface FakeUserProviderProps {
  children: React.ReactElement;
}

export const FakeUserProvider: React.FC<FakeUserProviderProps> = ({ children }) => {
  const [fakeUser, setFakeUser] = React.useState<IFakeUser>(() => {
    const stored = localStorage.getItem("fake_user");
    return stored ? JSON.parse(stored) : DEFAULT_FAKE_USER;
  });

  React.useEffect(() => {
    localStorage.setItem("fake_user", JSON.stringify(fakeUser));
  }, [fakeUser]);

  return (
    <FakeUserContext.Provider value={{ fakeUser, setFakeUser }}>
      {children}
    </FakeUserContext.Provider>
  );
};

export const useFakeUser = (): IFakeUser => {
  const context = useContext(FakeUserContext);
  if (!context) {
    throw new Error("useFakeUser must be used within FakeUserProvider");
  }
  return context.fakeUser;
};

export const useSetFakeUser = (): React.Dispatch<React.SetStateAction<IFakeUser>> => {
  const context = useContext(FakeUserContext);
  if (!context) {
    throw new Error("useSetFakeUser must be used within FakeUserProvider");
  }
  return context.setFakeUser;
};
