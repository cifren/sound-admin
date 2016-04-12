# API DOCUMENTATION

## Form field type
The admin use (react-jsonschema-form)[https://github.com/mozilla-services/react-jsonschema-form]

#### For `boolean` fields

  * `radio`: a radio button group with `true` and `false` as selectable values;
  * `select`: a select box with `true` and `false` as options;
  * by default, a checkbox is used

> Note: To set the labels for a boolean field, instead of using `true` and `false` 
you can set `enumNames` in your mapper. The order is always `[true, false]`.

#### For `string` fields

  * `textarea`: a `textarea` element is used;
  * `password`: an `input[type=password]` element is used;
  * by default, a regular `input[type=text]` element is used.

The built-in string field also supports the JSONSchema `format` property, and 
will render an appropriate widget by default for the following formats:

- `date-time`: Six `select` elements are used to select the year, the month, the day, the hour, the minute and the second;
- `email`: An `input[type=email]` element is used;
- `uri`: An `input[type=url]` element is used;
- More formats could be supported in a near future, feel free to help us going faster!

#### For `number` and `integer` fields

  * `updown`: an `input[type=number]` updown selector;
  * `range`: an `input[type=range]` slider;
  * by default, a regular `input[type=text]` element is used.

> Note: for numbers, `min`, `max` and `step` input attributes values will be 
handled according to `minimum`, `maximium` and `multipleOf` values when they're defined.

#### Hidden widgets

It's possible to use an hidden widget for a given field by setting to `hidden` for this field

### Custom widget components

You can provide your own custom widgets to a uiSchema for the following json data types:

- `string`
- `number`
- `integer`
- `boolean`

```js
  const property = {
    type: "string"
  };
  
  const widget = 
    (props) => {
      return (
        <input type="text"
          className="custom"
          value={props.value}
          required={props.required}
          onChange={(event) => props.onChange(event.target.value)} />
      );
    }
  ;

  configureFormFields(formMapper) {
    formMapper.add('display_name', widget);
  }
```

For more details see (react-jsonschema-form)[https://github.com/mozilla-services/react-jsonschema-form/blob/master/README.md#form-customization]