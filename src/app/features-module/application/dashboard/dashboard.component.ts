import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {
  FormlyFieldConfig,
  FormlyFormOptions,
} from '../../../../../framework/core/src/lib/models';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  myForm = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[];

  constructor() {}

  ngOnInit(): void {
    this.setForm();
  }
  onSubmit() {}
  setForm() {
    this.fields = [
      {
        fieldGroupClassName: 'row my-2',
        fieldGroup: [
          {
            className: 'col-sm-3',
            type: 'input',
            key: 'applicantId',
            props: {
              label: 'Applicant ID',
            },
          },
          {
            template: `<button style:"display:flex;text-align:center;justify-content:center">Search</button>`,
            className: 'col-sm-1 btn btn-outline-primary btn-sm',
          },
          {
            className: 'col-sm-2',
            key: 'status',
            type: 'select',
            props: {
              label: 'Status',
              options: [
                { value: 1, text: 'Completed' },
                { value: 2, text: 'Ongoing' },
                { value: 3, text: 'Planning' },
              ],
              primitive: true,
              required: true,
            },
          },
          {
            className: 'col-sm-3',
            key: 'startDate',
            type: 'date',
            props: {
              label: 'Start Date',
              primitive: true,
              required: true,
              format: 'dd/MM/yyyy',
            },
          },
          {
            className: 'col-sm-3',
            key: 'endDate',
            type: 'date',
            props: {
              label: 'End Date',
              primitive: true,
              required: true,
              format: 'dd/MM/yyyy',
            },
          },
        ],
      },
      {
        fieldGroupClassName: 'row',
        fieldGroup: [
          {
            className: 'col-sm-4',
            type: 'input',
            key: 'globalSearch',
            props: {
              label: 'Global Search',
            },
          },
          {
            template: `<button style:"display:flex;text-align:center;justify-content:center">Search</button>`,
            className: 'col-sm-1 btn btn-outline-primary btn-sm',
          },
          {
            className: 'col-sm-3',
            key: 'agentType',
            type: 'select',
            props: {
              label: 'Agent Type',
              options: [
                { value: 1, text: 'Type 1' },
                { value: 2, text: 'Type 2' },
              ],
              primitive: true,
              required: true,
            },
          },
          {
            className: 'col-sm-4',
            type: 'input',
            key: 'agentName',
            props: {
              label: 'Agent Name',
            },
          },
        ],
      },
      {
        fieldGroupClassName:'row',
        fieldGroup:[
          {
            className: 'col-sm-3',
            key: 'highRiskTaskId',
            type: 'select',
            props: {
              label: 'High risk task',
              options: [
                { value: 1, text: 'Yes' },
                { value: 2, text: 'No' },
              ],
              primitive: true,
              required: true,
            },
          },
          {
            className: 'col-sm-3',
            key: 'validationTask',
            type: 'select',
            props: {
              label: 'Validation task',
              options: [
                { value: 1, text: 'Yes' },
                { value: 2, text: 'No' },
              ],
              primitive: true,
              required: true,
            },
          },
        ]
      }
    ];
  }
}
