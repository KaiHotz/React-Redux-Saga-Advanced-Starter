export function createActionTypes (base, actions = []) {
  return actions.reduce((acc, type) => {
    acc[type] = `${base}_${type}`
    return acc
  }, {})
}

export function createAction (type, data = {}) {
  return {type, payload: data}
}

export const errorMessage = (error, format) => {
  if (!error) {
    return ''
  }

  let code = error.errorCode
  if (!code) {
    code = error.response && error.response.status === 401
      ? 'Unauthorized'
      : 'InternalServerError'
  }

  return format({id: `error.${code}`})
}
