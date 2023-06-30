interface ButtonTransparent {
  text: string,
  active: boolean,
}

export function ButtonTransparent({text, active}: ButtonTransparent) {
  return (
    <button className={`px-5 py-2  rounded-full border transition-colors lg:text-xs xl:text-xs 2xl:text-base ${active ? "bg-blue-600 text-white hover:bg-blue-500" : "border-black hover:border-blue-500 hover:text-blue-500"}`}>{text}</button>
  )
}