import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import { DISPLAY_TEXT } from '../../common/constants';
import { Thought } from '../../common/model';
import ThoughtElement, { RenderType } from '../../components/ThoughtElement';

interface ThoughtDetailState {
    thought?: Thought
}

class ThoughtDetail extends React.Component<{ navigation: any }, ThoughtDetailState> {

    constructor(props) {
        super(props)
        this.state = { thought: null }
    }

    componentDidMount = () => {
        const thought: Thought = this.props.navigation &&
            this.props.navigation.state &&
            this.props.navigation.state.params &&
            this.props.navigation.state.params.thought;
        if (!thought) {
            // Error handling
        } else {
            this.setState({ thought })
        }
    }

    render = () => (
        this.state.thought ?
            (<View style={styles.container}>
                <View style={styles.thoughtTitleSection}>
                    <ThoughtElement thought={this.state.thought} renderType={RenderType.ARROW_LEFT_SIDE} />
                </View>
                <View style={styles.thoughtDetailSection}>
                    <View style={styles.explanationContainer}>
                        <Text style={styles.explanationTitle}>{DISPLAY_TEXT.THOUGHT_EXPLANATION_HEADER}</Text>
                        <Text style={styles.explanationContent}>{this.state.thought.explanation}</Text>
                    </View>
                </View>
            </View>)
            : null
    )
}

export default ThoughtDetail;