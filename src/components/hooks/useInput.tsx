import { useState } from 'react'

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue)

  return {
    value,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value)
    },
  }
}
