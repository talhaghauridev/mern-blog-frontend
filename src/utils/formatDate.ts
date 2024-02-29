

const formatDate = (value: string) => {
  const createAtData = new Date(value);
  const options:Intl.DateTimeFormatOptions = { month: "long", day: "numeric", year: "numeric" };
  return createAtData.toLocaleDateString("en-US",options);
};

export default formatDate;
