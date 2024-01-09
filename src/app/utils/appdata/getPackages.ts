import { PackageData, packageData } from "../data/packages";

export const getPackageByName = (name: string): PackageData | undefined => {
  return packageData.find((pkg) => name === pkg.name);
};

export const filterPackages = (filters: any): PackageData[] => {
  const lowercaseDestination = filters.destination.toLowerCase();
  const lowercaseTripGrade = filters.tripGrade.toLowerCase();

  if (!lowercaseDestination && !lowercaseTripGrade) {
    return packageData; // Return all packages if no filters are applied
  }

  return packageData.filter((pkg) => {
    return (
      pkg.destination.toLowerCase().includes(lowercaseDestination) &&
      pkg.tripGrade.toLowerCase().includes(lowercaseTripGrade)
    );
  });
};
