import {
  GET_TECHS,
  ADD_TECH,
  DELETE_TECH,
  TECHS_ERROR,
  SET_LOADING
} from "./types"

export const getTechs = () => async (dispatch) =>  {
  try {
    const res = await fetch('/techs')
    const data = await res.json()

    dispatch({
      type: GET_TECHS,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.message.statusText
    })
  }
}

export const addTech = (tech) => async (dispatch) =>  {
  try {
    const res = await fetch('/techs', {
      method: 'POST',
      body: JSON.stringify(tech),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()

    dispatch({
      type: ADD_TECH,
      payload: data
    })
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.message.statusText
    })
  }
}

export const deleteTech = (id) => async (dispatch) =>  {
  try {
    const res = await fetch(`/techs/${id}`, {
      method: 'DELETE',
    })
    await res.json()

    dispatch({
      type: DELETE_TECH,
      payload: id
    })
  } catch (err) {
    dispatch({
      type: TECHS_ERROR,
      payload: err.message.statusText
    })
  }
}

// set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}