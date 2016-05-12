import React from 'react';
import {
    View,
    Text
} from 'react-native'

export default (item) => ({
    message: (
        <View>
            <Text style={{fontSize: 12,fontStyle:'italic'}}>{item.username}</Text>
            <Text>{item.content}</Text>
        </View>
    )
})[item.type]