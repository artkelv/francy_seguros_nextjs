import Image from "next/image";
import iconCheckedPng from "@/public/icons/verifica.png";

export default function IconCheck() {
  return (
    <div>
      <Image src={iconCheckedPng} alt="Coberto pelo plano" width="20"/>
    </div>
  )
}
