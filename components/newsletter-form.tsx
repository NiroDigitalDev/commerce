'use client';

import { useState } from 'react';
import { Input } from 'components/ui/input';
import { Button } from 'components/ui/button';
import { cn } from '@/lib/utils';

interface NewsletterFormProps {
  btnClass?: string;
  ctaBtnText?: string;
  inputFieldClass?: string;
}

const NewsletterForm = ({
  btnClass,
  ctaBtnText = 'Subscribe',
  inputFieldClass
}: NewsletterFormProps) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className={cn('flex-1', inputFieldClass)}
      />
      <Button
        type="submit"
        size="lg"
        className={cn('w-full sm:w-auto', btnClass)}
      >
        {ctaBtnText}
      </Button>
    </form>
  );
};

export default NewsletterForm;

