import { useState, useCallback } from 'react'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'

export default function NumberWithButtons ({
  min = 0,
  max = 10,
  init = 1,
  onChange = () => {}
}) {
  const [count, setCount] = useState(init)
  const handleIncrement = useCallback(() => {
    if (count < max) {
      onChange(count + 1)
      setCount(count + 1)
    }
  }, [count, max, onChange])

  const handleDecrement = useCallback(() => {
    if (count > min) {
      onChange(count - 1)
      setCount(count - 1)
    }
  }, [count, min, onChange])

  return (
    <ButtonGroup size='small' aria-label='small outlined button group'>
      <Button
        disableElevation
        variant='contained'
        color='primary'
        onClick={handleDecrement}
      >
        -
      </Button>
      <Button>{count}</Button>
      <Button
        disableElevation
        variant='contained'
        color='primary'
        onClick={handleIncrement}
      >
        +
      </Button>
    </ButtonGroup>
  )
}
