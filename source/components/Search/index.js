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
        actions.fetchPostsAsync({
            q:          inputSearch.current.value || 'test',
            sort:       'stars', // sort by stars
            order:      'desc',
            'per_page': 30, // per page
        });
    }, []);
    const onClick = () => handle();

    const searchData = useSelector((state) => state.search);

    console.log('-->', [...searchData]);
    const getList = () => {
        return (
            <>
                {[...searchData].map((item, idx) => (
                    <>
                        <div key = { idx }>
                            {item.get('name')}  (<span>stars: {item.get('stargazers_count')}</span>)
                        </div>
                    </>
                ))}
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
