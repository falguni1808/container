export default function Custom500() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1>500 - Server-side error occurred</h1>
      <p>
        <a href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>Go back home</a>
      </p>
    </div>
  );
}
