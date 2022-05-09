import React, {useState, useEffect}  from "react";
import {Meta, Story} from '@storybook/react'
import {Box, Props} from '../components/Box'
import '../index.css'
const meta: Meta = {
    title: 'Box',
    component: Box
}

interface Data{
    title: string
    amount: number
    percent?: number
    description?:string
  }

const INITIAL_STATE = [
    {
      title: 'Total de ventas',
      amount: 4568,
      percent: 24,
      description: 'Ventas totales de camaron'
    },
    {
      title: 'Total de pedidos',
      amount: 534,
      description: 'Pedidos de balanceado '
    },
    {
      title: 'Total de ganacia mensual',
      amount: 14523,
      percent: 100
    }
]


export default meta;

export const Default = () => {
    const [data, setData] = useState<Array<Data>>([])

    useEffect(() => {
      setData(INITIAL_STATE)
    })

    return(
        <div className = 'App'>
         <h1>Datos</h1>
            <Box data={data}></Box>
        </div>
    )

}
