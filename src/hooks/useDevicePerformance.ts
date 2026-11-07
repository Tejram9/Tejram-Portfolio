import { useState, useEffect } from 'react';

export interface DeviceInfo {
  isMobile: boolean;
  prefersReducedMotion: boolean;
  supportsWebGL: boolean;
  isLowPower: boolean;
}

export function useDevicePerformance(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>(() => {
    const isClient = typeof window !== 'undefined';
    const isMobileCheck = isClient ? window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent) : false;
    let webgl = true;
    if (isClient) {
      try {
        const canvas = document.createElement('canvas');
        webgl = Boolean(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
      } catch (e) {
        webgl = false;
      }
    }
    return {
      isMobile: isMobileCheck,
      prefersReducedMotion: false,
      supportsWebGL: webgl,
      isLowPower: isMobileCheck,
    };
  });

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    setDeviceInfo(prev => ({
      ...prev,
      prefersReducedMotion: motionQuery.matches,
    }));

    const handleResize = () => {
      setDeviceInfo(prev => ({
        ...prev,
        isMobile: window.innerWidth < 768,
        isLowPower: window.innerWidth < 768,
      }));
    };

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setDeviceInfo(prev => ({
        ...prev,
        prefersReducedMotion: e.matches,
      }));
    };

    window.addEventListener('resize', handleResize);
    motionQuery.addEventListener('change', handleMotionChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      motionQuery.removeEventListener('change', handleMotionChange);
    };
  }, []);

  return deviceInfo;
}
