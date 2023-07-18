import { FC, useEffect } from 'react'

interface CounterProps {
  value: number;
  setValue: any;
}

const Counter: FC<CounterProps> = ({ value, setValue}) => {

  useEffect(() => {
    setTimeout(() => {
      if(value > 0) {
        setValue(value -1);
      }
    }, 1000)
  }, [setValue, value])

  return <div className={`text-center text-7xl flex items-center justify-center ${value === 0 ? 'text-red-400' : 'text-slate-200'}`}>{value}</div>
}

export default Counter