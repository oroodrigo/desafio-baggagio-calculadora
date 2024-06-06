import { trashIcon } from '../../utils/icons'
import './History.css'
import { useHistory } from '../../hooks/useHistory'

export function History() {
  const { clearHistory, history, isCollapsed, handleHistoryCollapseState } = useHistory()

  return (
    <div className={`history-wrapper ${isCollapsed ? "" : "open"}`}>
      <h1 className='title'>Histórico</h1>

      <section className='history-content'>
        {history.map((historyItem, i) => {
          return (
            <div className='history-item' key={i}>
              <h4>{historyItem.expression} =</h4>
              <h1>{historyItem.result}</h1>
            </div>
          )
        })}
      </section>

      <section className='action-section'>
        <button className='action-button collapse-button' onClick={handleHistoryCollapseState}>Fechar</button>
        {history.length > 0 && <button className='action-button delete-button' onClick={clearHistory}>{trashIcon}</button>}
      </section>
    </div>)
}