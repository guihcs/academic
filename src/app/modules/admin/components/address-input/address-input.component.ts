import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {AddressService} from '../../../../global-services/address/address.service';
import {ConfigurableInput} from '../../../../libs/dynamic-forms/models/configurable-input';

@Component({
  selector: 'app-address-input',
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.css']
})
export class AddressInputComponent implements OnInit, ConfigurableInput, AfterViewInit {

  cepControl = new FormControl('');
  cityControl = new FormControl({value: ''});
  stateControl = new FormControl({value: ''});

  formGroup = new FormGroup({
    cep: this.cepControl,
    city: this.cityControl,
    state: this.stateControl
  });

  constructor(private addressService: AddressService) {
  }

  ngOnInit(): void {


  }

  ngAfterViewInit(): void {
    this.cepControl.valueChanges.subscribe(async (val: string) => {
      if (val?.length === 8) {
        let data: any = await this.addressService.getAddress(val);
        this.cityControl.setValue(data.localidade);
        this.stateControl.setValue(data.uf);
      }

    });
  }


  applyArguments(args: any): any {

    this.cepControl.setValue(args.defaultValue?.cep);
    this.cityControl.setValue(args.defaultValue?.city);
    this.stateControl.setValue(args.defaultValue?.state);

  }

  getFormControl(): any {
    return this.formGroup;
  }


}
