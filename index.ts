type Status = 'k prodeji' | 'k pronájmu';

interface Estate {
  name: string;
  location: string;
  price: number;
  area: number;
  status: Status;
}

interface Charakteristic {
  disposition: string;
  floor: number;
}

interface House extends Estate, Charakteristic {
  garage: boolean;
  pool: boolean;
  garden: boolean;
}

interface Apartment extends Estate, Charakteristic {
  elevator: boolean;
  balcony: boolean;
}

interface Energy {
  water: boolean;
  electricity: boolean;
  gas: boolean;
}

type Purpose = 'komerční' | 'obytný';

interface Land extends Estate, Energy {
  purpose: Purpose;
}

interface Garage extends Estate, Energy {
  capacity: number;
}

const land: Land = {
  name: 'Prodej stavebního pozemku 112 m²',
  location: 'Praha 10 - Hostivař',
  price: 767200,
  area: 112,
  status: 'k prodeji',
  purpose: 'komerční',
  water: false,
  electricity: false,
  gas: false,
}

console.log(land);