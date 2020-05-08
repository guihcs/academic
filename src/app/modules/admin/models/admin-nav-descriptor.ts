
export class AdminNavDescriptor {
  static descriptor = [
    {type: 'header', label: 'Insert'},
    {type: 'list-item', icon: 'person_add', label: 'Insert Coordinator', link: ['insert', 'coordinator']},
    {type: 'divider'},
    {type: 'header', label: 'View'},
    {type: 'list-item', icon: 'assignment_ind', label: 'View Users', link: ['view', 'user']},
    {type: 'divider'},
    {type: 'header', label: 'Courses'},
    {type: 'list-item', icon: 'library_add', label: 'Create Course', link: ['insert', 'course']},
    {type: 'list-item', icon: 'library_books', label: 'View Courses', link: ['view', 'course']},
    {type: 'divider'},
    {type: 'header', label: 'Exam'},
    {type: 'list-item', icon: 'event', label: 'Update Exam', link: ['details', 'exam']},
  ];
}
