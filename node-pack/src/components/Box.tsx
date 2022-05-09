export interface Props {
    data: Array<{
        title: string
        amount: number
        percent?: number
        description?:string
    }>
}

export const Box = ({ data }:Props) => {
  return (
    <ul>
        {
            data.map(fact => {
              return (
              <div key= {fact.title}>
                <h2>{fact.title}</h2>
                <span>{fact.amount}</span>
                <p>{fact.description} </p>
                <span>{fact.percent}</span>
              </div>
              )
            })
        }
    </ul>
  )
}

