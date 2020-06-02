import {CourseFormData} from './CourseFormData';
import {DataSelectorComponent} from '../templates/data-selector/data-selector.component';
import {CoordinatorService} from '../modules/admin/services/coordinator/coordinator.service';
import {CustomInput} from '@guihss/ngx-dynamic-forms';


export class CourseDetails extends CourseFormData{


  @CustomInput(DataSelectorComponent, {
    label: 'Coordinator',
    args: {
      dataSource: CoordinatorService,
      displayProperty: 'name',
      dataMapping: (coordinator) => {

        return coordinator ? {id: coordinator._id, name: coordinator.name} : null;
      }
    }
  })
  coordinator;

  get coordinatorName(){
    return this.coordinator?.name;
  }

}
