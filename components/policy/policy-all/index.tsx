import * as React from "react"
import { TUserProfile } from "../../../models"
import { PolicyAllRisk } from "../policy-all-risk"
import { PolicyAllAsset } from "../policy-all-asset"
import { PolicyAllKiwisaver } from "../policy-all-kiwisaver"
import { PolicyAllPet } from "../policy-all-pet"

type TProps = {
  userProfile: TUserProfile
}

export const PolicyAll = (props: TProps) => {
  return (
    <div>
      {/* <PolicyAllRisk
        {...props}
      /> */}
      <PolicyAllAsset
        {...props}
      />
      {/* <PolicyAllKiwisaver
        {...props}
      />
      <PolicyAllPet
        {...props}
      /> */}
    </div>
  )
}