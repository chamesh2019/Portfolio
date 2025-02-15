export function NavBarElement({
  name,
  isActive,
}: {
  name: string;
  isActive?: boolean;
}) {
  const baseClasses = "w-32 pr-4 text-xl cursor-pointer block";
  const activeClasses = isActive
    ? " text-white"
    : " text-gray-500 hover:text-white";
    
  return <div className={baseClasses + activeClasses}>{name}</div>;
}