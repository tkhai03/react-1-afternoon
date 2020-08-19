import React, {Component} from 'react';
//Topics
import EvenandOdd from './components/Topics/EvenandOdd'
import FilterObject from './components/Topics/FilterObject'
import FilterString from './components/Topics/FilterString'
import Palindrome from './components/Topics/Palindrome'
import Sum from './components/Topics/Sum'

class TopicBrowser extends Component {
    render() {
        return (
            <div>
                <EvenandOdd />
                <FilterObject />
                <FilterString />
                <Palindrome />
                <Sum />
            </div>
        )
    }
}

export default TopicBrowser;