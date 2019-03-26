import { render, fireEvent } from 'react-native-testing-library';
import { SearchScreen } from '../SearchScreen';
import React from 'react';

test('should render correct amount of suggestions', () => {
    const { debug, queryAllByProps } = render(
        <SearchScreen
            fetchPreferences={() => null}
            history={{
                fetching: false,
                data: [
                    {
                        search_term: 'Cardiff',
                        term_id: 'cardiff'
                    }
                ]
            }}
        />
    );

    expect(queryAllByProps({ testID: 'searchSuggestion' })).toHaveLength(1);
});