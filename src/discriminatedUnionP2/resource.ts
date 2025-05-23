type Undefined = {
  kind: 'undefined';
}

type Defined<T> = {
  kind: 'defined';
  value: T;
}

type Loading = {
  kind: 'loading';
}

type ErrorResource = {
  kind: 'error';
  error: Error;
}

export type Resource<T> = Undefined | Defined<T> | Loading | ErrorResource;