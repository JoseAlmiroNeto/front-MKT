interface ButtonTransparent {
  text: string,
  active: boolean,
}

export function ButtonTransparent({text, active}: ButtonTransparent) {
  return (
    <button className={`px-5 py-2 text-base rounded-full border transition-colors ${active ? "bg-blue-600 text-white" : "border-black hover:border-blue-500 hover:text-blue-500"}`}>{text}</button>
  )
}