import * as React from "react"
import { ContactEditable } from "./contact-editable"
import { TUserProfile } from "../../models"
import { DetailsEditable } from "./details-editable"

type TProps = {
  userProfile: TUserProfile
}

export const Profile = (props: TProps) => {
  return (
    <div>
      <ContactEditable
        {...props}
      />
      {props.userProfile.role === 'client' && (
        <DetailsEditable
          {...props}
        />
      )}
    </div>
  )
}

export * from './contact-editable'
export * from './details-editable'
