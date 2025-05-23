## checkNever

### Description

Function to check the parameter for "never" type

### How it to use

```
  switch(value) {
    case 'a': return 'smth_a';
    case 'b': return 'smth_b';
    default: checkNever(value);
  }
```

In case the function is reachable, the typescript will throw an error: "Argument of type '{smth}' is not assignable to parameter of type 'never'.ts(2345)".

Example with extension of react component. Let's imagine we have a weird react component like this:

```
type CrazyComponentProps = {
  variant: "label" | "input";
  children: React.ReactNode;
};
const CrazyComponent: React.FC<CrazyComponentProps> = ({
  variant,
  children,
}) => {
  switch (variant) {
    case "label":
      return <div>{children}</div>;
    case "input":
      return <input>{children}</input>;
    default:
      checkNever(variant);
  }
};
```

And we decide to extend variations of component, but we forget to extend the implementation of it (only type of variant is changed):

```
type CrazyComponentProps = {
  variant: "label" | "input" | "select";
  children: React.ReactNode;
};
```

Now, typescript throws an error: "Argument of type '"select"' is not assignable to a parameter of type 'never'.ts(2345)". Perfect! ). Let's fix it:

```
const CrazyComponent: React.FC<CrazyComponentProps> = ({
  variant,
  children,
}) => {
  switch (variant) {
    case "label":
      return <div>{children}</div>;
    case "input":
      return <input>{children}</input>;
    case "select":
      return <select>{children}</select>;
    default:
      checkNever(variant);
  }
};
```

No errors, no forgotten cases. Seem is "never" a useful ))
