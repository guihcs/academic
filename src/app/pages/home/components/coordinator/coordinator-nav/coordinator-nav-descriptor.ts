import {UserType} from '../../../models/UserType';

export class CoordinatorNavDescriptor {
  static descriptor = [
    {type: 'header', label: 'Insert'},
    {type: 'list-item', icon: 'person_add', label: 'Insert Professor', link: ['insert', UserType.PROFESSOR]},
    {type: 'list-item', icon: 'person_add', label: 'Insert Student', link: ['insert', UserType.STUDENT]},
    {type: 'divider'},
    {type: 'header', label: 'View'},
    {type: 'list-item', icon: 'assignment_ind', label: 'View Professors', link: ['view', UserType.PROFESSOR]},
    {type: 'list-item', icon: 'assignment_ind', label: 'View Students', link: ['view', UserType.STUDENT]}
  ];
}
