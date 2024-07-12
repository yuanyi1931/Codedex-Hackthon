const Heading = ({ name }: { name: string }) => {
  return (
    <h1 className="mb-6 text-3xl font-bold">
      Our <span className="text-primary">{name}</span>
      <hr className="w-16 border-2 border-primary mt-2 rounded-full" />
    </h1>
  );
};

export default Heading;
