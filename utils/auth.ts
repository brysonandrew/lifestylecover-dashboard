import { ROOT_URL } from "../data"

export const postLogin = async (
  username: string,
  password: string,
  onSubmitting: (isSubmitting: boolean) => void
) => {
  onSubmitting(true)
  const url = `${ROOT_URL}/wp-json/jwt-auth/v1/token/`
  let result

  try {
    const response = await fetch(
      url,
      {
        method: "POST",
        body: JSON.stringify({ username, password }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    const json = await response.json()
    console.log("Success:", JSON.stringify(json))
    result = parseFloat(JSON.stringify(json))
    onSubmitting(false)
  } catch (error) {
    console.error("Error:", error)
    result = null
    onSubmitting(false)
  }
  console.log(result)
}
