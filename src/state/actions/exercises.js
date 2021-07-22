import types from '../types/exercises'

const actions = {
  setNewExercise: (exercise) => ({ type: types.SET_NEW_EXERCISE, payload: { exercise } })
}

export default actions
