import Image from "next/image";

const Skill = ({ name, image }: any) => {
  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div
        title={name}
        className={
          "h-20 w-20 md:h-24 md:w-24 rounded-full bg-gray-100 dark:bg-grey-800 flex items-center justify-center"
        }
      >
        <Image
          alt="skill"
          width={100}
          height={100}
          className={`h-12 w-12 md:h-14 md:w-14 object-contain inset-0 mix-blend-color-burn`}
          src={image}
        />
      </div>
      <p className="text-sm md:text-base">{name}</p>
    </div>
  );
};

export default Skill;
