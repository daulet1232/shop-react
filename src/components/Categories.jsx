import React, { useState } from 'react'
import PropTypes from 'prop-types';

// class Categories extends React.Component {
//     state = {
//         activeItem: 0
//     };
//     onSelectedItem = (index) => {
//         this.setState({
//             activeItem: index
//         })
//     }
//     render() {
//         const { items, onClickItem } = this.props;
//         console.log(this.state);
//         return (
//             <div className="categories">
//                 <ul>
//                     <li>Все</li>
//                     {items.map((name, index) => (
//                         <li className={this.state.activeItem === index ? 'active' : ''} onClick={() => this.onSelectedItem(index)} key={`${name}_${index}`}>{name}</li>
//                     ))}
//                 </ul>
//             </div>
//         )
//     }

// }

const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {

    return (
        <div className="categories">
            <ul>
                <li className={activeCategory === null ? 'active' : ''} onClick={() => onClickCategory(null)}>Все</li>
                {items && items.map((name, index) => (
                    <li className={activeCategory === index ? 'active' : ''} onClick={() => onClickCategory(index)} key={`${name}_${index}`}>{name}</li>
                ))}
            </ul>
        </div>
    )
})

Categories.propTypes = {
    activeCategory: PropTypes.number,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClickCategory: PropTypes.func.isRequired
}

Categories.defaultProps = { activeCategory: null, items: [] };
export default Categories