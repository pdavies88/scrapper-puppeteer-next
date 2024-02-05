'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const DynamicData = () => {
  const router = useRouter();
  // Force refresh the page every 15 seconds for new dynamic content
  useEffect(() => {
    const interval = setInterval(() => {
      router.refresh();
    }, 15000);
    return () => clearInterval(interval);
  }, [router]);
  return null;
};
export default DynamicData;
