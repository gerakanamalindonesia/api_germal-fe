export default function ServiceCompanyDesktop({ service }) {
  return (
    <div className="px-5  flex items-center justify-center lg:gap-3 xl:gap-10 py-5 border-b border-slate-200">
      {service.map((item, index) => (
        <div
          key={index}
          className="flex items-center lg:gap-1 xl:gap-2 cursor-default w-4/12"
        >
          <i className={`bx ${item.icon} text-4xl text-yellow`}></i>

          <div>
            <h6 className="font-bold text-sm text-grayBlack">{item.name}</h6>
            <p className="text-xs font-normal text-gray-500">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
