import React from "react"
import { TextField, TextFieldArray, SubItemWrapper } from "../../../../common"
import { placeholder } from "../../../../data-placeholders"
import { fromCamelCase } from "../../../../utils"
import { ADVISOR_NOTE_ITEM_INIT } from "../../../../data-initial-values-advisor-note"

type TProps = {
  values?: any
  name: string
  namePlural: string
}

export const AdvisorNoteTextList = ({ name, namePlural, values }: TProps) => (
  <TextFieldArray
    name={name}
    namePlural={namePlural}
    title={namePlural}
    initialItem={ADVISOR_NOTE_ITEM_INIT}
    values={values[namePlural]}
  >
    {(_, index) => (
      <SubItemWrapper key={`${name}-${index}`}>
        {Object.keys(ADVISOR_NOTE_ITEM_INIT).map(key => (
          <TextField
            key={key}
            label={fromCamelCase(key)}
            placeholder={placeholder.user.unknown}
            name={`${namePlural}.${index}.${key}`}
            type={key.indexOf("date") > -1 ? "date" : null}
          />
        ))}
      </SubItemWrapper>
    )}
  </TextFieldArray>
)
