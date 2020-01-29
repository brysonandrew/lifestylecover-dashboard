import * as React from "react"
import { POLICY_PET_INIT, PET_INIT } from "../../../data-initial-values-policy"
import { TPolicyProps } from "../../../models/policy"
import { PolicyController } from "../policy-controller"
import { MENU_ITEM_ICONS } from "../../../layout/menu-items"
import { PolicyPetInputs } from "./policy-pet-inputs"

export const PolicyPet = (props: TPolicyProps) => (
  <PolicyController
    title="Pet"
    icon={MENU_ITEM_ICONS.PolicyPet}
    inputs={POLICY_PET_INIT}
    arrayInputs={PET_INIT}
    edgesKey="policiesPet"
    {...props}
  >
    <PolicyPetInputs />
  </PolicyController>
)
