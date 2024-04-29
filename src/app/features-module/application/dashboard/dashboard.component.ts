import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  FormlyFieldConfig,
  FormlyFormOptions,
} from '../../../../../framework/core/src/lib/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  myForm = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  constructor(){}

  ngOnInit(): void {
    this.setForm();
  }
  onSubmit(){}
  setForm() {
    this.fields = [
      {
        fieldGroupClassName: 'row my-2',
        fieldGroup: [
          {
            className: 'col-12',
            key: 'schoolId',
            type: 'select',
            props: {
              label: 'School',
              options:  [
                        { value: 1, label: 'Option 1' },
                        { value: 2, label: 'Option 2' },
                        { value: 3, label: 'Option 3' },
                      ],
              primitive: true,
              required: true,
            },
          },
        ],
      },
     
      {
        fieldGroupClassName: 'row my-2',
        fieldGroup: [
          {
            className: 'col-12',
            key: 'startDate',
            type: 'date',
            props: {
              label: 'Start Date',
              primitive: true,
              required: true,
              format: 'dd/MM/yyyy',
            },
          },
        ],
      },
     
    ];
  }
}
