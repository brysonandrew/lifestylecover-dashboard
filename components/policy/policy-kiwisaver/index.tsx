import * as React from "react"
import { PolicyKiwisaverInputs } from "./policy-kiwisaver-inputs"
import { POLICY_KIWISAVER_INIT } from "../../../data-initial-values-policy"
import { MENU_ITEM_ICONS } from "../../../layout/menu-items"
import { TPolicyProps, EPolicyFetchKey } from "../../../models/policy"
import { PolicyController } from "../policy-controller"
import { EMenuItem } from "../../../models"

export const PolicyKiwisaver = (props: TPolicyProps) => (
  <PolicyController
    title="Kiwisaver"
    icon={MENU_ITEM_ICONS[EMenuItem.PolicyKiwisaver]}
    inputs={POLICY_KIWISAVER_INIT}
    edgesKey={EPolicyFetchKey.policiesKiwisaver}
    {...props}
  >
    <PolicyKiwisaverInputs />
  </PolicyController>
)
