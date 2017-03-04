import expect from 'expect'
import React from 'react'
import Liform from '../'
import { FormFrame } from './test-utils'
import { shallow, mount, render } from 'enzyme'

describe('DateTimeWidget', () => {
    it('should render a form with a type datetime widget', () => {
        const schema = {
            title: 'A schema',
            properties: {
                'datetime': {
                    'type': 'string',
                    'widget': 'datetime',
                },
            }
        }


        const Component = (
            <FormFrame>
                <Liform schema={schema} />
            </FormFrame>
        )

        const wrapper = render(Component)

        expect(wrapper.find('input[type=datetime-local]').length).toEqual(1);

    })
})
