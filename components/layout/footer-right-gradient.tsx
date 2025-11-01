import clsx from 'clsx';

interface FooterRightGradientProps {
  className?: string;
}

const FooterRightGradient = ({ className }: FooterRightGradientProps) => {
  return (
    <figure
      className={clsx(
        'pointer-events-none absolute top-[-17%] right-[-64%] size-[550px] rotate-[-30deg] select-none max-[376px]:right-[-83%] md:top-[-25%] md:right-[-30%] lg:right-[-19%] xl:top-[-32%] xl:right-[-9%]',
        'animate-float-reverse',
        className
      )}
    >
      <div className="size-full rounded-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20 blur-3xl animate-pulse-slow" />
    </figure>
  );
};

FooterRightGradient.displayName = 'FooterRightGradient';
export default FooterRightGradient;

