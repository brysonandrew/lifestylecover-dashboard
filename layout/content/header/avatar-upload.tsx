import React from "react"
import styled from "styled-components"
import { IconButton, CircularProgress, Box, Avatar } from "@material-ui/core"
import { layoutSizes } from "../../../data"
import { TUserProfile } from "../../../models"
import { useMutation } from "@apollo/react-hooks"
import { USER_UPDATE_AVATAR_MUTATION } from "../../../utils/graphql/user/user-update-avatar.mutation"
import { fitSizesInFrame, profilePicture } from "../../../utils"
const MAX_SIZE = layoutSizes.imageSize

const Wrapper = styled.div`
  position: relative;
  width: ${layoutSizes.nav.row}px;
  height: ${layoutSizes.nav.row}px;
  padding: 6px;
`

const Label = styled.label`
  display: block;
`

const Img = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`

const LoadingWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

type TProps = {
  userProfile: TUserProfile
}

export const AvatarUpload = (props: TProps) => {
  const { userProfile } = props
  const [handleUpload, { loading, data, error }] = useMutation(
    USER_UPDATE_AVATAR_MUTATION
  )
  const [uploadedAvatar, setUploadedAvater] = React.useState(null)
  if (userProfile && (userProfile?.avatar?.url || userProfile.profilePicture)) {
    const handleChange = e => {
      if (e.target.files && e.target.files.length > 0) {
        if (window) {
          let img = new Image()
          const file = e.target.files[0]
          const url = (window.URL || window.webkitURL)["createObjectURL"](file)
          img.onload = (e: any) => {
            const loadedImage = e.currentTarget
            let canvas = document.createElement("canvas")
            canvas.width = MAX_SIZE
            canvas.height = MAX_SIZE
            const [w, h] = fitSizesInFrame(
              [loadedImage.width, loadedImage.height],
              [MAX_SIZE, MAX_SIZE]
            )
            const ctx = canvas.getContext("2d")
            ctx.drawImage(
              e.currentTarget,
              (MAX_SIZE - w) * 0.5,
              (MAX_SIZE - h) * 0.5,
              w,
              h
            )
            const base64 = canvas.toDataURL()
            setUploadedAvater(base64)
            handleUpload({
              variables: {
                id: userProfile.id,
                profilePicture: base64,
              },
            })
          }
          img.src = url
        }
      }
    }
    return (
      <Wrapper>
        <Label>
          <input
            style={{ display: "none" }}
            onChange={handleChange}
            accept="image/*"
            type="file"
          />
          <IconButton
            style={{ padding: 0 }}
            color="primary"
            aria-label="upload picture"
            component="div"
          >
            {loading && (
              <LoadingWrapper>
                <CircularProgress size={18} />
              </LoadingWrapper>
            )}
            <Avatar src={uploadedAvatar || profilePicture(userProfile)} />
            <Box
              style={{
                borderRadius: "50%",
                overflow: "hidden",
                width: MAX_SIZE,
                height: MAX_SIZE,
              }}
              boxShadow={4}
            >
              <Img alt="User's avatar" />
            </Box>
          </IconButton>
        </Label>
      </Wrapper>
    )
  } else {
    return null
  }
}
