
import * as React from "react"
import { TUserProfile } from "../../models"
import { FormText } from "../../common/text-ui/form-text"
import { initializeFormValues, createUserProfile } from "../../utils"
import { ProfileContactUpdateForm, ProfileDetailsUpdateForm } from ".."
import { USER_CONTACT_FORM, USER_DETAILS_FORM } from "../../data-initial-values-user"

type TProps = {
  isEditing: boolean
  user: any
}

export const UserEditable = (props: TProps) => {
  const { isEditing, user } = props
  const inputs = { ...USER_CONTACT_FORM, ...USER_DETAILS_FORM }
  const userProfile = createUserProfile(user)
  const [formState, setFormState] = React.useState(initializeFormValues(userProfile, inputs))
  const handleRefetch = (changedValues) => {
    setFormState({ ...formState, ...changedValues })
  }

  if (isEditing) {
    return (
      <div>
        <ProfileContactUpdateForm
          userProfile={userProfile}
        />
        {userProfile.role === 'client' && (
          <ProfileDetailsUpdateForm
            userProfile={userProfile}
          />
        )}
      </div>
    )
  } else {
    return (
      <FormText>
        {initializeFormValues(userProfile, inputs)}
      </FormText>
    )
  }
} 
