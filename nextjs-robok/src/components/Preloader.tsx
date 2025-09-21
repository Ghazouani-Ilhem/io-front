'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div id="preloader">
      <div className="robok-loader-inner">
        <div className="robok-loader">
          <span className="robok-loader-item"></span>
          <span className="robok-loader-item"></span>
          <span className="robok-loader-item"></span>
          <span className="robok-loader-item"></span>
          <span className="robok-loader-item"></span>
          <span className="robok-loader-item"></span>
          <span className="robok-loader-item"></span>
          <span className="robok-loader-item"></span>
        </div>
      </div>
    </div>
  );
}