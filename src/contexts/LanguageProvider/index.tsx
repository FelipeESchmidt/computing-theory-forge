import { LanguageOptions, languages, LanguageType } from "@assets/languages";
import React, { createContext, useContext } from "react";

interface LanguageControllerProps {
  texts: LanguageType;
  language: LanguageOptions;
  setLanguage: React.Dispatch<React.SetStateAction<LanguageOptions>>;
}

interface LanguageControllerProviderProps {
  children: React.ReactElement;
}

const LanguageController = createContext<LanguageControllerProps>(
  {} as LanguageControllerProps,
);

const LanguageControllerProvider: React.FC<LanguageControllerProviderProps> = ({
  children,
}) => {
  const [language, setLanguage] = React.useState<LanguageOptions>("BR");

  const texts = languages[language];

  return (
    <LanguageController.Provider value={{ language, setLanguage, texts }}>
      {children}
    </LanguageController.Provider>
  );
};

const useLanguageController = (): LanguageControllerProps => {
  const context = useContext(LanguageController);

  if (!context) {
    throw new Error("useLanguageController must be used within an LanguageController");
  }

  return context;
};

export { LanguageControllerProvider, useLanguageController };
