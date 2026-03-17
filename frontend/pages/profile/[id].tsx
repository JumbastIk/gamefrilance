import React from 'react';
import { useRouter } from 'next/router';

export default function Profile() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <h1>Профиль пользователя #{id}</h1>
    </div>
  );
}