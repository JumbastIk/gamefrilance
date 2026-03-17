import { useEffect, useState } from 'react';

interface Order {
  id: number;
  title: string;
  game: string;
  price: number;
  description: string;
}

export default function Home() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://168.222.192.157:8000/api/orders')
      .then(res => res.json())
      .then(data => {
        setOrders(data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Ошибка загрузки:', err);
        setLoading(false);
      });
  }, []);

  return (
    <main style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ 
        color: '#0070f3',
        textAlign: 'center',
        marginBottom: '40px'
      }}>
        GameFrilance
      </h1>

      {loading ? (
        <p style={{ textAlign: 'center' }}>Загрузка...</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {orders.map(order => (
            <div key={order.id} style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '20px',
              background: 'white',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              <h3>{order.title}</h3>
              <p style={{ color: '#666' }}>{order.description}</p>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '15px'
              }}>
                <span style={{
                  background: '#e1f5fe',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  fontSize: '14px'
                }}>
                  {order.game}
                </span>
                <span style={{
                  fontSize: '20px',
                  fontWeight: 'bold',
                  color: '#4caf50'
                }}>
                  {order.price} ₽
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}