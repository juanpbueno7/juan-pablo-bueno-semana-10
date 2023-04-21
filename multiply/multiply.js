export class multiply {
    constructor() {
      this.num1 = 0;
      this.num2 = 0;
      this.result = 0;
    }
  
    render() {
      const container = document.createElement('div');
      const form = document.createElement('form');
      const input1 = document.createElement('input');
      const input2 = document.createElement('input');
      const button = document.createElement('button');
      const output = document.createElement('p');
  
      input1.type = 'number';
      input1.placeholder = 'Ingrese el primer número';
      input1.addEventListener('input', (event) => {
        this.num1 = event.target.value;
      });
  
      input2.type = 'number';
      input2.placeholder = 'Ingrese el segundo número';
      input2.addEventListener('input', (event) => {
        this.num2 = event.target.value;
      });
  
      button.type = 'submit';
      button.textContent = 'Multiplicar';
      button.addEventListener('click', (event) => {
        event.preventDefault();
        this.result = this.num1 * this.num2;
        output.textContent = `El resultado es ${this.result}`;
      });
  
      form.appendChild(input1);
      form.appendChild(input2);
      form.appendChild(button);
      container.appendChild(form);
      container.appendChild(output);
  
      return container;
    }
}