const HeaderTitle = ({
  type = "title",
  title,
  user,
  subtitle,
}: HeaderTitleProps) => {
  return (
    <div className="flex flex-col gap-1">
      <h1 className="text-24 lg:text-30 font-semibold text-gray-900 ">
        {title}
        {type === "greeting" && (
          <span className="text-treasureMain">&nbsp;{user}</span>
        )}
      </h1>
      <p className="text-14 lg:text-16 font-normal text-gray-600">{subtitle}</p>
    </div>
  );
};

export default HeaderTitle;
