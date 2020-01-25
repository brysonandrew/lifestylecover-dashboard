import * as React from "react"
import { TUserProfile, TPolicy } from "../../models"
import { PolicyRisk } from "./policy-risk"
import { PolicyKiwisaver } from "./policy-kiwisaver"
import { PolicyAsset } from "./policy-asset"
import { PolicyPet } from "./policy-pet"

type TProps = {
  title: string
}

export const PolicyDeleteContent = (props: TProps) => {
  return (
    <div>
      <h2>{`Are you sure you want to delete policy ${props.title}?`}</h2>
    </div>
  )
}