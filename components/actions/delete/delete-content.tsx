import * as React from "react"

type TProps = {
  children: string
}

export const DeleteContent = (props: TProps) => {
  return (
    <div>
      <h2>{`Are you sure you want to delete ${props.children}?`}</h2>
    </div>
  )
}
