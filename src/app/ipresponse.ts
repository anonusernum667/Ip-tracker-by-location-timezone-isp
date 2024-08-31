export interface Ipresponse {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;         // Added missing city
    lat: number;          // Added missing latitude
    lng: number;          // Added missing longitude
    postalCode: string;   // Added missing postalCode
    timezone: string;
    geonameId: number;    // Added missing geonameId
  };
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
}
