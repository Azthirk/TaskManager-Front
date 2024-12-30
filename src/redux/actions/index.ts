import { AppDispatch, TaskPostProps } from '../types/types';
import axiosInstance from '../utils/axiosConfig';

const apiRequest = async (
  dispatch: AppDispatch,
  requestType: string,
  apiCall: () => Promise<any>
) => {
  dispatch({ type: `${requestType}_REQUEST` });
  try {
    const response = await apiCall();
    dispatch({
      type: `${requestType}_SUCCESS`,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: `${requestType}_FAILURE`,
      payload: error instanceof Error ? error.message : 'Error',
    });
    throw error;
  }
};

export const getData = (page: number, state?: string) => async (dispatch: AppDispatch) => {
  await apiRequest(dispatch, 'FETCH_DATA', () =>
    axiosInstance.get(
      state
        ? `api/tasks?page=${page}&limit=15&status=${state}`
        : `api/tasks?page=${page}&limit=15`
    )
  );
};

export const updateItem = (id: string, body: TaskPostProps) => async (dispatch: AppDispatch) => {
  await apiRequest(dispatch, 'UPDATE_ITEM', () =>
    axiosInstance.put(`api/tasks/${id}`, body)
  );
};

export const deleteItem = (id: string) => async (dispatch: AppDispatch) => {
  await apiRequest(dispatch, 'DELETE_ITEM', () =>
    axiosInstance.delete(`api/tasks/${id}`)
  );
};

export const getItem = (id: string) => async (dispatch: AppDispatch) => {
  await apiRequest(dispatch, 'GET_ITEM', () =>
    axiosInstance.get(`api/tasks/${id}`)
  );
};

export const createItem = (body: TaskPostProps) => async (dispatch: AppDispatch) => {
  await apiRequest(dispatch, 'CREATE_ITEM', () =>
    axiosInstance.post('api/tasks', body)
  );
};
