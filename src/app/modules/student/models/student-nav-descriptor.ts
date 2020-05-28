

export class StudentNavDescriptor {

  static descriptor = [
    {type: 'header', label: 'Grades'},
    {type: 'list-item', icon: '', label: 'Grades', link: ['grades']},
    {type: 'header', label: 'Uploads'},
    {type: 'list-item', icon: 'arrow_upwards', label: 'Upload Files', link: ['upload']}
  ];
}
