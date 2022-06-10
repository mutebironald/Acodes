import axios from 'axios';
import { URL } from '../constants';
import { ResponseProps } from '../helpers';

const getData = async(zipCode: string) => {
  let response: ResponseProps = await axios.get(URL + zipCode)
  return response
}

export default getData;


