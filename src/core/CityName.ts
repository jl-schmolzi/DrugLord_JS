enum CityName{
    CHICAGO = "Chicago",
    DETROIT = "Deroit",
    LAS_VEGAS = "Las Vegas",
    LOS_ANGELES = "Los Angeles",
    MIAMI = "Miami",
    NEW_YORK = "New York",
    SAN_DIEGO = "San Diego",
    WASHINGTON_D_C = "Washington D.C.",
}

function cityFromId(id: number){
    switch (id) {
        case 0:
          return CityName.CHICAGO;
          break;
        case 1:
          return CityName.DETROIT;
          break;
        case 2:
          return CityName.LAS_VEGAS;
          break;
        case 3:
          return CityName.LOS_ANGELES;
          break;
        case 4:
          return CityName.MIAMI;
          break;
        case 5:
          return CityName.NEW_YORK;
          break;
        case 6:
          return CityName.SAN_DIEGO;
          break;
        case 7:
          return CityName.WASHINGTON_D_C;
          break;
        default:
          return CityName.MIAMI;
          break;
      }
}

function allCities(): CityName[]{
    return [
        CityName.CHICAGO,
        CityName.DETROIT,
        CityName.LAS_VEGAS,
        CityName.LOS_ANGELES,
        CityName.MIAMI,
        CityName.NEW_YORK,
        CityName.SAN_DIEGO,
        CityName.WASHINGTON_D_C,
    ]
}
export default CityName;
export {cityFromId, allCities};