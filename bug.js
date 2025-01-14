In React Router Dom v6, an uncommon error arises when using the `useSearchParams` hook within a component that's not directly rendered by a route.  If you try to access or update search parameters in a component nested several levels deep, and that component is not itself a child of a route component (e.g., `Route`, `Routes`), `useSearchParams` will not work as expected.  It might return an empty array or throw an error, depending on the context.  The hook relies on the router context, which isn't available outside the route hierarchy.

```javascript
// Buggy Component
function MyComponent() {
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = () => {
    setSearchParams({ filter: 'value' });
  };

  return (
    <div>
      <button onClick={handleSubmit}>Set Search Param</button>
    </div>
  );
}

// Usage in unrelated component
function ParentComponent(){
    return(
        <div>
            <MyComponent/>
        </div>
    )
}
```