import React from "react";

export const AvatarNew = ({ isNameEmpty, name }) => {
  return (
    <div className="size-20 bg-customGreen flex items-center justify-center rounded-full text-4xl font-semibold">
      {isNameEmpty ? <i className={`bx bx-user`}></i> : name.charAt(0)}
    </div>
  );
};
