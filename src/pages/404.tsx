export default function Custom404() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1>404 - Page Not Found</h1>
      <p>
        <a href="/" style={{ color: '#0070f3', textDecoration: 'underline' }}>Go back home</a>
      </p>
    </div>
  );
}
