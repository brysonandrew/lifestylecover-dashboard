import { ROOT_URL } from "../data"

export const addLike = async (
  postId: number,
  onAdding: (isLoading: boolean) => void
) => {
  onAdding(true)
  const url = `${ROOT_URL}/wp-json/likes/v2/add-like/${postId}`
  let likes

  try {
    const response = await fetch(url, { method: "GET" })
    const json = await response.json()
    console.log("Success:", JSON.stringify(json))
    likes = parseFloat(JSON.stringify(json))
    onAdding(false)
  } catch (error) {
    console.error("Error:", error)
    likes = null
    onAdding(false)
  }
  return likes
}

export const removeLike = async (
  postId: number,
  onRemoving: (isLoading: boolean) => void
) => {
  onRemoving(true)
  const url = `${ROOT_URL}/wp-json/likes/v2/remove-like/${postId}`
  let likes

  try {
    const response = await fetch(url, { method: "GET" })
    const json = await response.json()
    console.log("Success:", JSON.stringify(json))
    likes = parseFloat(JSON.stringify(json))
    onRemoving(false)
  } catch (error) {
    console.error("Error:", error)
    likes = null
    onRemoving(false)
  }
  return likes
}

export const getLikes = async (
  postId: number,
  onSending: (isLoading: boolean) => void
) => {
  onSending(true)
  const url = `https://cms.baycom.thedevguys.co.nz/wp-json/likes/v2/get-likes/${postId}`
  let likes

  try {
    const response = await fetch(url, { method: "GET" })
    let text = await response.text()
    text = text.replace(/"/g, "")
    likes = text ? parseInt(text, 10) : 0
    onSending(false)
  } catch (error) {
    console.error("Error:", error)
    likes = null
    onSending(false)
  }
  return likes
}
