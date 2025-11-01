'use client';

interface StackCardItemProps {
  children: React.ReactNode;
  className?: string;
}

const StackCardItem = ({ children, className = '' }: StackCardItemProps) => {
  return (
    <div className={`transition-all duration-300 ease-out ${className}`}>
      {children}
    </div>
  );
};

export default StackCardItem;

