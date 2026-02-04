import { userData } from "@/data/userData";

export default function StickySide() {
  return (
    <div className="xl:flex-1 w-full py-16  bg-primary text-secondary flex flex-col gap-6 md:gap-11 items-center justify-center ">
      <h1 className="text-5xl md:text-6xl lg:text-7xl text-center px-5">{userData.fullName}</h1>
      <div className="w-[266px] h-[405px] lg:w-[295px] lg:h-[450px]">
        <img className="w-full h-full object-cover" src={userData.profilePicture} alt="" />
      </div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl text-center leading-tight tracking-wide" dangerouslySetInnerHTML={{ __html: userData.speciality }} />
    </div>
  )
}
