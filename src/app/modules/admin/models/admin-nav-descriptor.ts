import {UserType} from '../../../global-models/UserType';

export class AdminNavDescriptor {
  static descriptor = [
    {type: 'header', label: 'Insert'},
    {type: 'list-item', icon: 'person_add', label: 'Insert Coordinator', link: ['insert', UserType.COORDINATOR]},
    {type: 'divider'},
    {type: 'header', label: 'View'},
    {type: 'list-item', icon: 'assignment_ind', label: 'View Users', link: ['user', 'view']},
    {type: 'divider'},
    {type: 'header', label: 'Courses'},
    {type: 'list-item', icon: '', label: 'Create Course', link: ['createCourse']},
    {type: 'list-item', icon: '', label: 'View Courses', link: ['viewCourses']},
    {type: 'divider'},
    {type: 'header', label: 'Exam'},
    {type: 'list-item', icon: 'assignment', label: 'Update Exam', link: 'examForm'},
  ];
}
