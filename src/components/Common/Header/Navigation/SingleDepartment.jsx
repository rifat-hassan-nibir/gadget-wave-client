/* eslint-disable react/prop-types */
import IconGroup from "../IconGroup";

const SingleDepartment = ({ IconName, departmentName }) => {
  return (
    <div className="py-2 first:pt-0 last:pb-0">
      <a className="flex items-center gap-x-3.5 rounded-lg text-sm text-gray-800">
        <IconGroup IconName={IconName} />
        {departmentName}
      </a>
    </div>
  );
};

export default SingleDepartment;
