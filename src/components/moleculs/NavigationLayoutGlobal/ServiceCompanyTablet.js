export default function ServiceCompanyTablet({ service }) {
  return (
    <div className="mt-6 grid grid-cols-2 px-5">
      {service.map((item, index) => (
        <div
          key={index}
          className="border-[1.2px] border-slate-300 flex items-center p-3 md:p-4 gap-2"
        >
          <i className={`bx ${item.icon} text-yellow text-4xl md:text-5xl`}></i>

          <div>
            <h6 className="text-base font-semibold text-grayBlack">
              {item.name}
            </h6>

            <p className="text-gray-600 text-xs md:text-sm">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
