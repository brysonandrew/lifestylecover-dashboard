import * as React from "react"
import { PolicyAssetInputs } from "./policy-asset-inputs"
import { PolicyController } from "../policy-controller"
import {
  POLICY_ASSET_INIT,
  BENEFIT_ASSET_INIT,
} from "../../../data-initial-values-policy"
import { MENU_ITEM_ICONS } from "../../../layout/menu-items"
import { TPolicyProps } from "../../../models"

export const PolicyAsset = (props: TPolicyProps) => (
  <PolicyController
    title="Home and Contents"
    icon={MENU_ITEM_ICONS.PolicyAsset}
    inputs={POLICY_ASSET_INIT}
    arrayInputs={BENEFIT_ASSET_INIT}
    edgesKey="policiesAsset"
    {...props}
  >
    <PolicyAssetInputs />
  </PolicyController>
)
