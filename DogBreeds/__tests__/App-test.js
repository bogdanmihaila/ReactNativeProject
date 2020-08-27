/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

test('Check for ticks.', () => {
     expect('ticks').toMatch(/tick/);
});
 
test('U is not in here.', () => {
     expect('here').not.toMatch(/u/);
});