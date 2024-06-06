import { ReactNode, createContext, useState } from "react"

type historyItem = {
  expression: string,
  result: string
}

type HistoryContextType = {
  isCollapsed: boolean
  history: historyItem[]
  addInHistory: (item: historyItem) => void
  clearHistory: () => void
  handleHistoryCollapseState: () => void
}

export const HistoryContext = createContext({} as HistoryContextType)

interface HistoryContextProviderProps {
  children: ReactNode
}

export function HistoryContextProvider({ children }: HistoryContextProviderProps) {
  const [isCollapsed, setIsCollapsed] = useState(true)
  const [history, setHistory] = useState<historyItem[]>([])

  function addInHistory(item: historyItem) {
    setHistory([...history, item])
  }

  function clearHistory() {
    setHistory([])
  }

  function handleHistoryCollapseState() {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <HistoryContext.Provider
      value={{
        addInHistory,
        clearHistory,
        history,
        isCollapsed,
        handleHistoryCollapseState
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
}