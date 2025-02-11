```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct logic: useEffect runs only once on mount
    // because the empty dependency array [] is used. 
  }, []);

  return <div>Count: {count}</div>;
}
```