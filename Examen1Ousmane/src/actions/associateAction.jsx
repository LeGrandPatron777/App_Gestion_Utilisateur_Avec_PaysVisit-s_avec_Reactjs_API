export const associateCountryToUser = (userNom, countryName) => {
  return {
    type: "ASSOCIATE_COUNTRY_TO_USER",
    payload: {
      userNom,
      countryName,
    },
  };
};
