import React from "react"
import styled from "styled-components"
import { useQuery } from "@apollo/react-hooks"
import { TClientProfile } from "../../../models"
import { ADVISOR_NOTE_BY_CLIENT_QUERY } from "../../../utils"
import { LoadingCentered, ArrayText, TextFieldText } from "../../../common"
import { ADVISOR_NOTE_ITEM_INIT } from "../../../data-initial-values-advisor-note"

const Wrapper = styled.div`
  text-align: left;
`

const Section = styled.div`
  margin-top: 24px;
`

const Title = styled.h4`
  padding-bottom: 12px;
`

type TProps = {
  userProfile: TClientProfile
}

export const Notes = (props: TProps) => {
  const { data, loading, error } = useQuery(ADVISOR_NOTE_BY_CLIENT_QUERY, {
    variables: {
      client: props.userProfile.username.toLowerCase(),
    },
  })
  if (loading) {
    return (
      <LoadingCentered />
    )
  } else {
    const { advisorNotes } = data.advisorNoteBy
    return (
      <Wrapper>
        <Section>
          <Title>Recommendations</Title>
          <ArrayText
            arrayInputs={ADVISOR_NOTE_ITEM_INIT}
          >
            {advisorNotes['recommendations']}
          </ArrayText>
        </Section>
        <Section>
          <Title>Priorities</Title>
          <ArrayText
            arrayInputs={ADVISOR_NOTE_ITEM_INIT}
          >
            {advisorNotes['priorities']}
          </ArrayText>
        </Section>
        <Section>
          <Title>Notes</Title>
          <TextFieldText>
            {advisorNotes['notes']}
          </TextFieldText>
        </Section>
      </Wrapper>
    )
  }
}
