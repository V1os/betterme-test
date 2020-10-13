// Core
import React, { useCallback, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

// Instruments
import { searchActions } from 'bus/search/actions';

const Search = () => {
    const inputSearch = useRef(null);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState('-');
    const dispatch = useDispatch();
    const actions = bindActionCreators({ ...searchActions }, dispatch);

    const handleRequest = (paramsLink) => {
        setPage(paramsLink.page);
        setQuery(paramsLink.q);

        actions.fetchPostsAsync({
            q:          paramsLink.q || query,
            sort:       paramsLink.sort,
            order:      paramsLink.order,
            'per_page': paramsLink.per_page,
            'page':     paramsLink.page || page,
        });
    };
    const handle = useCallback(() => {
        handleRequest({
            q:          inputSearch.current.value || query,
            sort:       'stars', // sort by stars
            order:      'desc',
            'per_page': 30, // per page
        });
    }, [page, query]);

    const { list = [], links, total = 0 } = useSelector((state) => state.search);

    const onClick = () => handle();
    const nextHandle = (paramsLink) => () => handleRequest(paramsLink);
    const lastHandle = (paramsLink) => () => handleRequest(paramsLink);
    const previousHandle = (paramsLink) => () => handleRequest(paramsLink);
    const firstHandle = (paramsLink) => () => handleRequest(paramsLink);
    const disabled = (object) => object === undefined;

    const getList = () => {
        return (
            <>
                {list.map((item, idx) => (
                    <>
                        <div key = { idx }>
                            {item.name}  (<span>stars: {item.stargazers_count}</span>)
                        </div>
                    </>
                ))}
                <button
                    disabled = { disabled(links.first) }
                    key = { 'first' }
                    onClick = { links.first ? firstHandle(links.first) : null }> {'<<'} </button>
                <button
                    disabled = { disabled(links.prev) }
                    key = { 'prev' }
                    onClick = { links.prev ? previousHandle(links.prev) : null }> {'<'} </button>
                <button
                    disabled = { disabled(links.next) }
                    key = { 'next' }
                    onClick = { links.next ? nextHandle(links.next) : null }> {'>'} </button>
                <button
                    disabled = { disabled(links.last) }
                    key = { 'last' }
                    onClick = { links.last ? lastHandle(links.last) : null }> {'>>'} </button>
            </>
        );
    };

    return (
        <div>
            Repo name: <input name = { 'search' } ref = { inputSearch } type = { 'text' } />
            <button type = { 'button' } onClick = { onClick } >Search</button>
            <hr />
            <div>
                {getList()}
            </div>
            <hr />
            <div>Page: {page}/{Math.ceil(total/30)} Total: {total}</div>
        </div>
    );
};

export default Search;
