
export class ProfessorNavDescriptor {
  static descriptor = [
    {type: 'header', label: 'Disciplines'},
    {type: 'list-item', icon: 'class', label: 'View Disciplines', link: ['view', 'disciplines']},
    {type: 'divider'},
    {type: 'header', label: 'Class'},
    {type: 'list-item', icon: 'supervisor_account', label: 'View Classes', link: ['view', 'class']}
  ];
}
