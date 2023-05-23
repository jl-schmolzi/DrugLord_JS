enum Drug {
  COCAINE = "Cocaine",
  CRACK = "Crack",
  HEROIN = "Heroin",
  ACID = "Acid",
  CRYSTAL = "Crystal",
  GRASS = "Grass",
  SPEED = "Speed",
  LUDES = "Ludes",
}

function getAll(): Drug[] {
  return [
    Drug.COCAINE,
    Drug.CRACK,
    Drug.HEROIN,
    Drug.ACID,
    Drug.CRYSTAL,
    Drug.GRASS,
    Drug.SPEED,
    Drug.LUDES
  ];
}

function drugFromId(id: number): Drug {
  switch (id) {
    case 0:
      return Drug.COCAINE;
      break;
    case 1:
      return Drug.CRACK;
      break;
    case 2:
      return Drug.HEROIN;
      break;
    case 3:
      return Drug.ACID;
      break;
    case 4:
      return Drug.CRYSTAL;
      break;
    case 5:
      return Drug.GRASS;
      break;
    case 6:
      return Drug.SPEED;
      break;
    case 7:
      return Drug.LUDES;
      break;
    default:
      return Drug.SPEED;
      break;
  }
}

function getDrugId(drug: Drug): number {
  switch (drug) {
    case Drug.COCAINE:
      return 0;
      break;
    case Drug.CRACK:
      return 1;
      break;
    case Drug.HEROIN:
      return 2;
      break;
    case Drug.ACID:
      return 3;
      break;
    case Drug.CRYSTAL:
      return 4;
      break;
    case Drug.GRASS:
      return 5;
      break;
    case Drug.SPEED:
      return 6;
      break;
    case Drug.LUDES:
      return 7;
      break;
    default:
      return 0;
      break;
  }
}

export default Drug;
export { getDrugId, drugFromId ,getAll};
