type SuccessfullAction<T> = {
  kind: 'successfull';
  value: T;
}

type ErrorAction = {
  kind: 'error';
  error: Error;
}

export type ActionResult<T> = SuccessfullAction<T> | ErrorAction;

export const isSuccessfullAction = <T>(action: ActionResult<T>): action is SuccessfullAction<T> => 
  action.kind === 'successfull'

export const isErrorAction = <T>(action: ActionResult<T>): action is ErrorAction => 
  action.kind === 'error'

export const makeSuccessfullActionResult = <T>(value: T): SuccessfullAction<T> => ({
  kind: 'successfull',
  value,
})

export const makeErrorActionResult = (error: Error): ErrorAction => ({
  kind: 'error',
  error,
})