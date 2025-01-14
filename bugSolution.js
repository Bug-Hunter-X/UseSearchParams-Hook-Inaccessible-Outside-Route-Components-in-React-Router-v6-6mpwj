The solution is to lift the component using the `useSearchParams` hook higher in the component tree, making it a child of a component that's within the routing hierarchy. This gives the hook the necessary context. 

```javascript
//Corrected Component
function ParentComponent(){
    return(
        <Routes>
            <Route path="/" element={<MyComponent/>}/>
        </Routes>
    )
}

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
```

Alternatively, you can pass search params as props down the tree from a route component. However, directly including the component within a route ensures clean and predictable behavior.