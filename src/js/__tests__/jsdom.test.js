import Popover from '../widget.js';

beforeAll(() => {
  document.body.innerHTML = '<div class="widget"></div>';
});

test('render self', () => {
  const container = document.querySelector('.widget');
  const widget = new Popover(container);

  widget.bindToDOM();
  expect(container.innerHTML).toEqual(Popover.markup);
});

test('show popover on input click', () => {
  const container = document.querySelector('.widget');
  const widget = new Popover(container);
  widget.bindToDOM();

  const input = container.querySelector(Popover.inputSelector);
  const popover = container.querySelector(Popover.popoverSelector);
  input.click();

  expect(popover.classList.contains('hidden')).toBeFalsy();
});

test('show popover on button click', () => {
  const container = document.querySelector('.widget');
  const widget = new Popover(container);
  widget.bindToDOM();

  const button = container.querySelector(Popover.buttonSelector);
  const popover = container.querySelector(Popover.popoverSelector);
  button.click();

  expect(popover.classList.contains('hidden')).toBeFalsy();
});
