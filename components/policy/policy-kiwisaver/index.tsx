import * as React from "react"
import { PolicyKiwisaverInputs } from "./policy-kiwisaver-inputs"
import { POLICY_KIWISAVER_INIT } from "../../../data-initial-values-policy"
import { MENU_ITEM_ICONS } from "../../../layout/menu-items"
import { TPolicyProps } from "../../../models/policy"
import { PolicyController } from "../policy-controller"

export const PolicyKiwisaver = (props: TPolicyProps) => (
  <PolicyController
    title="Kiwisaver"
    icon={MENU_ITEM_ICONS.PolicyKiwisaver}
    inputs={POLICY_KIWISAVER_INIT}
    edgesKey="policiesKiwisaver"
    {...props}
  >
    <PolicyKiwisaverInputs />
  </PolicyController>
)
