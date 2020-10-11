// Core
import React, { useCallback, useRef } from 'react';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

// Instruments
import { searchActions } from 'bus/search/actions';

const Search = () => {
    const inputSearch = useRef(null);
    const dispatch = useDispatch();
    const actions = bindActionCreators({ ...searchActions }, dispatch);

    const handle = useCallback(() => {
        console.log('asdfasdf', inputSearch.current.value);
        actions.fetchPostsAsync({
            q:     inputSearch.current.value,
            sort:  'stars',
            order: 'desc',
        });
    }, []);
    const onClick = (event) => handle();

    const searchData = useSelector((state) => state.search);

    console.log(searchData);
    const getList = () => {
        return (
            <>
                {[...searchData].map((idx, item) => (<div key = { idx }>{item.name}</div>))}
            </>
        );
    };

    return (
        <div>
            <input name = { 'search' } ref = { inputSearch } type = { 'text' } />
            <button type = { 'button' } onClick = { onClick } >Search</button>
            <div>{getList()}</div>
        </div>
    );
};

export default Search;
