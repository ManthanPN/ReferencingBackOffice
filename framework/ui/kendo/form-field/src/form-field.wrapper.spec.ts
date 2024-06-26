import { FormlyFieldConfig } from '../../../../core/src/lib/core';
import { createFieldComponent } from '../../../../core/testing';
import { FormlyFormFieldModule } from '../../../kendo/form-field';

const renderComponent = (field: FormlyFieldConfig) => {
  return createFieldComponent(field, {
    imports: [FormlyFormFieldModule],
  });
};

describe('ui-kendo: FormField Wrapper', () => {
  it('should render form-field wrapper', () => {
    const { query } = renderComponent({
      wrappers: ['form-field'],
      props: {
        label: 'Name',
        required: true,
      },
    });

    expect(query('formly-wrapper-kendo-form-field')).not.toBeNull();
    expect(query('label').nativeElement.textContent.trim()).toEqual('Name *');
  });

  it('should show error message', () => {
    const { query } = renderComponent({
      key: 'name',
      wrappers: ['form-field'],
      validation: { show: true },
      props: {
        label: 'Name',
        required: true,
      },
    });

    expect(query('formly-validation-message')).not.toBeNull();
  });

  it('should hide required marker', () => {
    const { query } = renderComponent({
      wrappers: ['form-field'],
      props: {
        label: 'Name',
        hideRequiredMarker: true,
        required: true,
      },
    });

    expect(query('label').nativeElement.textContent.trim()).toEqual('Name');
  });

  it('should hide label', () => {
    const { query } = renderComponent({
      wrappers: ['form-field'],
      props: {
        label: 'Name',
        hideLabel: true,
      },
    });

    expect(query('label > span')).toBeNull();
  });
});
