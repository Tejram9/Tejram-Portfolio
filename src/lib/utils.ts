import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(sectionId: string) {
  if (sectionId === 'hero') {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    return;
  }

  const element = document.getElementById(sectionId);
  if (element) {
    const navHeight = 84;
    const currentScroll = window.scrollY || window.pageYOffset || 0;
    const elementPosition = element.getBoundingClientRect().top + currentScroll;
    const offsetPosition = Math.max(0, elementPosition - navHeight);

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}

export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    throw new Error('Clipboard API unavailable');
  } catch (err) {
    try {
      const textArea = document.createElement('textarea');
      textArea.value = text;
      textArea.style.position = 'fixed';
      textArea.style.left = '-9999px';
      textArea.style.top = '0';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      const successful = document.execCommand('copy');
      document.body.removeChild(textArea);
      return successful;
    } catch (e) {
      return false;
    }
  }
}
