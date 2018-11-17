const base = (state, action) => {
}

const success = (state, action) => {
  const {data} = action.payload
  const indexedEducation = {}
  data.forEach(education => {
    const prevEducation = state.list[education.id]
    indexedEducation[education.id] = {...prevEducation, ...education, error: null, isLoading: false}
  })
  return {
    ...state,
    list: {
      ...state.list,
      ...indexedEducation,
    }
  }
}

const error = (state, action) => {
}

export default {
  base,
  success,
  error,
}