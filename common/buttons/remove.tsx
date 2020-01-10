import * as React from "react"
import { Button } from "./button"

type TRemoveProps = { onClick(): void }

export const Remove = (props: TRemoveProps) => {
  return (
    <div>
      <Button style={{ width: 32, height: 32 }} onClick={props.onClick}>
        <svg width="20" height="20" viewBox="0 0 24 24">
          <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z" />
        </svg>
      </Button>
    </div>
  )
}
