import { fromKebabCase } from "."

export enum ESendingStatus {
  None = "None",
  Sending = "Sending",
  Success = "Success",
  Error = "Error",
}

const SEND_EMAIL_URL = `https://cms.baycom.thedevguys.co.nz/wp-json/email/v2/send-email`

export async function sendEmail(
  subject: string,
  message: string,
  onStatusChange: (status: ESendingStatus) => void
) {
  onStatusChange(ESendingStatus.Sending)
  try {
    const response = await fetch(SEND_EMAIL_URL, {
      method: "POST",
      body: JSON.stringify({ subject, message }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const json = await response.json()
    console.log("Success:", JSON.stringify(json))
    onStatusChange(ESendingStatus.Success)
  } catch (error) {
    console.error("Error:", error)
    onStatusChange(ESendingStatus.Error)
  }
  setTimeout(() => onStatusChange(ESendingStatus.None), 2000)
}

export function formToText(form: Record<string, string>) {
  return Object.keys(form).reduce((a: string, key: string) => {
    a += `${fromKebabCase(key)}: ${form[key]} <br>`
    return a
  }, "")
}
