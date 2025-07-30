
interface FancyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
  }
  
  const FancyButton: React.FC<FancyButtonProps> = ({
    children,
    className = "",
    ...props
  }) => {
    return (
      <>
     
       <button
        {...props}
        className={`group relative overflow-hidden rounded-lg font-medium cursor-pointer text-white
          bg-gradient-to-r from-[#A020F0] to-[#7B68EE] transition-all duration-500
          ${className}`}
      >
        
        <span className="relative z-10 transition-colors duration-500 group-hover:text-[#01024E]">
          {children}
        </span>
        <span className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-0"></span>
      </button>
      </>
     
    );
  };
  
  export default FancyButton;
  