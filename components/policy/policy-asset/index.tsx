import * as React from "react"
import { PolicyAssetInputs } from "./policy-asset-inputs"
import { PolicyController } from "../policy-controller"
import {
  POLICY_ASSET_INIT,
  BENEFIT_ASSET_INIT,
} from "../../../data-initial-values-policy"
import { MENU_ITEM_ICONS } from "../../../layout/menu-items"
import { TPolicyProps, EMenuItem, EPolicyFetchKey } from "../../../models"

export const PolicyAsset = (props: TPolicyProps) => (
  <PolicyController
    title="Home and Contents"
    icon={MENU_ITEM_ICONS[EMenuItem.PolicyAsset]}
    inputs={POLICY_ASSET_INIT}
    arrayInputs={BENEFIT_ASSET_INIT}
    edgesKey={EPolicyFetchKey.policiesAsset}
    {...props}
  >
    <PolicyAssetInputs />
  </PolicyController>
)
