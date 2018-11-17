import types from '../types'

export const getFile = (fileId) => ({
  type: types.COMMON.GET_FILE,
  payload: {
    fileId
  }
})

export const createFile = (data) => ({
  type: types.COMMON.CREATE_FILE,
  payload: {
      ...data
  }
})

export const updateFile = (payload) => ({
  type: types.COMMON.UPDATE_FILE,
  payload
})

export const getFiles = (query) => ({
  type: types.COMMON.GET_FILES,
  payload: {query}
})

export const delMiddleWareFileData = () => ({ // this is not used yet, and may be remove.
  type: types.COMMON.DEL_MIDDLEWARE_FILE_DATA,
  payload: {}
})

export const resetTemporaryFile = () => ({
  type: types.COMMON.RESET_TEMPORARY_FILE,
  payload:{}
})

const FileActions = {
  getFile,
  createFile,
  updateFile,
  delMiddleWareFileData,
  resetTemporaryFile
}

export default FileActions