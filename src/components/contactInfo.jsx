import React from "react";

export const ContactInfo = ({ name, phone, handleDeleteData }) => {
  return (
    <div className="flex items-center justify-between gap-3 bg-slate-300 mx-6 px-4 py-2 rounded-lg text-customBlack">
      <div className="size-8 bg-customGreen flex items-center justify-center rounded-full text-lg font-semibold md:size-12 md:text-xl">
        {name.charAt(0)}
      </div>
      <div className="flex-grow">
        <h1>{name}</h1>
        <p>{phone}</p>
      </div>
      <div className="flex gap-2">
        <Icon label="bxs-message" background="bg-customBlue" />
        <Icon label="bxs-phone" background="bg-customGreen" />
        <Icon
          label="bx-minus"
          background="bg-customOrange"
          onClick={handleDeleteData}
        />
      </div>
    </div>
  );
};

const Icon = ({ label, background, onClick }) => {
  return (
    <div
      className={`size-8 text-xl flex items-center justify-center rounded-full ${background} text-white cursor-pointer transform transition-transform active:scale-90 md:size-12 md:text-xl`}
      onClick={onClick}
    >
      <i className={`bx ${label} `}></i>
    </div>
  );
};
