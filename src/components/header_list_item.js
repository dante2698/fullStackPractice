import React from 'react';
import { css } from 'glamor';
 
const NewsItem = (props) => {
//GLOAMOUR CSS BELOW
    // let news_item = css(
    //     {
    //         padding: '20px',
    //         boxSizing: 'border-box',
    //         borderBotton: '1px solid black',
    //         ':hover': {
    //             color:'red'
    //         }
    //     }
    // )
    // let item_grey = css(
    //     {
    //         background: 'green'
    //     }
    // )
    return (
        <div>
            <h3>{props.item.title}</h3>
            <div>
                {props.item.feed}
                <div />
            </div>
        </div>
    )
}
export default NewsItem;