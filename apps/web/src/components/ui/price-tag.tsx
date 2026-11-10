import { cn } from '@/lib/utils';

interface PriceTagProps {
  amount: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

function formatIndianCurrency(amount: number): string {
  const isNegative = amount < 0;
  const absAmount = Math.abs(amount);

  const lastThree = absAmount.toString().slice(-3);
  const rest = absAmount.toString().slice(0, -3);
  const formatted = rest ? `${Number(rest).toLocaleString('en-IN')},${lastThree}` : lastThree;

  return `${isNegative ? '-' : ''}\u20B9${formatted}`;
}

const sizeClasses = {
  sm: 'text-sm',
  md: 'text-lg',
  lg: 'text-2xl',
};

export function PriceTag({ amount, className, size = 'md', showLabel = false }: PriceTagProps) {
  return (
    <span className={cn('font-bold text-neutral-900', sizeClasses[size], className)}>
      {showLabel && <span className="text-xs font-normal text-neutral-500 mr-1">Price:</span>}
      {formatIndianCurrency(amount)}
    </span>
  );
}

export { formatIndianCurrency };
