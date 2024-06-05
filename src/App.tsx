import { useState } from 'react'
import './App.css'

function App() {
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
    setResult(Math.PI)
    setIsShowingOperationNumber(false)
  }

  function handleOperatorChange() {
    if (isShowingOperationNumber) {
      setOperationNumber(-operationNumber)

    } else {
      setResult(-result)
    }
  }

  function handleCalcResult() {
    switch (operator) {
      case 'addition': {
        setResult(Number(result) + Number(operationNumber))
        break
      }
      case 'subtraction': {
        setResult(Number(result) - Number(operationNumber))
        break
      }
      case 'multiplication': {
        setResult(Number(result) * Number(operationNumber))
        break
      }
      case 'division': {
        setResult(Number(result) / Number(operationNumber))
        break
      }
      default:
        throw new Error('Operador inválido')
    }

    setIsShowingOperationNumber(false)
  }

  return (

    <div className='wrapper'>
      <span id='result'>{isShowingOperationNumber ? operationNumber : result}</span>

      <div id='keyboard'>

        {
          isShowingOperationNumber ? <button className='special-operation-button' onClick={handleClear}>C</button> :
            <button className='special-operation-button' onClick={handleClearAll}>AC</button>
        }
        <button className='special-operation-button' onClick={handleOperatorChange}>+/- </button>
        <button className='special-operation-button' onClick={handlePIOperation}>PI</button>
        <button className='operation-button' onClick={handleOperator} value='division'>/</button>

        <button onClick={handleInput} value={7}>7</button>
        <button onClick={handleInput} value={8}>8</button>
        <button onClick={handleInput} value={9}>9</button>
        <button className='operation-button' onClick={handleOperator} value='multiplication'>x</button>

        <button onClick={handleInput} value={4}>4</button>
        <button onClick={handleInput} value={5}>5</button>
        <button onClick={handleInput} value={6}>6</button>
        <button className='operation-button' onClick={handleOperator} value='subtraction'>-</button>

        <button onClick={handleInput} value={1}>1</button>
        <button onClick={handleInput} value={2}>2</button>
        <button onClick={handleInput} value={3}>3</button>
        <button className='operation-button' onClick={handleOperator} value='addition'>+</button>

        <button onClick={handleInput} value={0}>0</button>
        <button onClick={handleInput} value={'.'}>.</button>
        <button className='operation-button' onClick={handleCalcResult}>=</button>
      </div>
    </div>

  )
}

export default App
