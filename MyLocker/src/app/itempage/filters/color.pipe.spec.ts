import { ColorPipe } from './color.pipe';
import { Pipe, PipeTransform } from '@angular/core';

describe('ColorPipe', () => {
  it('create an instance', () => {
    const pipe = new ColorPipe();
    expect(pipe).toBeTruthy();
  });
});
