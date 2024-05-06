import { cn } from '@lib/utlis'

interface ButtonProps {
  className?: string;
  value?: string;
}

const Button = ({
    className,
    value = "click me!",
}: ButtonProps
) => {
  return (
    <div className = {cn("text-md bg-blue-500 w-fit p-2 hover:cursor-pointer",className)}>{value}</div>
  );
};

export default Button;