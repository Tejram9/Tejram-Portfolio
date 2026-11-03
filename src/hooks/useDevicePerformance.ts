import { useState, useEffect } from 'react';

export interface DeviceInfo {
  isMobile: boolean;
  prefersReducedMotion: boolean;
  supportsWebGL: boolean;
  isLowPower: boolean;
}

export function useDevicePerformance(): DeviceInfo {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    isMobile: false,
    prefersReducedMotion: false,
    supportsWebGL: true,
    isLowPower: false,
  });

  useEffect(() => {
    const isMobileCheck = window.innerWidth < 768 || /Mobi|Android/i.test(navigator.userAgent);
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // Test WebGL availability
    let webgl = true;
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      webgl = Boolean(gl);
    } catch (e) {
      webgl = false;
    }

    setDeviceInfo({
      isMobile: isMobileCheck,
      prefersReducedMotion: motionQuery.matches,
      supportsWebGL: webgl,
      isLowPower: isMobileCheck,
    });

    const handleResize = () => {
      setDeviceInfo(prev => ({
        ...prev,
        isMobile: window.innerWidth < 768,
      }));
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return deviceInfo;
}
