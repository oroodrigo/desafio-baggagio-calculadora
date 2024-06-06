import { useState } from "react"
import './Calculator.css'
import { useHistory } from "../../hooks/useHistory"

export function Calculator() {
  const { addInHistory, handleHistoryCollapseState } = useHistory()

  const [isShowingOperationNumber, setIsShowingOperationNumber] = useState(true)
  const [operationNumber, setOperationNumber] = useState<number | string>(0)
  const [result, setResult] = useState<number | string>(0)
  const [operator, setOperator] = useState("")

  function handleClear() {
    setOperationNumber(0)
  }

  function handleClearAll() {
    setOperationNumber(0)
    setResult(0)
  }

  function handleInput(event: React.MouseEvent<HTMLButtonElement>): void {
    setIsShowingOperationNumber(true)
    const inputValue = event.currentTarget.value

    if (operationNumber === 0) {
      setOperationNumber(inputValue)
    } else {
      setOperationNumber(operationNumber + inputValue)
    }
  }

  function handleOperator(event: React.MouseEvent<HTMLButtonElement>): void {
    setIsShowingOperationNumber(true)
    const operator = event.currentTarget.value


    setOperator(operator)

    if (result === 0) {
      setResult(operationNumber)
    }

    setOperationNumber(0)
  }

  function handlePIOperation() {
    if (isShowingOperationNumber) {
      setOperationNumber(Math.PI)
    } else {
      setResult(Math.PI)
    }

  }

  function handleOperatorChange() {
    if (isShowingOperationNumber) {
      setOperationNumber(-operationNumber)

    } else {
      setResult(-result)
    }
  }

  function handleCalcResult() {
    let operationResult

    switch (operator) {
      case '+': {
        operationResult = Number(result) + Number(operationNumber)
        setResult(operationResult)
        break
      }
      case '-': {
        operationResult = Number(result) - Number(operationNumber)
        setResult(operationResult)
        break
      }
      case 'x': {
        operationResult = Number(result) * Number(operationNumber)
        setResult(operationResult)
        break
      }
      case '/': {
        operationResult = Number(result) / Number(operationNumber)
        setResult(operationResult)
        break
      }
      default:
        throw new Error('Operador inválido')
    }

    addInHistory({ expression: `${result} ${operator} ${operationNumber}`, result: `${operationResult}` })
    setIsShowingOperationNumber(false)
  }

  return (

    <div className='calculator-wrapper'>

      <section className="action-section">
        <button className='action-button collapse-button' onClick={handleHistoryCollapseState}>. . .</button>
      </section>

      <h1 id='result'>{isShowingOperationNumber ? operationNumber : result}</h1>

      <section id='keyboard'>

        {
          isShowingOperationNumber ? <button className='special-operation-button' onClick={handleClear}>C</button> :
            <button className='special-operation-button' onClick={handleClearAll}>AC</button>
        }
        <button className='special-operation-button' onClick={handleOperatorChange}>+/- </button>
        <button className='special-operation-button' onClick={handlePIOperation}>PI</button>
        <button className='operation-button' onClick={handleOperator} value='/'>/</button>

        <button onClick={handleInput} value={7}>7</button>
        <button onClick={handleInput} value={8}>8</button>
        <button onClick={handleInput} value={9}>9</button>
        <button className='operation-button' onClick={handleOperator} value='x'>x</button>

        <button onClick={handleInput} value={4}>4</button>
        <button onClick={handleInput} value={5}>5</button>
        <button onClick={handleInput} value={6}>6</button>
        <button className='operation-button' onClick={handleOperator} value='-'>-</button>

        <button onClick={handleInput} value={1}>1</button>
        <button onClick={handleInput} value={2}>2</button>
        <button onClick={handleInput} value={3}>3</button>
        <button className='operation-button' onClick={handleOperator} value='+'>+</button>

        <button onClick={handleInput} value={0}>0</button>
        <button onClick={handleInput} value={'.'}>.</button>
        <button className='operation-button' onClick={handleCalcResult}>=</button>
      </section>
    </div>

  )
}