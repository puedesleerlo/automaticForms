import { KeyPipe } from './key.pipe';

describe('KeyPipe', () => {
  it('create an instance', () => {
    const pipe = new KeyPipe();
    expect(pipe).toBeTruthy();
  });
  it('transform an object into an array', () => {
    const pipe = new KeyPipe();
    var model = {
      'nombre': {
        initValue: "Arnoldo",
        validationMessages: {
          required: "requerido"
        }
      },
      'apellido': {
        initValue: "Ruíz",
        validationMessages: {
          required: "requerido"
        }
      }
    }
    var array = pipe.transform(model)
    var objective = [{
      key: 'nombre', 
      value: {
        initValue: "Arnoldo",
        validationMessages: {
          required: "requerido"
        }
      }
    }, {
      key: 'apellido',
      value: {
        initValue: "Ruíz",
        validationMessages: {
          required: "requerido"
        }
      }
    }]
    expect(array).toEqual(objective)
  })
});