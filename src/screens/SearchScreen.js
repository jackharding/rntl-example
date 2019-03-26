import React, { Component } from 'react';
import {
    ScrollView,
    View,
} from 'react-native';

import {
    SearchSuggestions,
} from '../components';

export class SearchScreen extends Component {
    state = {
        search: '',
    }

    goToResults = () => {
        console.log('Do stuff');
    }

    render() {
        let {
            eventCount,
            suggestions,
            history,
            fetching,
        } = this.props;

        return(
            <View>
                <ScrollView>
                    <View>
                        <SearchSuggestions
                            fetching={this.state.search.length >= 3 ? fetching : history.fetching}
                            suggestions={this.state.search.length >= 3 ? suggestions : history.data}
                            resultsCount={eventCount}
                            onSearch={this.goToResults}
                            displayingHistory={this.state.search.length < 3}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

SearchScreen.defaultProps = {
    history: {
        fetching: false,
        data: [
            {
                search_term: "cardiff",
                term_id: "cardif"
            }
        ]
    }
}

export default SearchScreen;