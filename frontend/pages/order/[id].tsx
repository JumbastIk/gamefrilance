import React from 'react';
import { useRouter } from 'next/router';

export default function OrderDetail() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Заказ #{id}</h1>
    </div>
  );
}