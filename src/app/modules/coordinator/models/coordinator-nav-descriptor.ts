import {UserProfile} from '../../../global-models/user/UserProfile';

export class CoordinatorNavDescriptor {
  static descriptor = [
    {type: 'header', label: 'Course'},
    {type: 'list-item', icon: '', label: 'View Course', link: ['details', 'course']},
    {type: 'divider'},
    {type: 'header', label: 'Insert'},
    {type: 'list-item', icon: 'person_add', label: 'Insert Professor', link: ['insert', 'professor']},
    {type: 'list-item', icon: 'person_add', label: 'Insert Student', link: ['insert', 'student']},
    {type: 'divider'},
    {type: 'header', label: 'View'},
    {type: 'list-item', icon: 'assignment_ind', label: 'View Professors', link: ['view', 'professor']},
    { type: 'list-item', icon: 'assignment_ind', label: 'View Students', link: ['view', 'student']
    },
    {type: 'divider'},
    {type: 'header', label: 'Disciplines'},
    {type: 'list-item', icon: '', label: 'Create Discipline', link: ['insert', 'subject']},
    {type: 'list-item', icon: '', label: 'View Disciplines', link: ['view', 'subject']},
    {type: 'divider'},
    {type: 'header', label: 'Class'},
    {type: 'list-item', icon: '', label: 'Create Class', link: ['insert', 'class']},
    {type: 'list-item', icon: '', label: 'View Class', link: ['view', 'class']}

  ];
}
