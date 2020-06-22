import React, {useState} from 'react';
import {StyleSheet, Text, View, Button} from "react-native";

const Paginator = (props) => {

    let pagesCount = Math.ceil(props.photosAmount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / props.portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * props.portionSize + 1;
    let rightPortionPageNumber = portionNumber * props.portionSize;

    console.log(props);

    return (
        <View style={styles.paginator}>
            {portionNumber > 1 && <Button title="PREV" onPress={() => {
                setPortionNumber(portionNumber - 1)
            }}/>}
            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map((page) => {
                return <View key={page} style={styles.phone}><Text onPress={(e) => props.onSetCurrentPage(page)}
                                                                   style={[(props.currentPage === page && styles.selected), styles.paginatorText]}>{page}</Text>
                </View>
            })}
            {portionCount > portionNumber && <Button title="NEXT" onPress={() => {
                setPortionNumber(portionNumber + 1)
            }}/>}
        </View>
    );
};


const styles = StyleSheet.create({
    paginator: {
        flexDirection: 'row'
    },
    selected: {
        fontWeight: 'bold'
    },
    paginatorText: {
        padding: 4,
        fontSize: 15
    }

});


export default Paginator;
