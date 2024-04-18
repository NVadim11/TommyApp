import { createContext } from "react"

export const AuthContext = createContext({
  value: null,
  setValue: () => {},
});

export const GameInfoContext = createContext({
  gameData: null,
  setGameData: () => {},
});