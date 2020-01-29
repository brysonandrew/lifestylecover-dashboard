import * as React from "react"
import { PolicyRiskInputs } from "./policy-risk-inputs"
import { MENU_ITEM_ICONS } from "../../../layout/menu-items"
import { TPolicyProps } from "../../../models/policy"
import { PolicyController } from "../policy-controller"
import { POLICY_RISK_INIT, BENEFIT_RISK_INIT } from "../../../data-initial-values-policy"

export const PolicyRisk = (props: TPolicyProps) => (
  <PolicyController
    title="Risk"
    icon={MENU_ITEM_ICONS.PolicyRisk}
    inputs={POLICY_RISK_INIT}
    arrayInputs={BENEFIT_RISK_INIT}
    edgesKey="policiesRisk"
    {...props}
  >
    <PolicyRiskInputs/>
  </PolicyController>
)
