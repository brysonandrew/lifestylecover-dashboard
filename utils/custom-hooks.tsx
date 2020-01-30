import React from 'react'

let timeoutSuccess

export function useErrorAndCalledToSeeIfSuccess(data, error, called) {
  const [isSuccess, setSuccess] = React.useState(false)

  React.useEffect(() => {
    if (data && !error && called) {
      setSuccess(true)
      timeoutSuccess = setTimeout(() => {
        setSuccess(false)
      }, 5000)
    }
    return () => clearTimeout(timeoutSuccess)
  }, [data])

  return isSuccess;
}

export function useDataToSeeIfSuccess(data) {
  const [isSuccess, setSuccess] = React.useState(false)

  React.useEffect(() => {
    if (data) {
      setSuccess(true)
    }
  }, [data])

  return isSuccess;
}

let timeoutRefetch

export function useRefetch(isSuccess, refetch) {
  let isRefetchTriggered

  React.useEffect(() => {
    if (isSuccess) {
      timeoutRefetch = setTimeout(() => {
        refetch()
        isRefetchTriggered = true
      }, 1000)
    }
    isRefetchTriggered = false
    return () => clearTimeout(timeoutRefetch)
  }, [isSuccess])

  return isRefetchTriggered
}
