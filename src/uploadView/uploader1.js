export const schema = {
  type: "object",
  properties: {
    foo: {
      type: "object",
      properties: {
        bar: { type: "string" }
      }
    },
    baz: {
      type: "array",
      items: {
        type: "object",
        properties: {
          description: {
            type: "string"
          }
        }
      }
    }
  }
};

export const uiSchema = {
  foo: {
    bar: {
      "ui:widget": "textarea"
    }
  },
  baz: {
    // note the "items" for an array
    items: {
      description: {
        "ui:widget": "textarea"
      }
    }
  }
};
