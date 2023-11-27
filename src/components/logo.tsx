import Image from "next/image";


export default function Logo() {
  return (
    <div className="flex justify-center">
    <Image
      src="/imagens/espeto-logo.png"
      alt="Logo Espetinho"
      height={100}
      width={100}
    />
  </div>
  )
}
