import * as React from "react"
import styled from "styled-components"
import { FieldArray } from "formik"
import { Add, Delete } from "@material-ui/icons"
import { Button } from "@material-ui/core"
import { ListDivider } from ".."

const Item = styled.div`
  position: relative;
  margin-top: 28px;
`

const Controls = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  transform: translateY(-50%);
  z-index: 1;
  && {
    & input {
      font-size: 16px;
    }
  }
`

const AddWrapper = styled.div`
  margin-top: 12px;
`

type TTextFieldArrayProps = {
  title?: string
  buttonText?: string
  name: string
  namePlural: string
  initialItem: any
  values: any
  children(item: any, index: number): JSX.Element
}

export const TextFieldArray = ({
  name,
  namePlural,
  initialItem,
  values,
  children,
}: TTextFieldArrayProps) => {
  return (
    <FieldArray name={namePlural}>
      {arrayHelpers => (
        <div>
          {values.map((item, index) => {
            return (
              <React.Fragment key={`${name}-${index}`}>
                {index !== 0 && <ListDivider />}
                <Item>
                  <Controls>
                    <Button
                      onClick={() => arrayHelpers.remove(index)}
                      startIcon={(<Delete />)}
                    >
                      {`remove ${name}`}
                    </Button>
                  </Controls>
                  {children(item, index)}
                </Item>
              </React.Fragment>
            )
          })}
          <AddWrapper>
            <Button
              onClick={() => arrayHelpers.push(initialItem)}
              startIcon={(<Add />)}
            >
              {`add ${name}`}
            </Button>
          </AddWrapper>
        </div>
      )}
    </FieldArray>
  )
}
