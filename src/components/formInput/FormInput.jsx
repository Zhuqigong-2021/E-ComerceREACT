import React from 'react';
import { Group, Input, FormInputLabel } from './FormInput.style';

const FormInput = ({ label, ...otherprops }) => {
  return (
    <Group>
      <Input {...otherprops} />
      {label && (
        <FormInputLabel shrink={otherprops.value.length}>
          {label}
        </FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
