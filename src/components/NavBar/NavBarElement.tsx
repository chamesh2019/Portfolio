export function NavBarElement(
    {name, isActive}: {name: string, isActive?: Boolean}
    // {active}: {active: boolean}
) {
    let ac = isActive ? " text-white": " text-gray-500";
    return(
        <div className={"w-32 pr-4 text-xl cursor-pointer block" + ac}>{name}</div>
    )
}