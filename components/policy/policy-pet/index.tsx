import * as React from "react"
import { POLICY_PET_INIT, PET_INIT } from "../../../data-initial-values-policy"
import { TPolicyProps, EPolicyFetchKey } from "../../../models/policy"
import { PolicyController } from "../policy-controller"
import { MENU_ITEM_ICONS } from "../../../data-menu-items"
import { PolicyPetInputs } from "./policy-pet-inputs"
import { EMenuItem } from "../../../models"

export const PolicyPet = (props: TPolicyProps) => (
  <PolicyController
    title="Pet"
    icon={MENU_ITEM_ICONS[EMenuItem.PolicyPet]}
    inputs={POLICY_PET_INIT}
    arrayInputs={PET_INIT}
    {...props}
  >
    <PolicyPetInputs />
  </PolicyController>
)
