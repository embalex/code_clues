## Discriminated union

### Description

It is way to return result from function

### How it to use

```
  const div = (a: number, b: number): ActionResult<number> => {...}
```


Let's we have a simple function:
```
const div = (a: number, b: number): number => a / b;
```

If we call that function with b equals to 0 the Infinity will be returned. It's a number type, right, but absolutely not what we expected.


How it to use:
```
  try {
    const result = div(3/0);
  } catch (e) {
    console.log(e);
  }
```
Just imagine, some part of code can contains a lot of functions like div. In the end all of code is "container" for try/catch blocks


Ok, let's try to find another way. Function can return union of structures:
```
type SuccessfullAction<T> = {
  kind: 'successfull';
  value: T;
}

type ErrorAction = {
  kind: 'error';
  error: Error;
}

export type ActionResult<T> = SuccessfullAction<T> | ErrorAction;
```

And rewrite div function:
```
const div = (a: number, b: number): ActionResult<number> => {
  if (b === 0) {
    return makeErrorActionResult(new Error("Can't divide by 0"))
  }

  return {
    kind: 'successfull' as const,
    value: a / b,
  }
};
```





No errors, no forgotten cases. Seem is "never" a useful ))
