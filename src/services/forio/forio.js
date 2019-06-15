import { FORIO_API_URL, MODEL_NAME } from '../../constants/appConfig'
import { saveOnLocalStorage, loadLocalStorageValue, localStorageKeys } from '../localstorage'

const createNewRun = async () => {
  try {
    const response = await fetch(FORIO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-AutoRestore': true,
      },
      body: JSON.stringify({
        model: MODEL_NAME,
      }),
    })
    const jsonResponse = await response.json()
    const { id } = jsonResponse
    saveOnLocalStorage(localStorageKeys.RUN_ID, id)
    return jsonResponse
  } catch (error) {
    console.error(error)
  }
}

const updateVariables = async variables => {
  try {
    const runId = loadLocalStorageValue(localStorageKeys.RUN_ID)
    if (!runId) {
      console.log('There is not run')
      return []
    }
    const response = await fetch(`${FORIO_API_URL}/${runId}/variables`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'X-AutoRestore': true,
      },
      body: JSON.stringify(variables),
    })
    const jsonResponse = await response.json()
    return jsonResponse
  } catch (error) {
    console.error(error)
  }
}

const getVariablesByRunId = async variables => {
  try {
    const runId = loadLocalStorageValue(localStorageKeys.RUN_ID)
    if (!runId) {
      console.log('There is not run')
      return []
    }
    const response = await fetch(`${FORIO_API_URL}/${runId}?include=${variables.join()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-AutoRestore': true,
      },
      body: JSON.stringify(variables),
    })
    const jsonResponse = await response.json()
    return jsonResponse
  } catch (error) {
    console.log(error)
  }
}

export { createNewRun, updateVariables, getVariablesByRunId }
