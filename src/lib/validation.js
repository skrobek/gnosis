import validate from 'validate.js';

const validateForm = (values, rules) => {
  validate.formatters.custom = (errors) => {
    const result = {};
    errors.forEach((er) => {
      result[er.attribute] = er.error;
    });

    return result;
  };

  return validate(values, rules, { format: 'custom' });
};

export default validateForm;
