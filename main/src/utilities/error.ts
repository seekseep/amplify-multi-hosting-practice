export function getErrorMessage (error: any) {
  if (typeof error?.message == 'string') return error?.message

  if (Array.isArray(error.errors)) {
    return error.errors
            .map((error: any) => error?.message)
            .filter((message: any) => typeof message == 'string')
            .join('. ')
  }

  return 'Unknown error'
}
