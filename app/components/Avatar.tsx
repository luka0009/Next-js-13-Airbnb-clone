'use client';
import Image from "next/image";

type Props = {}

const Avatar = (props: Props) => {
  return (
    <div>
        <Image className="rounded-full" 
        height={30}
        width={30}
        alt="avatar"
        src='https://www.w3schools.com/howto/img_avatar.png'
        />
    </div>
  )
}

export default Avatar