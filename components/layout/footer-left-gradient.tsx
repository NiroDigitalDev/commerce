import clsx from 'clsx';

interface FooterLeftGradientProps {
  className?: string;
}

const FooterLeftGradient = ({ className }: FooterLeftGradientProps) => {
  return (
    <figure
      className={clsx(
        'pointer-events-none absolute bottom-[-33%] left-[-83%] size-[728px] select-none min-[2559px]:!left-[-16%] md:bottom-[-60%] md:left-[-52%] md:size-[870px] lg:left-[-38%] xl:bottom-[-77%] xl:left-[-30%] 2xl:left-[-22%]',
        'animate-float-slow',
        className
      )}
    >
      <div className="size-full rounded-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-pulse-slow" />
    </figure>
  );
};

FooterLeftGradient.displayName = 'FooterLeftGradient';
export default FooterLeftGradient;

