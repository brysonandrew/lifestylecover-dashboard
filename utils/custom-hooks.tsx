import React from 'react'

export function useDataToSeeIfSuccess(data) {
  const [isSuccess, setSuccess] = React.useState(false)

  React.useEffect(() => {
    if (data) {
      setSuccess(true)
    }
  }, [data])

  return isSuccess;
}

let timeout

export function useRefetch(isSuccess, refetch) {
  let isRefetchTriggered

  React.useEffect(() => {
    if (isSuccess) {
      timeout = setTimeout(() => {
        refetch()
        isRefetchTriggered = true
      }, 1000)
    }
    isRefetchTriggered = false
    return () => clearTimeout(timeout)
  }, [isSuccess])

  return isRefetchTriggered
}
