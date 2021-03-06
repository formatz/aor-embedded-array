import React from 'react';
import assert from 'assert';
import { shallow } from 'enzyme';
import EmbeddedArrayField from './EmbeddedArrayField';
import { TextField, UrlField } from 'admin-on-rest';

const record = {
    links: [
        {
            url: 'https://www.google.com/',
            context: 'Search engine',
        },
        {
            url: 'https://www.bing.com/',
            context: 'Search engine',
        },
    ],
};

describe('<EmbeddedArrayField />', () => {
    it('should display 2 nested SimpleShowLayouts', () => {
        const wrapper = shallow(
            <EmbeddedArrayField record={record} source="links">
                <UrlField source="url" />
                <TextField source="context" />
            </EmbeddedArrayField>,
        );
        assert.equal(2, wrapper.find('SimpleShowLayout').length);
        assert.deepEqual(
            [['links[0].url', 'links[0].context'], ['links[1].url', 'links[1].context']],
            wrapper.find('SimpleShowLayout').map(s => s.prop('children').map(c => c.props.source)),
        );
    });
});

const primitiveRecord = {
    links: ['https://www.google.com/', 'https://www.bing.com/'],
};

describe('<EmbeddedArrayField /> with primitive record', () => {
    it('should display 2 nested SimpleShowLayouts', () => {
        const wrapper = shallow(
            <EmbeddedArrayField record={primitiveRecord} source="links">
                <UrlField />
            </EmbeddedArrayField>,
        );
        assert.equal(2, wrapper.find('SimpleShowLayout').length);
        assert.deepEqual(
            [['links[0]'], ['links[1]']],
            wrapper.find('SimpleShowLayout').map(s => s.prop('children').map(c => c.props.source)),
        );
    });
});
