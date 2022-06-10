interface PlacesObject {
  placeName: string;
  longitude: string;
  state: string;
}

export interface ResponseProps {
  data:{
    postCode: string;
    country: string;
    places: PlacesObject[]
  }
}
