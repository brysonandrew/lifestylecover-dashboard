import * as React from "react"
import { PolicyAssetInputs } from "./policy-asset-inputs"
import { PolicyController } from "../policy-controller"
import {
  POLICY_ASSET_INIT,
  BENEFIT_ASSET_INIT,
} from "../../../data-initial-values-policy"
import { MENU_ITEM_ICONS } from "../../../data-menu-items"
import { TPolicyProps, EMenuItem } from "../../../models"

export const PolicyAsset = (props: TPolicyProps) => {
  return (
    <PolicyController
      title="Home and Contents"
      icon={MENU_ITEM_ICONS[EMenuItem.PolicyAsset]}
      inputs={POLICY_ASSET_INIT}
      arrayInputs={BENEFIT_ASSET_INIT}
      {...props}
    >
      <PolicyAssetInputs />
    </PolicyController>
  )
}
