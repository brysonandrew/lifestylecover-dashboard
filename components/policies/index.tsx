import * as React from "react"
import { TUserProfile } from "../../models"
import { PolicyRisk } from "./policy-risk"
import { PolicyKiwisaver } from "./policy-kiwisaver"
import { PolicyAsset } from "./policy-asset"
import { PolicyPet } from "./policy-pet"

type TProps = {
  userProfile: TUserProfile
}

export const Policies = (props: TProps) => {
  return (
    <div>
      <PolicyRisk
        {...props}
      />
      {/* <PolicyAsset
        {...props}
      />
      <PolicyKiwisaver
        {...props}
      />
      <PolicyPet
        {...props}
      /> */}
    </div>
  )
}