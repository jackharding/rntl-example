import React, { Fragment } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

import Loading from './Loading';

const SearchSuggestions = ({ suggestions, resultsCount, fetching, onSearch }) => (
    <View>
        { fetching ? <Loading /> :
            <Fragment>
                { suggestions && !!suggestions.length && suggestions.map(item => (
                    <TouchableHighlight
                        onPress={() => onSearch(item.search_term || item.title, null, item.tax_name === 'location' && item.level === 1)}
                        underlayColor={'transparent'}
                        key={item.term_id || item.title}
                        testID={'searchSuggestion'}
                    >
                        <View>
                            <Text>{ item.search_term || item.title }</Text>
                            { item.text && <Text>{ item.text }</Text> }
                        </View>
                    </TouchableHighlight>
                )) }
            </Fragment>
        }
    </View>
);

SearchSuggestions.defaultProps = {
    resultsCount: 0
}

export default SearchSuggestions;