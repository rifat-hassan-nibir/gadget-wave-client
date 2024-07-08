/* eslint-disable react/prop-types */
const IconGroup = ({ IconName, text }) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <IconName className="size-5" />
      <p className="text-[14px] font-normal hidden text-nowrap lg:block">{text}</p>
    </div>
  );
};

export default IconGroup;
