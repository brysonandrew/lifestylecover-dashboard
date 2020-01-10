import * as React from "react"
import styled from "styled-components"
import { FieldArray, FormikValues } from "formik"
import { Button, Remove } from "../buttons"

const Heading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

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
  initialItem: any
  values: any
  children(item: any, index: number): JSX.Element
}

export const TextFieldArray = ({
  title,
  name,
  buttonText,
  initialItem,
  values,
  children,
}: TTextFieldArrayProps) => {
  return (
    <FieldArray name={`${name}s`}>
      {arrayHelpers => (
        <div>
          {title && (
            <Heading>
              <h2>{title}</h2>
            </Heading>
          )}
          {values.map((item, index) => (
            <Item key={item.id}>
              <Controls>
                <Remove onClick={() => arrayHelpers.remove(index)} />
              </Controls>
              {children(item, index)}
            </Item>
          ))}
          <AddWrapper>
            <Button onClick={() => arrayHelpers.push(initialItem)}>
              {buttonText || `add ${name}`}
            </Button>
          </AddWrapper>
        </div>
      )}
    </FieldArray>
  )
}
