import {UserProfile} from '../../../global-models/user/UserProfile';


export function userViewFilter(data, filter) {
  let serializedFields: string = data.name + UserProfile[data.profile] + data.course?.name;
  return serializedFields.toLocaleLowerCase().indexOf(filter) >= 0;
}
