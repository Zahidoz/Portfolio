import { userData } from "@/data/userData";

export default function ScrollSide() {
  return (
    <div className="flex-1 flex justify-center px-6 xl:px-0">
      <div className="container w-full max-w-[500px] h-full flex flex-col gap-16.5 pt-[78px]">

        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-[19px] font-[600] uppercase tracking-[2.1px] mb-[7px]">ABOUT</h2>
            <div className="w-full h-0.5 bg-[#1f4c3466]"></div>
          </div>
          <p className="text-[16px]  font-light leading-[22.4px] pr-1 tracking-[.1px]">{userData.about.description}</p>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-[19px] font-[600] uppercase tracking-[2.1px] mb-[7px]">EXPERIENCE</h2>
            <div className="w-full h-0.5 bg-[#1f4c3466]"></div>
          </div>
          {
            userData.experience.map((exp, idx) => (
              <div key={idx} className="flex flex-col gap-[9px]">
                <h3 className="text-[18px] font-[500] mt-0.5 leading-[19px] tracking-[.2px]">{exp.title}</h3>
                <h4 className="text-[16px] font-[400] tracking-[.1px]">{exp.subtitle}</h4>
                <p className="text-[16px]  font-light leading-[22.4px] pr-1 tracking-[.1px]">{exp.description}</p>
              </div>

            ))
          }
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-[19px] font-[600] uppercase tracking-[2.1px] mb-[7px]">EDUCATION</h2>
            <div className="w-full h-0.5 bg-[#1f4c3466]"></div>
          </div>
          {
            userData.education.map((edu, idx) => (
              <div key={idx} className="flex flex-col gap-[9px]">
                <h3 className="text-[18px] font-[500] mt-0.5 leading-[19px] tracking-[.2px]">{edu.title}</h3>
                <h4 className="text-[16px] font-[400] tracking-[.1px]">{edu.subtitle}</h4>
              </div>

            ))
          }
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-[19px] font-[600] uppercase tracking-[2.1px] mb-[7px]">SKILLS</h2>
            <div className="w-full h-0.5 bg-[#1f4c3466]"></div>
          </div>
          <div className="flex flex-col gap-4">
            {
              userData.skills.map((skill, idx) => (
                <div key={idx} >
                  <p className="text-[16px]  font-light leading-[22.4px] pr-1 tracking-[.1px]"><span className="font-[600]">{skill.title}</span> {skill.subtitle}</p>
                </div>

              ))
            }
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-[19px] font-[600] uppercase tracking-[2.1px] mb-[7px]">CONTACT DETAILS</h2>
            <div className="w-full h-0.5 bg-[#1f4c3466]"></div>
          </div>
          <div className="flex flex-col gap-4">
            <div >
              <p className="text-[16px]  font-light leading-[22.4px] pr-1 tracking-[.1px]"><span className="font-[600]">{userData.contactDetails.email}</span></p>
            </div>
            <div >
              <p className="text-[16px]  font-light leading-[22.4px] pr-1 tracking-[.1px]"><span className="font-[600]">{userData.contactDetails.phone}</span></p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div>
            <h2 className="text-[19px] font-[600] uppercase tracking-[2.1px] mb-[7px]">LOCATION</h2>
            <div className="w-full h-0.5 bg-[#1f4c3466]"></div>
          </div>
          <div className="flex flex-col gap-4">
            <div >
              <p className="text-[16px]  font-light leading-[22.4px] pr-1 tracking-[.1px]"><span className="font-[600]">{userData.location}</span></p>
            </div>
            <div >
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
