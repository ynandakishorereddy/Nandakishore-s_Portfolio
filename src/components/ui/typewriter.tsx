'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterProps {
  words: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function Typewriter({
  words,
  className,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 2000,
}: TypewriterProps) {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);

  const handleTyping = useCallback(() => {
    const i = loopNum % words.length;
    const fullText = words[i];

    setText(
      isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1)
    );

    setTypingDelay(isDeleting ? deletingSpeed : typingSpeed);

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), pauseDuration);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  }, [text, isDeleting, loopNum, words, typingSpeed, deletingSpeed, pauseDuration]);

  useEffect(() => {
    const timer = setTimeout(handleTyping, typingDelay);
    return () => clearTimeout(timer);
  }, [handleTyping, typingDelay]);

  return (
    <span className={cn("inline-flex items-center", className)}>
      <span>{text}</span>
      <span className="w-[2px] h-[1em] bg-current ml-1 animate-pulse-slow"></span>
    </span>
  );
}
