import {UserType} from '../../../global-models/UserType';

export class CoordinatorNavDescriptor {
  static descriptor = [
    {type: 'header', label: 'Insert'},
    {type: 'list-item', icon: 'person_add', label: 'Insert Professor', link: ['insert', 'professor']},
    {type: 'list-item', icon: 'person_add', label: 'Insert Student', link: ['insert', 'student']},
    {type: 'divider'},
    {type: 'header', label: 'View'},
    {type: 'list-item', icon: 'assignment_ind', label: 'View Professors', link: ['view', 'professor']},
    { type: 'list-item', icon: 'assignment_ind', label: 'View Students', link: ['view', 'student']
    },
    {type: 'divider'},
    {type: 'header', label: 'Subject'},
    {type: 'list-item', icon: '', label: 'Create Subject', link: ['insert', 'subject']},
    {type: 'list-item', icon: '', label: 'View Subjects', link: ['view', 'subject']},
    {type: 'divider'},
    {type: 'header', label: 'Class'},
    {type: 'list-item', icon: '', label: 'Create Class', link: ['insert', 'class']},
    {type: 'list-item', icon: '', label: 'View Class', link: ['view', 'class']}

  ];
}
